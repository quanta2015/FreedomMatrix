import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input } from 'antd';
import getNode from 'util/getNode'
import './index.less'
import { message, Button, Select, Switch, Pagination, Skeleton, Modal} from 'antd'
import MSelect from 'util/MSelect'
import * as DATE from 'util/date'
import * as CT from 'util/convert'
import * as CD from 'constant/data'
import { toJS } from 'mobx'

import ProjDetail from 'app/projdetail'
import ChangeProj from '../changeproj';
import Homepos from 'app/homepos'
@inject('projectActions', 'projectStore', 'userStore')
@observer
class Homeproj extends React.Component {

  constructor(props) {
    super(props)
    this.action = props.projectActions
    this.store = props.projectStore

    this.state = {
      loading: false,
      curPage: 1,
      showDetail: false,
      showChange: false,
      detail: [],
      change: [],
      curProj: {},
      query: {
        key: ''
      }
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

  showPageData = (index) => {
    this.setState({
      curPage: index
    })
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

  showChange = async (item) => {
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

    let { showAdv, curPage, curProj, showDetail, showChange, detail, change } = this.state
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
        <Skeleton loading={this.state.loading}>
          {showDetail && <ProjDetail show={showDetail} project={curProj} detail={detail} close={this.closeDetail} />}
          {showChange && <ChangeProj show={showChange} project={curProj} change={change} close={this.closeChange} />}

          <Pagination defaultCurrent={1} total={projList.length} onChange={this.showPageData} />
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
          <Pagination defaultCurrent={1} total={projList.length} onChange={this.showPageData} />
        </Skeleton>
      </div>
    )
  }
}

export default Homeproj