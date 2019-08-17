import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input } from 'antd';
import getNode from 'util/getNode'
import './index.less'
import { message, Button, Select, Switch, Pagination } from 'antd'
import MSelect from 'util/MSelect'
import * as DATE from 'util/date'
import * as CT from 'util/convert'
import * as CD from 'constant/data'
import { toJS } from 'mobx'

import ProjDetail from 'app/projdetail'
import ChangeProj from '../changeproj';

@inject('projectActions', 'projectStore', 'userStore')
@observer
class Homepos extends React.Component {

  constructor(props) {
    super(props)
    this.action = props.projectActions
    this.state = {
      curPos: [],
    }

  }

  componentWillMount() {
    let { project } = this.props
    this.pos(project)
  }

  pos = async (project) => {
    let r = await this.action.projPos(project)
    if (r && r.code === 200) {
      this.setState({
        curPos: r.data,
      })
    }
  }

  doMsg = (id) => {

  }

  render() {
    let { curPos } = this.state

    return (
      <div className="m-fav">
        <div className="m-row-f m-row-tl">
          <span>応募者</span>
          <span>ポジション</span>
          <span>ステータス</span>
          <span>進捗</span>
        </div>
        {curPos.map((item, index) => {
          return (
            <div className="m-row-f" key={index} >
              <span>{item.name_kj}</span>
              <span>
                {CT.strToNameList(item.proj_role, CD.workroleList).map((item_role, i) =>
                  <span className="" key={i}>{item_role}</span>) }
              </span>
              <span>
              {CT.strToName(item.status, CD.APPLY_STATUS)}
              </span>
              <span>
                <Button type="primary" size="small">連絡</Button>
                <Button type="primary" size="small">成約</Button>
                <Button type="primary" size="small">見送り</Button>
              </span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Homepos