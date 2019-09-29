import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Tabs, Form, Button, Skeleton, DatePicker, Select, InputNumber, Modal, message, Pagination } from 'antd';
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
import ProjDetail from 'app/projdetail'
import ChangeProj from 'app/changeproj';
import Homepos from 'app/homepos'

const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;

@Form.create()
@inject('applyActions', 'applyStore', 'userActions', 'userStore', 'projectActions', 'projectStore')
@observer
class Homecomp extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.projectStore
    this.action = props.projectActions
    regex.va_start()
    this.state = {
      editable: false,
      loading: false,
      showDetail: false,
      showChange: false,
      curPage: 1,
      detail: [],
      change: [],
      curProj: {},
      query: {
        key: ''
      },
    }
  }

  componentWillMount() {
    let { query } = this.state
    this.setState({ loading: true });
    query["pid"] = getValue(this.props.userStore.user, 'user.id', '')
    this.setState({
      query: query,
      loading: false
    })
    this.action.projQuery(query)
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

  showDetail = async (item) => {
    this.setState({ loading: true });
    let r = await this.action.projDetail({ id: item.id })
    if (r && r.code === 200) {
      this.setState({
        showDetail: true,
        detail: r.data,
        curProj: item,
        loading: false,
      })
    }
  }

  showPageData = async (index) => {
    this.setState({ loading: true });
    let id = getValue(this.props.userStore.user, 'user.id', '')
    let params = { pid: id }
    let r = await this.action.projQuery(params)
    if (r && r.code === 200) {
      this.setState({
        curPage: index,
        loading: false
      })
    }
  }

  showChange = async (item) => {
    this.setState({ loading: true });
    let r = await this.action.projDetail({ id: item.id })
    if (r && r.code === 200) {
      this.setState({
        showChange: true,
        change: r.data,
        curProj: item,
        loading: false,
      })
    }
  }

  closeDetail = (e) => {
    this.setState({
      showDetail: false,
    })
  }

  closeChange = (e) => {
    this.setState({
      showChange: false,
    })
  }

  query = async () => {
    this.setState({ loading: true });
    let query = this.state.query
    let r = await this.action.projQuery(query)
    if (r && r.code === 200) {
      this.setState({
        loading: false,
      })
    }
  }
  setVal = (id, e) => {
    let { query } = this.state
    query[id] = e.currentTarget.value
    this.setState({
      query: query
    })
  }

  setMVal = (id, val) => {
    let { query } = this.state
    query[id] = val
    this.setState({
      query: query
    })
  }

  doChangeMenu = async (e) => {
    let id = getValue(this.props.userStore.user, 'user.id', '')
    let params = { pid: id }
    if (parseInt(e) === 2) {
      this.setState({ loading: true })
      let r = await this.action.projQuery(params)
      if (r && r.code === 200) {
        this.setState({ loading: false })
      }
    }
  }

  closeProj = async (item) => {
    this.setState({ loading: true });
    let r = await this.action.projStatus({ id: item.id, status: 2 })
    if (r && r.code === 200) {
      Modal.success({
        title: '案件終了！',
        okText: "確認",
        onOk: () => {
          let { query } = this.state
          this.action.projQuery(query)
          this.setState({
            loading: false
          })
        }
      })
    }
  }

  render() {
    const { editable, curPage, showDetail, showChange, detail, change, curProj } = this.state
    const { user } = this.props.userStore
    const name_comp = getValue(user, 'user.name_comp', '')
    const name_dept = getValue(user, 'user.name_dept', '')
    const email = getValue(user, 'user.email', '')
    const phone = getValue(user, 'user.phone', '')
    const name_kj = getValue(user, 'user.name_kj', '')
    const name_kn = getValue(user, 'user.name_kn', '')
    let act = this.props.userActions
    let projList, pageList = []
    let PAGESIZE = 10

    if (!this.store.project && typeof (this.store.project) != "undefined" && this.store.project != 0) {
      projList = []
    } else {
      projList = toJS(getValue(this.store, 'project', '[]'))
      let last = (PAGESIZE * curPage > projList.length) ? projList.length : PAGESIZE * curPage
      for (let i = PAGESIZE * (curPage - 1); i < last; i++) {
        pageList.push(projList[i])
      }
    }
    return (
      <div className='g-homeuser'>
        <Tabs className="m-home-menu" type="card" onChange={this.doChangeMenu}>
          <TabPane tab={MSG.TAB_HOME_USR_IF} key="1" className="m-tab-userinfo">
            <Form className="m-reg-form" onSubmit={this.handleSubmit} >
              <div className="m-row">
                <div className="m-tl">
                  <span>{MSG.MSG_FORM_BASIC}</span>
                  <div className="m-fn">
                    {!editable && <Button htmlType="button"  onClick={this.setEdit}>{MSG.MSG_UPDATE}</Button>}
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

          <TabPane tab={MSG.MSG_FORM_PROJ} key="2" className="m-tab-userinfo" >
            <Skeleton loading={this.state.loading} >
              <div className="m-fav">

                <div className='g-homeproj'>

                  {showDetail && <ProjDetail show={showDetail} project={curProj} detail={detail} close={this.closeDetail} />}
                  {showChange && <ChangeProj show={showChange} project={curProj} change={change} close={this.closeChange} />}

                  <Pagination defaultCurrent={curPage} total={projList.length} onChange={this.showPageData} />
                  {pageList.map((item, index) => {
                    return (
                      <div className="m-proj-item" key={index}>
                        <div className="m-proj-row">
                          <div className="m-proj-id">{(index + 1) + (curPage - 1) * PAGESIZE}.</div>
                          {item.status === 0 &&
                            <div className="m-proj-name">{item.proj_name}</div>
                          }
                          {item.status === 2 &&
                            <div className="m-proj-name">{item.proj_name}(終了)</div>
                          }
                          <div className="m-proj-co m-date">{DATE.convertI2S(item.date_from)} ~ {DATE.convertI2S(item.date_to)}</div>
                          <div className="m-proj-row m-proj-row-f">
                            <Button type="default" htmlType="submit" className="c-grey" onClick={this.showDetail.bind(this, item)}>詳細を見る</Button>
                            {item.status != 2 &&
                              <Button type="default" htmlType="submit" className="c-grey" onClick={this.showChange.bind(this, item)}>案件を変更</Button>
                            }
                            {item.status === 0 &&
                              <Button type="default" htmlType="submit" className="c-grey" onClick={this.closeProj.bind(this, item)}>案件を終了</Button>
                            }
                          </div>
                        </div>
                          <Homepos project={item.id} />
                      </div>
                    )
                  })}
                  <Pagination defaultCurrent={curPage} total={projList.length} onChange={this.showPageData} />
                </div>
              </div>
            </Skeleton>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Homecomp