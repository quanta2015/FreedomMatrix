import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input,Tabs,Form,Button,DatePicker,Select,InputNumber } from 'antd';
import './index.less'
import * as urls from 'constant/urls'
import * as cd   from 'constant/data'
import * as MSG  from 'constant/msg'
import clone   from 'util/clone'
import MSelect from 'util/MSelect'
import getNode from 'util/getNode'
import moment  from 'moment'



const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;



@Form.create()
@inject('favActions', 'favStore', 'applyActions', 'applyStore', 'userStore')
@observer
class Homeuser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: true,
    }

    let params = {
      id: 67 //this.props.userStore.user.user.id
    }
    this.props.favActions.queryFav(params) 
    this.props.applyActions.queryApply(params) 
  }

  setEdit = () => {
    this.setState({
      editable: false
    })
  }


  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFields( async (err, values) => {
    

    })
  }

  render() {
    const { editable } = this.state
    const { user } = this.props.userStore
    const { getFieldDecorator } = this.props.form
    const personType = cd.personType

    const workareaList = getValue(user, 'user.workareaList', '') || ['0']
    const worktimeList = getValue(user, 'user.worktimeList', '') || ['0']
    const worktypeList = getValue(user, 'user.worktypeList', '') || ['0']
    const birth =        getValue(user, 'user.birth', '') || Date.now()
    const email =        getValue(user, 'user.email', '')
    const pwd =          getValue(user, 'user.pwd', '')
    const name_kj =      getValue(user, 'user.name_kj', '')
    const name_kn =      getValue(user, 'user.name_kn', '')
    const pers_type =    getValue(user, 'user.pers_type', '') || '0'
    const work_money   = getValue(user, 'user.work_money', '') || 0

    let favList = getValue(this.props.favStore.fav, 'data', [])
    let appList = getValue(this.props.applyStore.apply, 'data', [])

   
    return (
      <div className='g-homeuser'>
          <Tabs className="m-home-menu" type="card">
            <TabPane tab={MSG.TAB_HOME_USR_IF} key="1" className="m-tab-userinfo">
              <Form className="m-reg-form" onSubmit={this.handleSubmit} >
                <div className="m-row">
                  <div className="m-tl">
                    <span>{MSG.MSG_FORM_BASIC}</span>
                    <div className="m-fn">
                      <Button htmlType="button" onClick={this.setEdit}>{MSG.MSG_UPDATE}</Button>
                      <Button htmlType="submit" >{MSG.MSG_SAVE}</Button>
                    </div>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_EMAIL}</div>
                  <div className="m-col-co">
                    <Input placeholder={MSG.MSG_FORM_PD_EMAIL}  defaultValue={email} disabled={editable}/>
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_PHONE}</div>
                  <div className="m-col-co">
                    <Input placeholder={MSG.MSG_FORM_PD_PHONE}  defaultValue={pwd} disabled={editable}/>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_NAME_KJ}</div>
                  <div className="m-col-co">
                    <Input placeholder={MSG.MSG_FORM_PD_NAKJ} defaultValue={name_kj} disabled={editable}/>
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_NAME_KN}</div>
                  <div className="m-col-co">
                    <Input placeholder={MSG.MSG_FORM_PD_NAKN} defaultValue={name_kn}  disabled={editable}/>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_BIRTH}</div>
                  <div className="m-col-co">
                    <DatePicker className="m-form-text"  defaultValue={moment(birth)} placeholder='年/月/日'  format= {cd.DATE_FORMAT}  disabled={editable}/>
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_PS_TYPE}</div>
                  <div className="m-col-co">
                    <Select className="m-form-text" defaultValue={pers_type}  disabled={editable}>
                      {personType.map((item,index)=>{
                        return (<Option key={index} value={item.val}>{item.txt}</Option>)
                      })}
                    </Select>
                  </div>
                </div>

                <div className="m-row">
                  <div className="m-tl">
                    <span>{MSG.MSG_FORM_HOPE}</span>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_AREA}</div>
                  <div className="m-col-co">
                    <MSelect className="m-form-text" data={cd.workareaList} defaultValue={workareaList}  disabled={editable}/>
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_TIME}</div>
                  <div className="m-col-co">
                    <MSelect className="m-form-text" data={cd.worktimeList} defaultValue={worktimeList}  disabled={editable}/>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_MONEY}</div>
                  <div className="m-col-co">
                    <InputNumber placeholder={MSG.MSG_FORM_PD_MONEY} defaultValue={work_money}   disabled={editable}/>
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_TYPE}</div>
                  <div className="m-col-co">
                    <MSelect className="m-form-text" data={cd.worktypeList} defaultValue={worktypeList}  disabled={editable}/>
                  </div>
                </div>

                <div className="m-row">
                  <div className="m-tl">
                    <span>{MSG.MSG_FORM_EXP}</span>
                  </div>
                </div>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Tab 1" key="1">
                    <div className="m-row">
                      <div className="m-col-tl">{MSG.MSG_FORM_PR_NAME}</div>
                      <div className="m-col-co">
                        <Input placeholder={MSG.MSG_FORM_PR_NAME}  disabled={editable}/>
                      </div>
                    </div>
                    <div className="m-row">
                      <div className="m-col-tl">{MSG.MSG_FORM_PR_PERD}</div>
                      <div className="m-col-co">
                        <RangePicker format={cd.DATE_FORMAT}  className="m-form-text"  disabled={editable}/>
                      </div>
                      <div className="m-col-tl">{MSG.MSG_FORM_PR_LANG}</div>
                      <div className="m-col-co">
                        <MSelect className="m-form-text" data={cd.worklangList}  disabled={editable}/>
                      </div>
                    </div>
                    <div className="m-row">
                      <div className="m-col-tl">{MSG.MSG_FORM_PR_ROLE}</div>
                      <div className="m-col-co">
                        <MSelect className="m-form-text" data={cd.workroleList}  disabled={editable}/>
                      </div>
                      <div className="m-col-tl">{MSG.MSG_FORM_PR_PROJ}</div>
                      <div className="m-col-co">
                        <MSelect className="m-form-text" data={cd.workprojList}  disabled={editable}/>
                      </div>
                    </div>
                    <div className="m-row">
                      <div className="m-col-tl">{MSG.MSG_FORM_PR_DETL}</div>
                      <div className="m-col-co">
                        <TextArea rows={4}  disabled={editable}/>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </Form>
            </TabPane>
            <TabPane tab={MSG.TAB_HOME_APP_PR} key="2">
              <div className="m-fav">
                <div className="m-row m-row-tl">
                  <span>ID</span>
                  <span>プロジェクト名</span>
                  <span>開始日-締め切り</span>
                  <span>勤務地</span>
                  <span>業界</span>
                  <span>気になる</span>
                </div>
              {appList.map((e,index)=>{
                return( 
                  <div className="m-row" key={index} >
                    <span>{e.pid}</span>
                    <span>{e.proj_name}</span>
                    <span>{e.date_from}-{e.date_to}</span>
                    <span>{e.proj_area}</span>
                    <span>{e.proj_domn}</span>
                    <span><Button type="primary">終わり</Button></span>
                  </div>
                )
              })}
              </div>
            </TabPane>
            <TabPane tab={MSG.TAB_HOME_FAV_PR} key="3">
              <div className="m-fav">
                <div className="m-row m-row-tl">
                  <span>ID</span>
                  <span>プロジェクト名</span>
                  <span>開始日-締め切り</span>
                  <span>勤務地</span>
                  <span>業界</span>
                  <span>気になる</span>
                </div>
              {favList.map((e,index)=>{
                return( 
                  <div className="m-row" key={index} >
                    <span>{e.pid}</span>
                    <span>{e.proj_name}</span>
                    <span>{e.date_from}-{e.date_to}</span>
                    <span>{e.proj_area}</span>
                    <span>{e.proj_domn}</span>
                    <span><Button type="primary">キャンセル</Button></span>
                  </div>
                )
              })}
              </div>
            </TabPane>
            <TabPane tab={MSG.TAB_HOME_MSG} key="4">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
      </div>
    )
  }
}


export default Homeuser