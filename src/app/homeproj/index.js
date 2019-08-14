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
class Homeproj extends React.Component {

  constructor(props) {
    super(props)
    this.action = props.projectActions
    this.store = props.projectStore

    this.state = {
      showAdv: false,
      curPage: 1,
      showDetail: false,
      showChange: false,
      detail: [],
      curProj: {},
      query: {
        key: ''
      }
    }

  }

  componentWillMount() {
    let { query } = this.state
    query["pid"] = getValue(this.props.userStore.user, 'user.id', '')
    this.setState({
      query: query
    })

    this.action.projQuery(query)
  }

  showPageData = (index) => {
    this.setState({
      curPage: index
    })
  }

  showDetail = async (item) => {
    let r = await this.action.projDetail({ id: item.pid })
    if (r && r.code === 200) {
      this.setState({
        showDetail: true,
        detail: r.data,
        curProj: item,
      })

    }
  }

  showChange = async (item) => {
    let r = await this.action.projDetail({ id: item.pid })
    if (r && r.code === 200) {
      this.setState({
        showChange: true,
        detail: r.data,
        curProj: item,
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

  query = () => {
    let query = this.state.query
    this.action.projQuery(query)
  }

  render() {

    let { showAdv, curPage, curProj, showDetail, showChange, detail } = this.state
    let projList, projdomnList, pageList = []
    let PAGESIZE = 10
    let posList = [1, 2, 3];

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
      <div className='g-homeproj'>

        {showDetail && <ProjDetail show={showDetail} project={curProj} detail={detail} close={this.closeDetail} />}
        {showChange && <ChangeProj show={showChange} project={curProj} detail={detail} close={this.closeChange} />}

        <Pagination defaultCurrent={1} total={projList.length} onChange={this.showPageData} />
        {pageList.map((item, index) => {

          return (
            <div>
              <div className="m-proj-item" key={index}>
                <div className="m-proj-row">
                  <div className="m-proj-id">{(index + 1) + (curPage - 1) * PAGESIZE}.</div>
                  <div className="m-proj-name">{item.proj_name}</div>
                  <div className="m-proj-tl">项目时间</div>
                  <div className="m-proj-co m-date">{DATE.convertI2S(item.date_from)} ~ {DATE.convertI2S(item.date_from)}</div>
                  <div className="m-proj-row m-proj-row-f">
                    <Button type="default" htmlType="submit" className="c-green" onClick={this.showDetail.bind(this, item)}>詳細を見る</Button>
                    <Button type="default" htmlType="submit" className="c-green" onClick={this.showChange.bind(this, item)}>案件を変更</Button>
                    <Button type="default" htmlType="submit" className="c-green" onClick={this.showDetail.bind(this, item)}>案件を終了</Button>
                  </div>
                </div>
                <div className="m-fav">
                  <div className="m-row-f m-row-tl">
                    <span>応募者</span>
                    <span>ポジション</span>
                    <span>ステータス</span>
                    <span>進捗</span>
                  </div>
                  {posList.map((e) => {
                    return (
                      <div className="m-row-f" key={index} >
                        <span>オウコウ</span>
                        <span>ウェブ開発エンジニア</span>
                        <span>実行中</span>
                        <span>
                          <Button type="primary" size="small" >連絡</Button>
                          <Button type="primary" size="small">成約</Button>
                          <Button type="primary" size="small">見送り</Button>
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
        <Pagination defaultCurrent={1} total={projList.length} onChange={this.showPageData} />
      </div>
    )
  }
}

export default Homeproj