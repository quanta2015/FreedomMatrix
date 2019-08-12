import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Tabs, Form, Button, DatePicker, Select, InputNumber, Modal, message } from 'antd';
import './index.less'
import * as urls from 'constant/urls'
import * as cd from 'constant/data'
import * as MSG from 'constant/msg'
import clone from 'util/clone'
import MSelect from 'util/MSelect'
import getNode from 'util/getNode'
import * as date from 'util/date'
import * as regex from 'util/regex'
import moment from 'moment'
import { toJS } from 'mobx'
import ProjaddApp from 'app/projadd'

const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;

@Form.create()
@inject('applyActions', 'applyStore', 'userActions', 'userStore')
@observer
class Homecomp extends React.Component {
  constructor(props) {
    super(props)

    regex.va_start()
    this.state = {
      editable: false
    }
  }

  setEdit = () => {
    this.setState({
      editable: true
    })
  }

  saveUser = () => {
    this.setState({
      editable: false
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (regex.va_check()) {
      let params = toJS(this.props.userStore.user)
      let r = await this.props.userActions.saveUser(params)
      if (r && r.code === 200) {
        Modal.success({
          title: '保存成功！',
          okText: "確認",
          onOk: () => {
            this.setState({ editable: false })
          }
        })
      }
    } else {
      message.error('表单数据错误！')
    }
  }

  doChangeMenu = (e) => {
    let id = getValue(this.props.userStore.user, 'user.id', '')
    let params = { id: id }
    this.props.applyActions.queryApply(params)
  }

  render() {
    const { editable } = this.state
    const { user } = this.props.userStore
    const name_comp = getValue(user, 'user.name_comp', '')
    const name_dept = getValue(user, 'user.name_dept', '')
    const email = getValue(user, 'user.email', '')
    const phone = getValue(user, 'user.phone', '')
    const name_kj = getValue(user, 'user.name_kj', '')
    const name_kn = getValue(user, 'user.name_kn', '')
    const posList = clone(getValue(user, 'pos', []))
    let act = this.props.userActions

    return (
      <div className='g-homeuser'>
        <Tabs className="m-home-menu" type="card" onChange={this.doChangeMenu}>
          <TabPane tab={MSG.TAB_HOME_USR_IF} key="1" className="m-tab-userinfo">
            <Form className="m-reg-form" onSubmit={this.handleSubmit} >
              <div className="m-row">
                <div className="m-tl">
                  <span>{MSG.MSG_FORM_BASIC}</span>
                  <div className="m-fn">
                    {!editable && <Button htmlType="button" onClick={this.setEdit}>{MSG.MSG_UPDATE}</Button>}
                    {editable && <Button htmlType="submit" type="danger" >{MSG.MSG_SAVE}</Button>}
                  </div>
                </div>
              </div>

              <div className="m-row">
                <div className="m-col-tl">{MSG.MSG_FORM_NAME_COMP}</div>
                <div className="m-col-co">
                  {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_NAME_COMP}
                    id='name_comp'
                    defaultValue={name_comp}
                    disabled={!editable}
                    onChange={regex.va_field.bind(this, MSG.TYPE_NULL, act, 0, null)} />}
                  <div className="ant-form-explain">请输入正确的会社名</div>
                </div>
                <div className="m-col-tl">{MSG.MSG_FORM_NAME_DEPT}</div>
                <div className="m-col-co">
                  {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_PHONE}
                    id='name_dept'
                    defaultValue={name_dept}
                    disabled={!editable}
                    onChange={regex.va_field.bind(this, MSG.TYPE_NULL, act, 0, null)} />}
                  <div className="ant-form-explain">请输入正确的部门</div>
                </div>
              </div>

              <div className="m-row">
                <div className="m-col-tl">{MSG.MSG_FORM_NAME_KJ_COMP}</div>
                <div className="m-col-co">
                  {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_NAKJ}
                    id='name_kj'
                    defaultValue={name_kj}
                    disabled={!editable}
                    onChange={regex.va_field.bind(this, MSG.TYPE_NULL, act, 0, null)} />}
                  <div className="ant-form-explain">请输入名字</div>
                </div>
                <div className="m-col-tl">{MSG.MSG_FORM_NAME_KN_COMP}</div>
                <div className="m-col-co">
                  {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_NAKN}
                    id='name_kn'
                    defaultValue={name_kn}
                    disabled={!editable}
                    onChange={regex.va_field.bind(this, MSG.TYPE_NULL, act, 0, null)} />}
                  <div className="ant-form-explain">请输入名字</div>
                </div>
              </div>

              <div className="m-row">

