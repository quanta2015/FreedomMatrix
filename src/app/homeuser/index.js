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
import * as date from 'util/date'
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
      editable: false,
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


  handleSubmit = (e) =>{
    e.preventDefault();

    let email     = document.getElementById('email').value
    let pwd       = document.getElementById('pwd').value
    let name_kj   = document.getElementById('name_kj').value
    let name_kn   = document.getElementById('name_kn').value
    let birth     = document.getElementById('birth').value
    let pers_type = document.getElementById('pers_type').value
    let workarea  = document.getElementById('workarea').innerText.split('\n')
    let worktime  = document.getElementById('worktime').value
    let workmoney = document.getElementById('workmoney').value
    let worktype  = document.getElementById('worktype').innerText.split('\n')

    if (email === '') {
      console.log('email')
      document.getElementById('email').parentNode.classList.add("has-error")
    }
    

    this.setState({
      editable: false
    })
  }

  doChangeMenu=(e)=>{
    let id = getValue(this.props.userStore.user, 'user.id', '')
    let params = { id: id }
    this.props.favActions.queryFav(params) 
    this.props.applyActions.queryApply(params) 
  }


  render() {
    const { editable } = this.state
    const { user } = this.props.userStore
    // const { getFieldDecorator } = this.props.form
    const ptList = cd.personType

    const workareaList = getValue(user, 'user.work_area', '').split("|")
    const worktimeList = getValue(user, 'user.work_time', '') .split("|")
    const worktypeList = getValue(user, 'user.work_type', '') .split("|")
    const _birth       = getValue(user, 'user.birth', '')
    const birth        = date.convertI2D(_birth)
    const email        = getValue(user, 'user.email', '')
    const pwd          = getValue(user, 'user.pwd', '')
    const name_kj      = getValue(user, 'user.name_kj', '')
    const name_kn      = getValue(user, 'user.name_kn', '')
    const pers_type    = getValue(user, 'user.pers_type', '') 
    const work_money   = getValue(user, 'user.work_money', '') 
    const expList      = clone(getValue(user, 'exp', []))

    let favList = getValue(this.props.favStore.fav, 'data', [])
    let appList = getValue(this.props.applyStore.apply, 'data', [])

    expList.map((item,index)=>{
      let from = date.convertI2D(item.date_from+'')
      let to = date.convertI2D(item.date_to+'')
      let proj_date = [moment(from, "YYYY/MM/DD"), moment(to, "YYYY/MM/DD")]
      item.proj_date = proj_date
    })

    return (
      <div className='g-homeuser'>
          <Tabs className="m-home-menu" type="card" onChange={this.doChangeMenu}>
            <TabPane tab={MSG.TAB_HOME_USR_IF} key="1" className="m-tab-userinfo">
              <Form className="m-reg-form" onSubmit={this.handleSubmit} >
                <div className="m-row">
                  <div className="m-tl">
                    <span>{MSG.MSG_FORM_BASIC}</span>
                    <div className="m-fn">
                      { !editable && <Button htmlType="button" onClick={this.setEdit}>{MSG.MSG_UPDATE}</Button>}
                      { editable && <Button  htmlType="submit" type="danger" >{MSG.MSG_SAVE}</Button>}
                    </div>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_EMAIL}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_EMAIL} id='email' defaultValue={email} disabled={!editable}/>}
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_PHONE}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_PHONE} id='pwd'  defaultValue={pwd} disabled={!editable}/>}
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_NAME_KJ}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_NAKJ} id='name_kj' defaultValue={name_kj} disabled={!editable}/>}
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_NAME_KN}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_NAKN} id='name_kn' defaultValue={name_kn}  disabled={!editable}/>}
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_BIRTH}</div>
                  <div className="m-col-co">
                    {(user !== null) && <DatePicker className="m-form-text" id='birth'  defaultValue={birth} placeholder='年/月/日'  format= {cd.DATE_FORMAT}  disabled={!editable}/>}
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_PS_TYPE}</div>
                  <div className="m-col-co">
                    {(user !== null) && 
                      <Select className="m-form-text" defaultValue={`'${pers_type}'`} id='pers_type'  disabled={!editable}>
                        {ptList.map((item,index)=>{
                          return (<Select.Option key={`select_pers_type${index}`} value={`'${item.val}'`}>{item.txt}</Select.Option>)
                        })}
                      </Select> }
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
                    {(user !== null) && <MSelect className="m-form-text" data={cd.workareaList} defaultValue={workareaList} id='workarea'  disabled={!editable}/> }
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_TIME}</div>
                  <div className="m-col-co">
                    {(user !== null) && <MSelect className="m-form-text" data={cd.worktimeList} defaultValue={worktimeList} id='worktime' disabled={!editable}/> }
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_MONEY}</div>
                  <div className="m-col-co">
                    {(user !== null) && <InputNumber placeholder={MSG.MSG_FORM_PD_MONEY} defaultValue={work_money} id='workmoney'   disabled={!editable}/> }
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_TYPE}</div>
                  <div className="m-col-co">
                    {(user !== null) && <MSelect className="m-form-text" data={cd.worktypeList} defaultValue={worktypeList} id='worktype'  disabled={!editable}/> }
                  </div>
                </div>

                <div className="m-row">
                  <div className="m-tl">
                    <span>{MSG.MSG_FORM_EXP}</span>
                  </div>
                </div>
                <Tabs defaultActiveKey="0">
                  {expList.map((item,index)=>{
                    return(
                      <TabPane tab={`案件 ${index+1}`} key={index}>
                        <div className="m-row">
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_NAME}</div>
                          <div className="m-col-co">
                            <Input placeholder={MSG.MSG_FORM_PR_NAME} disabled={!editable} defaultValue={item.proj_name}/>
                          </div>
                        </div>
                        <div className="m-row">
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_PERD}</div>
                          <div className="m-col-co">
                            <RangePicker format={cd.DATE_FORMAT}  className="m-form-text" defaultValue={item.proj_date} disabled={!editable}/>
                          </div>
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_LANG}</div>
                          <div className="m-col-co">
                            <MSelect className="m-form-text" data={cd.worklangList} defaultValue={item.work_lang.split('|')} disabled={!editable}/>
                          </div>
                        </div>
                        <div className="m-row">
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_ROLE}</div>
                          <div className="m-col-co">
                            <MSelect className="m-form-text" data={cd.workroleList} defaultValue={item.work_role.split('|')}  disabled={!editable}/>
                          </div>
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_PROJ}</div>
                          <div className="m-col-co">
                            <MSelect className="m-form-text" data={cd.workprojList} defaultValue={item.work_proj.split('|')}  disabled={!editable}/>
                          </div>
                        </div>
                        <div className="m-row">
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_DETL}</div>
                          <div className="m-col-co">
                            <TextArea rows={4} defaultValue={item.work_detl}  disabled={!editable}/>
                          </div>
                        </div>
                      </TabPane>
                    )
                  })}

                </Tabs>
              </Form>
            </TabPane>
            <TabPane tab={MSG.TAB_HOME_APP_PR} key="2">
              <div className="m-fav">
                <div className="m-row-f m-row-tl">
                  <span>ID</span>
                  <span>プロジェクト名</span>
                  <span>開始日-締め切り</span>
                  <span>勤務地</span>
                  <span>業界</span>
                  <span>気になる</span>
                </div>
              {appList.map((e,index)=>{
                return( 
                  <div className="m-row-f" key={index} >
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
                <div className="m-row-f m-row-tl">
                  <span>ID</span>
                  <span>プロジェクト名</span>
                  <span>開始日-締め切り</span>
                  <span>勤務地</span>
                  <span>業界</span>
                  <span>気になる</span>
                </div>
              {favList.map((e,index)=>{
                return( 
                  <div className="m-row-f" key={index} >
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