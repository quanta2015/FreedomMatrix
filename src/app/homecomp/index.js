import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Tabs, Form, Button, DatePicker, Select, InputNumber, Modal, message, Pagination } from 'antd';
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
import * as DATE from 'util/date'
import Homeproj from 'app/homeproj'
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
      let r = await this.props.userActions.saveComp(params)
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
            </Form>
          </TabPane>

          <TabPane tab={MSG.MSG_FORM_PROJ} key="2" className="m-tab-userinfo">
            <div className="m-fav">
              <Homeproj />
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Homecomp