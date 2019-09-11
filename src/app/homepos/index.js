import React from 'react'
import { observer, inject } from 'mobx-react'
import getNode from 'util/getNode'
import './index.less'
import { Input, message, Button, Select, Switch, Pagination, Modal, Skeleton } from 'antd'
import MSelect from 'util/MSelect'
import * as DATE from 'util/date'
import * as CT from 'util/convert'
import * as CD from 'constant/data'
import { toJS } from 'mobx'
import ProjDetail from 'app/projdetail'
import ChangeProj from '../changeproj';
import moment from 'moment'

const { TextArea } = Input;

@inject('projectActions', 'projectStore', 'userStore', 'applyActions')
@observer
class Homepos extends React.Component {

  constructor(props) {
    super(props)
    this.action = props.projectActions
    this.state = {
      loading: false,
      curPos: [],
      msg: {}
    }
  }

  componentWillMount() {
    let { project } = this.props
    this.pos(project)
  }

  pos = async (project) => {
    this.setState({ loading: true })
    let r = await this.action.projPos(project)
    if (r && r.code === 200) {
      this.setState({
        curPos: r.data,
        loading: false
      })
    }
  }

  reject = async (id, uid) => {
    let r = await this.props.applyActions.dismissApply({ id: id, status: 3, uid: uid })
    if (r && r.code === 200) {
      Modal.success({
        title: '見送り成功！',
        okText: "確認",
        onOk: () => {
          let { project } = this.props
          this.pos(project)
        }
      })
    }
  }

  showMsg = async (id, e) => {
    let msg = document.querySelector('#msg_w' + id)
    if (msg.classList.contains('fn-show')) {
      msg.classList.remove('fn-show')
    } else {
      msg.classList.add('fn-show')
    }
    let r = await this.props.applyActions.queryMsg({ id: id })
    if (r && r.code === 200) {
      let { msg } = this.state
      msg[id] = r.data
      this.setState({
        msg: msg
      })
    }
  }

  sendMsg = async (id, e) => {
    let msg = document.querySelector('#msg_t' + id).value
    let time = moment(new Date()).format("YYYY/MM/DD hh:mm")
    let r = await this.props.applyActions.sendMsg({ id: id, msg: msg, type: 1, time: time })
    if (r && r.code === 200) {

      Modal.info({
        title: '发送消息成功！',
        onOk: () => {
          let { msg } = this.state
          msg[id] = r.data
          this.setState({
            msg: msg
          })
        }
      })
    }
  }

  render() {
    let { curPos } = this.state
    let { msg } = this.state
    return (
      <div className="g-homepos ">
        <Skeleton  loading={this.state.loading}>
        {curPos.length > 0 &&
          <div className="m-row-f m-row-tl">
            <span>応募者</span>
            <span>ポジション</span>
            <span>ステータス</span>
            <span>進捗</span>
          </div>
        }
        {curPos.map((item, index) => {
          return (
            <div>
              <div className="m-row-f" key={index} >
                <span>{item.name_kj}</span>
                <span>
                  {CT.strToNameList(item.proj_role, CD.workroleList).map((item_role, i) =>
                    <span className="" key={i}>{item_role}</span>)}
                </span>
                <span>
                  {CT.strToName(item.status, CD.APPLY_STATUS)}
                </span>
                <span>
                  <Button type="primary" size="small" onClick={this.showMsg.bind(this, item.aid)}>メッセージ</Button>
                  {item.status === 0 && 
                    <Button type="primary" size="small">成約</Button>
                  }
                  {item.status === 0 && 
                    <Button type="primary" size="small" onClick={this.reject.bind(this, item.aid, item.id)}>見送り</Button>
                  }
                </span>
              </div>

              <div className="m-msg" id={"msg_w" + item.aid}>
                <div className="m-msg-wrap">
                  {
                    msg[item.aid] != null &&
                    msg[item.aid].map((item, index) =>
                    <div className="m-msg-row" key={index}>
                      <span className={(item.msg_type != 0) ? "m-user m-left" : "m-user m-right"} >
                        {(item.msg_type != 0) ? "my" : item.msg_from}
                      </span>
                      <span className={(item.msg_type != 0) ? "m-user m-right fn-hide" : "m-user m-left fn-hide"}>
                        {item.msg_from}
                      </span>
                      <span className="m-time">{item.msg_time}</span>
                      <span className={(item.msg_type != 0) ? "m-cnt m-cnt-left" : "m-cnt m-cnt-right"} >{item.msg_cnt}</span>
                    </div>
                  )}
                </div>
                {item.status === 0 && <div>
                  <TextArea className="m-msg-cnt" rows={3} id={"msg_t" + item.aid} />
                  <Button type="primary" className="m-btn-send" htmlType="button" onClick={this.sendMsg.bind(this, item.aid)}>发送</Button>
                </div>
                }
              </div>

            </div>
          )
        })}
        </Skeleton>
      </div>
    )
  }
}

export default Homepos