                <div className="m-col-tl">{MSG.MSG_FORM_PHONE}</div>
                <div className="m-col-co">
                  {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_PHONE}
                    id='phone'
                    defaultValue={phone}
                    disabled={!editable}
                    onChange={regex.va_field.bind(this, MSG.TYPE_PHONE, act, 0, null)} />}
                  <div className="ant-form-explain">请输入正确的电话号码</div>
                </div>

                <div className="m-col-tl">{MSG.MSG_FORM_EMAIL}</div>
                <div className="m-col-co">
                  {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_EMAIL}
                    id='email'
                    defaultValue={email}
                    disabled={!editable}
                    onChange={regex.va_field.bind(this, MSG.TYPE_EMAIL, act, 0, null)} />}
                  <div className="ant-form-explain">请输入正确的email</div>
                </div>
              </div>

              <div className="m-row">
                <div className="m-tl">
                  <span>{MSG.MSG_FORM_PROJ}</span>
                </div>
              </div>
              {/* <Tabs defaultActiveKey="0" id="tabExp">
                {posList.map((item, index) => {
                  return (
                    <TabPane tab={`案件 ${index + 1}`} key={index}>
                      <div className="m-row">
                        <div className="m-col-tl">{MSG.MSG_FORM_PR_NAME}</div>
                        <div className="m-col-co">
                          <Input placeholder={MSG.MSG_FORM_PR_NAME}
                            disabled={!editable}
                            id={`proj_name_${index + 1}`}
                            defaultValue={item.proj_name}
                            onChange={regex.va_field.bind(this, MSG.TYPE_NULL, act, 1, index)} />
                          <div className="ant-form-explain">请输入项目名字</div>
                        </div>
                      </div>
                      <div className="m-row">
                        <div className="m-col-tl">{MSG.MSG_FORM_PR_PERD}</div>
                        <div className="m-col-co">
                          <RangePicker format={cd.DATE_FORMAT}
                            className="m-form-text"
                            id={`proj_perd_${index + 1}`}
                            defaultValue={item.proj_date}
                            disabled={!editable}
                            onChange={regex.va_field_rsel.bind(this, `proj_perd_${index + 1}`, act, 1, index)} />
                        </div>
                        <div className="m-col-tl">{MSG.MSG_FORM_PR_LANG}</div>
                        <div className="m-col-co">
                          <MSelect className="m-form-text"
                            data={cd.worklangList}
                            defaultValue={item.work_lang.split('|')}
                            id={`work_lang_${index + 1}`}
                            disabled={!editable}
                            onChange={regex.va_field_msel.bind(this, `work_lang_${index + 1}`, act, 1, index)} />
                        </div>
                      </div>
                      <div className="m-row">
                        <div className="m-col-tl">{MSG.MSG_FORM_PR_ROLE}</div>
                        <div className="m-col-co">
                          <MSelect className="m-form-text"
                            data={cd.workroleList}
                            defaultValue={item.work_role.split('|')}
                            id={`work_role_${index + 1}`}
                            disabled={!editable}
                            onChange={regex.va_field_msel.bind(this, `work_role_${index + 1}`, act, 1, index)} />
                          <div className="ant-form-explain">请选择项目角色</div>
                        </div>
                        <div className="m-col-tl">{MSG.MSG_FORM_PR_PROJ}</div>
                        <div className="m-col-co">
                          <MSelect className="m-form-text"
                            data={cd.workprojList}
                            defaultValue={item.work_proj.split('|')}
                            id={`work_proj_${index + 1}`}
                            disabled={!editable}
                            onChange={regex.va_field_msel.bind(this, `work_proj_${index + 1}`, act, 1, index)} />
                        </div>
                      </div>
                      <div className="m-row">
                        <div className="m-col-tl">{MSG.MSG_FORM_PR_DETL}</div>
                        <div className="m-col-co">
                          <TextArea rows={4} defaultValue={item.work_detl}
                            id={`work_detl_${index + 1}`}
                            disabled={!editable}
                            onChange={regex.va_field.bind(this, MSG.TYPE_NULL, act, 1, index)} />
                        </div>
                      </div>
                    </TabPane>
                  )
                })}

              </Tabs> */}
            </Form>
          </TabPane>


          <TabPane tab={MSG.MSG_FORM_PROJ} key="2" className="m-tab-userinfo">
                
          </TabPane>

          <TabPane tab={MSG.TAB_HOME_PROJ} key="3" className="m-tab-userinfo">
            <ProjaddApp/>
          </TabPane>


        </Tabs>
      </div>
    )
  }
}

export default Homecomp