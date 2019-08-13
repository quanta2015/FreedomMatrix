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

  closeDetail = (e) => {
    this.setState({
      showDetail: false,
    })
  }


  query = () => {
    let query = this.state.query
    this.action.projQuery(query)
  }



  render() {

    let { showAdv, curPage, curProj, showDetail, detail } = this.state
    let projList, projdomnList, pageList = []
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
      <div className='g-projquery'>

        {showDetail && <ProjDetail show={showDetail} project={curProj} detail={detail} close={this.closeDetail} />}


      
        <Pagination defaultCurrent={1} total={projList.length} onChange={this.showPageData} />

        {pageList.map((item, index) => {
          return (
            <div className="m-proj-item" key={index}>
              <div className="m-proj-row">
                <div className="m-proj-id">{(index + 1) + (curPage - 1) * PAGESIZE}.</div>
                <div className="m-proj-name">{item.proj_name}</div>
              </div>
              <div className="m-proj-row">
                <div className="m-proj-tl">项目时间</div>
                <div className="m-proj-co m-date">{DATE.convertI2S(item.date_from)} ~ {DATE.convertI2S(item.date_from)}</div>
                <div className="m-proj-tl">業界</div>
                <div className="m-proj-co">
                  {(projList.length !== 0) &&
                    CT.strToNameList(item.proj_domn, CD.projdomnList).map((item_domn, j) =>
                      <span className="m-proj-item-d" key={j}>{item_domn}</span>
                    )}
                </div>
              </div>
              <div className="m-proj-row">
                <div className="m-proj-tl">勤務エリア</div>
                <div className="m-proj-co">
                  {(projList.length !== 0) &&
                    CT.strToNameList(item.proj_area, CD.workareaList).map((item_area, j) =>
                      <span className="m-proj-item-d" key={j}>{item_area}</span>
                    )}
                </div>
                <div className="m-proj-tl">こだわり</div>
                <div className="m-proj-co">
                  {(projList.length !== 0) &&
                    CT.strToNameList(item.proj_pref, CD.projprefList).map((item_pref, j) =>
                      <span className="m-proj-item-d" key={j}>{item_pref}</span>
                    )}
                </div>
              </div>
              <div className="m-proj-row">
                <div className="m-proj-tl">応募対象</div>
                <div className="m-proj-co">
                  {(projList.length !== 0) &&
                    CT.strToNameList(item.proj_targ, CD.projTarget).map((item_targ, j) =>
                      <span className="m-proj-item-d" key={j}>{item_targ}</span>
                    )}
                </div>
                <div className="m-proj-tl">働き方</div>
                <div className="m-proj-co">
                  {(projList.length !== 0) &&
                    CT.strToNameList(item.proj_styl, CD.worktypeList).map((item_styl, j) =>
                      <span className="m-proj-item-d" key={j}>{item_styl}</span>
                    )}
                </div>
              </div>
              <div className="m-proj-row m-proj-row-f">
                <Button type="default" htmlType="submit" className="c-green" onClick={this.showDetail.bind(this, item)}>詳細を見る</Button>
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