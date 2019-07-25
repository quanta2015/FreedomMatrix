import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input,DatePicker,InputNumber,Select,Switch,Tabs,Button,Form,message  } from 'antd';
import moment  from 'moment'
import clone from 'util/clone'
import MSelect from 'util/MSelect'
import { workareaList, worktimeList, worktypeList, worklangList, workroleList, workprojList, DATE_FORMAT } from 'constant/data'

const { Option } = Select;
const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;

@inject('userActions', 'userStore')
@observer
class Reg extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.userActions
    this.store   = props.userStore

    this.newTabIndex = 0;
    const panes = [{
        proj_name:"",
        date_from:moment(new Date()).format("YYYY/MM/DD"),
        date_to:  moment(new Date()).format("YYYY/MM/DD"),
        work_lang:["0"],
        work_role:["0"],
        work_proj:["0"],
        work_detl:"",
        key:'1'
      }];

    this.state = {
      showexp: false,
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
    let expItem = {
      proj_name:"",
      date_from:moment(new Date()).format(DATE_FORMAT),
      date_to:  moment(new Date()).format(DATE_FORMAT),
      work_lang:["0"],
      work_role:["0"],
      work_proj:["0"],
      work_detl:"",
      key:activeKey
    }
    panes.push(expItem);
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
    let nameList= ['proj_name','date_from','date_to','work_lang','work_role','work_proj','work_detl']
    for(let i=0;i<panes.length;i++) {
      for(let j=0;j<nameList.length;j++) {
        formObj[`${nameList[j]}_${i+1}`] = panes[i][nameList[j]]
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

  doReg = (e) =>{
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let pwd = values.pwd
        let repwd = values.repwd
        if (pwd !== repwd) {
          message.success('登録成功!')
        }else{
          let r = await this.actions.saveUser(values)
          if (r && r.code === 200) {
            window.location.assign(`${window.location.origin}${window.location.pathname}#/home`)
          }
        }
      }
    })
  }

  showExp = (e)=>{
    this.setState({ showexp: e })
  }

  saveVal = (id,name,e)=>{
    const { panes } = this.state;
    let val  = e.target.value
    panes[id][name]=val
    this.setState({ panes});
  }

  saveRange = (id,v)=>{
    const { panes } = this.state;
    panes[id]['date_from'] = v[0].format(DATE_FORMAT)
    panes[id]['date_to']   = v[1].format(DATE_FORMAT)
    this.setState({ panes});
  }

  saveMul = (id,name,e)=>{
    let val = []
    const { panes } = this.state;
    e.map((i)=>{val.push(i)})
    panes[id][name]=val
    this.setState({ panes});
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    let { showexp,panes } = this.state

    return (
      <div className='g-reg'>
        <div className="m-reg">
          <h1 className="m-reg_h1">無料登録フォーム</h1>
          <h2 className="m-reg_h2">基本情報をご入力ください</h2>
          <Form className="m-reg-form" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
            >
            <Form.Item label="メールアドレス">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'メールアドレスを入力してください' }],
              })(<Input placeholder="email@address.com"/>)}
            </Form.Item>
            <Form.Item label="パスワード">
              {getFieldDecorator('pwd', {
                rules: [{ required: true, message: 'パスワードを入力してください' }],
              })(<Input.Password placeholder=""/>)}
            </Form.Item>
            <Form.Item label="パスワード（確認用）">
              {getFieldDecorator('repwd', {
                rules: [{ required: true, message: 'パスワードを再入力してください' }],
              })(<Input.Password placeholder=""/>)}
            </Form.Item>
            <Form.Item label="氏名（漢字）">
              {getFieldDecorator('name-kj', {
                rules: [{ required: true, message: '氏名を入力してください' }],
              })(<Input placeholder="自由陣　太郎"/>)}
            </Form.Item>
            <Form.Item label="氏名（カナ）">
              {getFieldDecorator('name-kn', {
                rules: [{ required: true, message: '氏名（カナ）を入力してください' }],
              })(<Input placeholder="ジユウジン　タロウ"/>)}
            </Form.Item>
            <Form.Item label="生年月日">
              {getFieldDecorator('bday', {
                rules: [{ required: true,　message: '生年月日を入力してください' }],
              })(<DatePicker className="m-form-text"          
                              placeholder='年/月/日'              
                              format= {DATE_FORMAT}              
              />)}
            </Form.Item>
            <Form.Item label="電話番号">
              {getFieldDecorator('phone', {
                rules: [{ required: true, type:'number', min:10000000000, max:99999999999,  message: '電話番号を入力してください' }],
              })(<InputNumber placeholder="01234567890（ハイフン不要）" style={{width:'100%'}} />)}
            </Form.Item>
            <Form.Item label="カテゴリー">
              {getFieldDecorator('pers_type', {
                initialValue: "0",
                rules: [{ required: true, type: 'string', message: 'カテゴリーを選択してください' }]
                
              })(<Select className="m-form-text">
                  <Option value="0">フリーランス</Option>
                  <Option value="1">副業</Option>
                </Select>)}
            </Form.Item>

            <h2 className="m-reg_h2">稼働希望をご入力ください</h2>
            <Form.Item label="勤務希望エリア">
              {getFieldDecorator('work_area', {
                rules: [{ required: true, type: 'array', message: '勤務希望エリアを選択してください' }],
                initialValue: ["0"]
              })(<MSelect className="m-form-text" data={workareaList}/> )}
            </Form.Item>
            <Form.Item label="希望稼働時期">
              {getFieldDecorator('work_time', {
                rules: [{ required: true, type: 'array', message: '希望稼働時期を選択してください' }],
                initialValue: ["0"]
              })(<MSelect className="m-form-text" data={worktimeList}/> )}
            </Form.Item>
            <Form.Item label="希望月額報酬（万円）">
              {getFieldDecorator('work_mony', {
                rules: [{ type: 'integer', required: true,  min:1, max:200, message: '希望月額報酬を入力してください（最大200万円）' }],
                initialValue: 10
              })(<InputNumber placeholder="数字（単位：万円）" />)}
            </Form.Item>
            <Form.Item label="希望働き方">
              {getFieldDecorator('work_type', {
                rules: [{ required: true, type: 'array', message: '希望働き方を選択してください' }],
                initialValue: ["0"]
              })(<MSelect className="m-form-text" data={worktypeList}/>)}
            </Form.Item>

        
            <h2 className="m-reg_h2">
              <span className="m-h2-ti">経験・スキル登録</span>
              <Switch onChange={this.showExp} />
            </h2>
            
            {showexp?(
              <Tabs defaultActiveKey="1" 
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
              >
                {this.state.panes.map((item,index)=>{
                  return (
                  <TabPane key={item.key} tab={ `案件 ${index+1}` } 
                  >
                    <Form.Item label="案件名">

                    {getFieldDecorator(`proj_name_${index+1}`, {
                      rules: [{ required: true, type: 'string', message: '案件名を入力してください' }],
                      initialValue: item.proj_name,
                    })(<Input placeholder="案件名" onChange={this.saveVal.bind(this,index,'proj_name')} />)}
                    </Form.Item>


                    <Form.Item label="期間">
                      {getFieldDecorator([`date_from_${index+1}`,`date_to_${index+1}`], {
                        rules: [{ required: true,  message: '期間を選択してください' }],
                        initialValue: [moment(item.date_from,DATE_FORMAT), moment(item.date_to,DATE_FORMAT)]
                      })(<RangePicker format={DATE_FORMAT}  className="m-form-text" 
                                      onChange={this.saveRange.bind(this,index)}/>)}
                    </Form.Item>

                    <Form.Item label="経験言語">
                      {getFieldDecorator(`work_lang_${index+1}`, {
                        rules: [{ required: true, type: 'array', message: '経験言語を選択してください' }],
                        initialValue: ["0"]
                      })(<MSelect className="m-form-text" data={worklangList}/>)}
                    </Form.Item>

                    <Form.Item label="経験職種">
                      {getFieldDecorator(`work_role_${index+1}`, {
                        rules: [{ required: true, type: 'array', message: '経験職種を選択してください' }],
                        initialValue: ["0"]
                      })(<MSelect className="m-form-text" data={workroleList}/>)}
                    </Form.Item>

                    <Form.Item label="経験工程">
                      {getFieldDecorator(`work_proj_${index+1}`, {
                        rules: [{ required: true, type: 'array', message: '経験工程を選択してください' }],
                        initialValue: ["0"]
                      })(<MSelect className="m-form-text" data={workprojList}/>)}
                    </Form.Item>

                    <Form.Item label="詳細">
                      {getFieldDecorator(`work_detl_${index+1}`, {
                        rules: [{ required: false, type: 'string', message: '詳細を入力してください' }],
                        initialValue: ""
                      })(<TextArea rows={4} onChange={this.saveVal.bind(this,index,'work_detl')}/>)}
                    </Form.Item>
                  </TabPane>
                  ) 
                })}
              </Tabs>
            ):(<div></div>)}

            <div className="m-row fn-frc">
              <Button type="primary"  htmlType="submit" onClick={this.doReg}>登録</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

const RegApp = Form.create()(Reg);

export default RegApp