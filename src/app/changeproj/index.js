import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input, DatePicker, Modal, InputNumber, Select, Switch, Tabs, Button, Form, message, Icon } from 'antd';
import moment from 'moment'
import clone from 'util/clone'
import MSelect from 'util/MSelect'
import * as DT from 'util/date'
import * as CT   from 'util/convert'
import * as CD   from 'constant/data'
const { Option } = Select;
const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;



@inject('projectActions', 'projectStore', 'userStore')
@observer
class Change extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.projectActions
    this.store = props.projectStore

    this.newTabIndex = 0;
    const panes = [{
      proj_role: ["0"],
      proj_mony: 0,
      proj_resp: ["0"],
      proj_cont: "",
      proj_lang: ["0"],
      reqr_exp: "",
      pref_exp: "",
      key: '0',
    }];

    this.state = {
      regtype: 0,
      activeKey: panes[0].key,
      panes,
    }
  }

  onChange = activeKey => {
    this.setState({ activeKey })
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    let posItem = {
      proj_role: ["0"],
      proj_mony: 0,
      proj_resp: ["0"],
      proj_cont: "",
      proj_lang: ["0"],
      reqr_exp: "",
      pref_exp: "",
      key: activeKey
    }

    panes.push(posItem);
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)

    let formObj = {}
    let nameList = ['proj_role', 'proj_mony', 'proj_resp', 'proj_cont', 'proj_lang', 'reqr_exp', 'pref_exp']
    for (let i = 0; i < panes.length; i++) {
      for (let j = 0; j < nameList.length; j++) {
        formObj[`${nameList[j]}_${i + 1}`] = panes[i][nameList[j]]
      }
    }

    this.props.form.setFieldsValue(formObj)

    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }

    this.setState({ panes, activeKey });
  };

  doChange = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let params = clone(values)
        Modal.confirm({
          title: 'データを確認してください',
          onOk: () => {
            this.changeProj(params)
          }
        });
      }
    })
  }

  close = () => {
    this.props.close()
  }

  changeProj = async (params) => {
    params.count = this.props.change.length
    params.id = this.props.project.id
    params[`date_from,date_to`][0] = DT.convertD2I(params[`date_from,date_to`][0])
    params[`date_from,date_to`][1] = DT.convertD2I(params[`date_from,date_to`][1])
    let i = 0
    params.cid = []
    for(i; i < this.props.change.length; i++){
      params.cid.push(this.props.change[i].id);
    }
    let r = await this.actions.projChange(params)
    if (r && r.code === 200) {
      Modal.success({
        title: '更改工程成功！',
        okText: "確認",
        onOk() {
          window.location.reload();
          
        }
      })
    }
  }

  // saveVal = (id, name, e) => {
  //   const { panes } = this.state;
  //   let val = e.target.value
  //   panes[id][name] = val
  //   this.setState({ panes });
  // }

  // saveMul = (id, name, e) => {
  //   let val = []
  //   const { panes } = this.state;
  //   e.map((i) => { val.push(i) })
  //   panes[id][name] = val
  //   this.setState({ panes });
  // }

  render() {
    const { getFieldDecorator } = this.props.form;
    let { change, project } = this.props
    return (
      <div className='g-changeproj'>
        <div className="m-proj-detail">
          <div className="m-proj-detail-wrap">
            <div className="m-close" onClick={this.close}></div>

            <div className="m-detail-wrap">

            <div className='g-change'>
                <div className="m-reguser">
                  <h2 className="m-reg_h2">案件変更</h2>
                  <Form className="m-reg-form" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
                  >
                    <Form.Item label="案件名">
                      {getFieldDecorator(`proj_name`, {
                        rules: [{ required: true, type: 'string', message: '案件名を入力してください' }],
                        initialValue:　project.proj_name
                      })(<Input placeholder="案件名" />)}
                    </Form.Item>
                    <Form.Item label="案件説明">
                      {getFieldDecorator(`proj_detl`, {
                        rules: [{ required: false, type: 'string', message: '案件説明を入力してください' }],
                        initialValue: project.proj_detl
                      })(<TextArea rows={4} />)}
                    </Form.Item>
                    <Form.Item label="業界">
                      {getFieldDecorator(`select-multiple-proj_domn`, {
                        rules: [{ required: true, type: 'array', message: '業界を選択してください' }],
                        initialValue: getValue(project, 'proj_domn', '').split("|")
                      })(<MSelect className="m-form-text" data={CD.projdomnList} />)}
                    </Form.Item>
                    <Form.Item label="稼働期間">
                      {getFieldDecorator([`date_from`, `date_to`], {
                        rules: [{ required: true, message: '稼働期間を選択してください' }],
                        initialValue: [moment(DT.convertI2D(project.date_from+''), "YYYY/MM/DD"), moment(DT.convertI2D(project.date_to+''), "YYYY/MM/DD")]
                      })(<RangePicker format={CD.DATE_FORMAT} className="m-form-text"
                      />)}
                    </Form.Item>
                    <Form.Item label="勤務エリア">
                      {getFieldDecorator('select-multiple-proj_area', {
                        rules: [{ required: true, type: 'array', message: '勤務エリアを選択してください' }],
                        initialValue: getValue(project, 'proj_area', '').split("|")
                      })(<MSelect className="m-form-text" data={CD.workareaList} />)}
                    </Form.Item>
                    <Form.Item label="こだわり">
                      {getFieldDecorator('select-multiple-proj_pref', {
                        rules: [{ required: true, type: 'array', message: 'こだわりを選択してください' }],
                        initialValue: getValue(project, 'proj_pref', '').split("|")
                      })(<MSelect className="m-form-text" data={CD.projprefList} />)}
                    </Form.Item>
                    <Form.Item label="応募対象">
                      {getFieldDecorator('proj_targ', {
                        initialValue: project.proj_targ,
                        rules: [{ required: true, type: 'string', message: 'カテゴリーを選択してください' }]
                      })(<Select className="m-form-text">
                        <Option value="0">フリーランス</Option>
                        <Option value="1">協力パートナー</Option>
                        <Option value="2">副業</Option>
                      </Select>)}
                    </Form.Item>
                    <Form.Item label="働き方">
                      {getFieldDecorator('select-multiple-proj_styl', {
                        rules: [{ required: true, type: 'array', message: '働き方を選択してください' }],
                        initialValue:  getValue(project, 'proj_styl', '').split("|")
                      })(<MSelect className="m-form-text" data={CD.worktypeList} />)}
                    </Form.Item>

                    <h2 className="m-reg_h2">
                      <span className="m-h2-ti">ポジション情報変更</span>
                    </h2>

                    {
                      <Tabs 
                      defaultActiveKey="0"
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        hideAdd={true}
                        onEdit={this.onEdit}                        
                      >
                        {change.map((item, index) => {

                          return (
                            <TabPane closable={false} key={item.key} tab={`ポジション ${index + 1}`}
                            >
                              <Form.Item label="単価（万円）">
                                {getFieldDecorator(`input-number-proj_mony_${index + 1}`, {
                                  rules: [{ type: 'integer', required: true, min: 1, max: 200, message: '単価を入力してください（最大200万円）' }],
                                  initialValue: change[index].proj_mony
                                })(<InputNumber placeholder="数字（単位：万円）" />)}
                              </Form.Item>
                              <Form.Item label="職種">
                                {getFieldDecorator(`select-multiple-proj_role_${index + 1}`, {
                                  rules: [{ required: true, type: 'array', message: '職種を選択してください' }],
                                  initialValue: getValue(change[index], 'proj_role', '').split("|")
                                })(<MSelect className="m-form-text" data={CD.workroleList} />)}
                              </Form.Item>
                              <Form.Item label="担当工程">
                                {getFieldDecorator(`select-multiple-proj_resp_${index + 1}`, {
                                  rules: [{ required: true, type: 'array', message: '担当工程を選択してください' }],
                                  initialValue: getValue(change[index], 'proj_resp', '').split("|")
                                })(<MSelect className="m-form-text" data={CD.projrespList} />)}
                              </Form.Item>
                              <Form.Item label="言語スキル">
                                {getFieldDecorator(`select-multiple-proj_lang_${index + 1}`, {
                                  rules: [{ required: true, type: 'array', message: '言語スキルを選択してください' }],
                                  initialValue: getValue(change[index], 'proj_lang', '').split("|")
                                })(<MSelect className="m-form-text" data={CD.worklangList} />)}
                              </Form.Item>
                              <Form.Item label="作業内容">
                                {getFieldDecorator(`proj_cont_${index + 1}`, {
                                  rules: [{ required: false, type: 'string', message: '作業内容を入力してください' }],
                                  initialValue: change[index].proj_cont
                                })(<TextArea rows={4} />)}
                              </Form.Item>

                              <h1>求める経験</h1>

                              <Form.Item label="必須">
                                {getFieldDecorator(`reqr_exp_${index + 1}`, {
                                  rules: [{ required: false, type: 'string', message: '求める経験（必須）を入力してください' }],
                                  initialValue: change[index].reqr_exp
                                })(<TextArea rows={4} />)}
                              </Form.Item>
                              <Form.Item label="歓迎">
                                {getFieldDecorator(`pref_exp_${index + 1}`, {
                                  rules: [{ required: false, type: 'string', message: '求める経験(歓迎)を入力してください' }],
                                  initialValue: change[index].pref_exp
                                })(<TextArea rows={4}  />)}
                              </Form.Item>
                            </TabPane>
                          )
                        })}
                      </Tabs>
                    }
                    <div className="m-row fn-frc">
                      <Button type="primary" htmlType="submit" onClick={this.doChange}>変更</Button>
                    </div>
                  </Form>
                </div>
              </div>
              </div>

          </div>
        </div>
      </div>
    )
  }
}

const ChangeProj = Form.create()(Change);

export default ChangeProj
