import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input,Tabs,Form,Button,DatePicker,Select,InputNumber,Modal, message, Skeleton } from 'antd';
import './index.less'
import * as urls from 'constant/urls'
import * as CD   from 'constant/data'
import * as MSG  from 'constant/msg'
import * as CT from 'util/convert'
import clone   from 'util/clone'
import MSelect from 'util/MSelect'
import getNode from 'util/getNode'
import * as date  from 'util/date'
import * as regex from 'util/regex'
import moment  from 'moment'
import { toJS } from 'mobx'

const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;



@Form.create()
@inject('favActions', 'favStore', 'applyActions', 'applyStore', 'userActions', 'userStore')
@observer
class Homeuser extends React.Component {
  constructor(props) {
    super(props)

    regex.va_start()
    this.state = {
      loading: false,
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


  handleSubmit = async (e) =>{
    e.preventDefault();
    if (regex.va_check()) {
      let params = toJS(this.props.userStore.user)
      let r = await this.props.userActions.saveUser(params)
      if (r && r.code === 200) {
        Modal.success({
          title: '保存成功！',
          okText:"確認",
          onOk:()=> {
            this.setState({ editable: false })
          }
        })
      }
    }else{
      message.success('表单数据错误！')
    }
  }

  dismiss = async (id, uid) => {
    let r = await this.props.applyActions.dismissApply({id:id, status: 1, uid: uid})
    if (r && r.code === 200) {
      Modal.success({
        title: '辞退成功！',
        okText:"確認",
        onOk:()=> { }
      })
    }
  }

  cancel = async (id, uid) => {
    let r = await this.props.favActions.cancelFav({id:id, uid: uid})
    if (r && r.code === 200) {
      Modal.success({
        title: '取消关注成功！',
        okText:"確認",
        onOk:()=> { }
      })
    }
  }


  doChangeMenu = async(e)=>{
    let id = getValue(this.props.userStore.user, 'user.id', '')
    let params = { id: id }
    if (parseInt(e) === 2) {
      this.setState({ loading: true });
      let r = await this.props.applyActions.queryApply(params) 
      if (r && r.code === 200) {
        this.setState({ loading: false })
      }
    }else if (parseInt(e)===3) {
      this.setState({ loading: true });
      let r = await this.props.favActions.queryFav(params) 
      if (r && r.code === 200) {
        this.setState({ loading: false })
      }
    }
  }


  render() {
    const { editable } = this.state
    const { user } = this.props.userStore
    const ptList = CD.personType
    const workareaList = getValue(user, 'user.work_area', '').split("|")
    const worktimeList = getValue(user, 'user.work_time', '') .split("|")
    const worktypeList = getValue(user, 'user.work_type', '') .split("|")
    const _birth       = getValue(user, 'user.birth', '')
    const birth        = date.convertI2D(_birth)
    const email        = getValue(user, 'user.email', '')
    const phone        = getValue(user, 'user.phone', '')
    const name_kj      = getValue(user, 'user.name_kj', '')
    const name_kn      = getValue(user, 'user.name_kn', '')
    const pers_type    = getValue(user, 'user.pers_type', '') 
    const work_mony   = getValue(user, 'user.work_mony', '') 
    const expList      = clone(getValue(user, 'exp', []))

    let favList = getValue(this.props.favStore.fav, 'data', [])
    let appList = getValue(this.props.applyStore.apply, 'data', [])

    appList = (typeof(appList)==='undefined')?[]:appList
    favList = (typeof(favList)==='undefined')?[]:favList


    expList.map((item,index)=>{
      let from = date.convertI2D(item.date_from+'')
      let to = date.convertI2D(item.date_to+'')
      let proj_date = [moment(from, "YYYY/MM/DD"), moment(to, "YYYY/MM/DD")]
      item.proj_date = proj_date
    })

    this.props.userStore.tabs = expList.length
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
                      { !editable && <Button htmlType="button" onClick={this.setEdit}>{MSG.MSG_UPDATE}</Button>}
                      { editable && <Button  htmlType="submit" type="danger" >{MSG.MSG_SAVE}</Button>}
                    </div>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_EMAIL}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_EMAIL} 
                                                id='email' 
                                                defaultValue={email} 
                                                disabled={!editable}
                                                onChange={ regex.va_field.bind(this,MSG.TYPE_EMAIL,act, 0, null) }/>}
                    <div className="ant-form-explain">请输入正确的email</div>
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_PHONE}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_PHONE} 
                                                id='phone'  
                                                defaultValue={phone} 
                                                disabled={!editable}
                                                onChange={ regex.va_field.bind(this,MSG.TYPE_PHONE,act, 0, null) } /> }
                    <div className="ant-form-explain">请输入正确的电话号码</div>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_NAME_KJ}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_NAKJ} 
                                                id='name_kj' 
                                                defaultValue={name_kj} 
                                                disabled={!editable}
                                                onChange={ regex.va_field.bind(this,MSG.TYPE_NULL,act, 0, null) } />}
                    <div className="ant-form-explain">请输入名字</div>
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_NAME_KN}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_NAKN} 
                                                id='name_kn' 
                                                defaultValue={name_kn}  
                                                disabled={!editable}
                                                onChange={ regex.va_field.bind(this,MSG.TYPE_NULL,act, 0, null) } />}
                    <div className="ant-form-explain">请输入名字</div>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_BIRTH}</div>
                  <div className="m-col-co">
                    {(user !== null) && <DatePicker className="m-form-text" 
                                                    id='birth'  
                                                    defaultValue={birth} 
                                                    placeholder='年/月/日'  
                                                    format= {CD.DATE_FORMAT}  
                                                    disabled={!editable} 
                                                    onChange={ regex.va_field_dsel.bind(this,'birth',act, 0, null) } />}
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_PS_TYPE}</div>
                  <div className="m-col-co">
                    {(user !== null) && 
                      <Select className="m-form-text" defaultValue={`'${pers_type}'`} 
                                                      id='pers_type'  
                                                      disabled={!editable} 
                                                      onChange={ regex.va_field_ssel.bind(this,'pers_type',act, 0, null) }>
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
                    {(user !== null) && <MSelect className="m-form-text" 
                                                  data={CD.workareaList} 
                                                  defaultValue={workareaList} 
                                                  id='work_area'  
                                                  disabled={!editable}
                                                  onChange={ regex.va_field_msel.bind(this,'work_area',act, 0, null) } /> }
                    <div className="ant-form-explain">请选择工作地区</div>
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_TIME}</div>
                  <div className="m-col-co">
                    {(user !== null) && <MSelect className="m-form-text" 
                                                  data={CD.worktimeList} 
                                                  defaultValue={worktimeList} 
                                                  id='work_time' 
                                                  disabled={!editable}
                                                  onChange={ regex.va_field_msel.bind(this,'work_time',act, 0, null) } /> }
                    <div className="ant-form-explain">请选择工作时间</div>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_MONEY}</div>
                  <div className="m-col-co">
                    {(user !== null) && <Input placeholder={MSG.MSG_FORM_PD_MONEY} 
                                                      defaultValue={work_mony} 
                                                      id='work_mony'   
                                                      disabled={!editable}
                                                      onChange={ regex.va_field.bind(this,MSG.TYPE_NULL,act, 0, null) } /> }
                  </div>
                  <div className="m-col-tl">{MSG.MSG_FORM_HP_TYPE}</div>
                  <div className="m-col-co">
                    {(user !== null) && <MSelect className="m-form-text" 
                                                  data={CD.worktypeList} 
                                                  defaultValue={worktypeList} 
                                                  id='work_type'  
                                                  disabled={!editable}
                                                  onChange={ regex.va_field_msel.bind(this,'work_type',act, 0, null) } /> }
                    <div className="ant-form-explain">请选择工作方式</div>
                  </div>
                </div>

                <div className="m-row">
                  <div className="m-tl">
                    <span>{MSG.MSG_FORM_EXP}</span>
                  </div>
                </div>
                <Tabs defaultActiveKey="0" id="tabExp">
                  {expList.map((item,index)=>{
                    return(
                      <TabPane tab={`案件 ${index+1}`} key={index}>
                        <div className="m-row">
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_NAME}</div>
                          <div className="m-col-co">
                            <Input placeholder={MSG.MSG_FORM_PR_NAME} 
                                    disabled={!editable} 
                                    id = {`proj_name_${index+1}`}
                                    defaultValue={item.proj_name}
                                    onChange={ regex.va_field.bind(this,MSG.TYPE_NULL,act,1,index) } />
                            <div className="ant-form-explain">请输入项目名字</div>
                          </div>
                        </div>
                        <div className="m-row">
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_PERD}</div>
                          <div className="m-col-co">
                            <RangePicker format={CD.DATE_FORMAT}  
                                          className="m-form-text" 
                                          id = {`proj_perd_${index+1}`}
                                          defaultValue={item.proj_date} 
                                          disabled={!editable} 
                                          onChange={ regex.va_field_rsel.bind(this,`proj_perd_${index+1}`,act,1,index) } />
                          </div>
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_LANG}</div>
                          <div className="m-col-co">
                            <MSelect className="m-form-text" 
                                      data={CD.worklangList} 
                                      defaultValue={item.work_lang.split('|')} 
                                      id = {`work_lang_${index+1}`}
                                      disabled={!editable}
                                      onChange={ regex.va_field_msel.bind(this,`work_lang_${index+1}`,act,1,index) }  />
                          </div>
                        </div>
                        <div className="m-row">
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_ROLE}</div>
                          <div className="m-col-co">
                            <MSelect className="m-form-text" 
                                      data={CD.workroleList} 
                                      defaultValue={item.work_role.split('|')}  
                                      id = {`work_role_${index+1}`}
                                      disabled={!editable}
                                      onChange={ regex.va_field_msel.bind(this,`work_role_${index+1}`,act,1,index) } />
                            <div className="ant-form-explain">请选择项目角色</div>
                          </div>
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_PROJ}</div>
                          <div className="m-col-co">
                            <MSelect className="m-form-text" 
                                      data={CD.workprojList} 
                                      defaultValue={item.work_proj.split('|')}  
                                      id = {`work_proj_${index+1}`}
                                      disabled={!editable}
                                      onChange={ regex.va_field_msel.bind(this,`work_proj_${index+1}`,act,1,index) } />
                          </div>
                        </div>
                        <div className="m-row">
                          <div className="m-col-tl">{MSG.MSG_FORM_PR_DETL}</div>
                          <div className="m-col-co">
                            <TextArea rows={4} defaultValue={item.work_detl} 
                                               id = {`work_detl_${index+1}`} 
                                               disabled={!editable}
                                               onChange={ regex.va_field.bind(this,MSG.TYPE_NULL,act,1,index) } />
                          </div>
                        </div>
                      </TabPane>
                    )
                  })}

                </Tabs>
              </Form>
            </TabPane>
            <TabPane tab={MSG.TAB_HOME_APP_PR} key="2">
              <Skeleton  loading={this.state.loading}>
                <div className="m-fav">
                  <div className="m-row-f m-row-tl">
                    <span>ID</span>
                    <span>プロジェクト名</span>
                    <span>開始日-締め切り</span>
                    <span>勤務地</span>
                    <span>状態</span>
                    <span>気になる</span>
                  </div>
                {appList.map((e,index)=>{
                  return( 
                    <div className="m-row-f" key={index} >
                      <span>{e.sid}</span>
                      <span>{e.proj_name}</span>
                      <span>{date.convertI2S(e.date_from)} ~ {date.convertI2S(e.date_to)}</span>
                      <span>
                        { CT.strToNameList(e.proj_area, CD.workareaList).map((item_area,j)=>
                          <span className="m-proj-item-d" key={j}>{item_area}</span> ) }
                      </span>
                      <span>
                        <span>{CT.strToName(e.status, CD.APPLY_STATUS)}</span>
                       
                      </span>
                      <span>
                        <Button type="primary" size="small">详情</Button>
                        {e.status===0 &&
                          <Button type="primary" size="small">進捗</Button>}
                        {e.status===0 &&
                          <Button type="primary" size="small">メッセージ</Button>}
                        {e.status===0 &&
                          <Button type="primary" size="small" onClick={this.dismiss.bind(this,e.id, this.props.userStore.user.user.id)}>辞退</Button>}
                      </span>
                    </div>
                  )
                })}
                </div>
              </Skeleton>
            </TabPane>
            <TabPane tab={MSG.TAB_HOME_FAV_PR} key="3">
              <Skeleton  loading={this.state.loading}>
                <div className="m-fav">
                  <div className="m-row-f m-row-tl">
                    <span>ID</span>
                    <span>プロジェクト名</span>
                    <span>開始日-締め切り</span>
                    <span>勤務地</span>
                    <span>状態</span>
                    <span>気になる</span>
                  </div>
                {favList.map((e,index)=>{
                  return( 
                    <div className="m-row-f" key={index} >
                      <span>{e.sid}</span>
                      <span>{e.proj_name}</span>
                      <span>{date.convertI2S(e.date_from)} ~ {date.convertI2S(e.date_to)}</span>
                      <span>
                        { CT.strToNameList(e.proj_area, CD.workareaList).map((item_area,j)=>
                          <span className="m-proj-item-d" key={j}>{item_area}</span> ) }
                      </span>
                      <span></span>
                      <span>
                        <Button type="primary" size="small">详情</Button>
                        <Button type="primary" size="small">应募</Button>
                        <Button type="primary" size="small" onClick={this.cancel.bind(this, e.id, this.props.userStore.user.user.id)}>キャンセル</Button>
                      </span>
                    </div>
                  )
                })}
                </div>
              </Skeleton>
            </TabPane>
          </Tabs>
      </div>
    )
  }
}


export default Homeuser