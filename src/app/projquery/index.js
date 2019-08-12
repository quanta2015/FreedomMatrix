import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input } from 'antd';
import getNode from 'util/getNode'
import './index.less'
import { message,Button,Select,Switch,Pagination,Skeleton } from 'antd'
import MSelect from 'util/MSelect'
import * as DATE from 'util/date'
import * as CT from 'util/convert'
import * as CD from 'constant/data'
import { toJS } from 'mobx'

import ProjDetail from 'app/projdetail'


@inject('projectActions','projectStore', 'userStore')
@observer
class Projquery extends React.Component {

  constructor(props) {
    super(props)
    this.action = props.projectActions
    this.store = props.projectStore

    this.state = {
      loading: false,
      showAdv: false,
      curPage: 1,
      showDetail: false,
      detail: [],
      curProj: {},
      query: {
        key:''
      }
    }

  }

  componentWillMount() {
    this.action.projQuery()
  }

  showAdv = (e)=>{
    this.setState({
      showAdv: e
    })
  }

  showPageData = (index) => {
    this.setState({
      curPage: index
    })
  }

  showDetail = async (item)=>{
    this.setState({ loading: true });
    let r = await this.action.projDetail({id:item.pid})
    if (r && r.code === 200) {
      this.setState({
        showDetail: true,
        detail: r.data,
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

  setVal = (id,e) =>{
    let {query} = this.state
    query[id] = e.currentTarget.value
    this.setState({
      query: query
    })
  }

  setMVal = (id,val) =>{
    let {query} = this.state
    query[id] = val
    this.setState({
      query: query
    })
  }

  render() {

    let { showAdv,curPage,curProj,showDetail,detail } = this.state
    let projList,projdomnList,pageList=[]
    let PAGESIZE = 10

    if (!this.store.project && typeof(this.store.project)!="undefined" && this.store.project!=0) {
      projList = []
    }else{
      projList =  toJS(getValue(this.store, 'project', '[]'))
      let last = (PAGESIZE*curPage>projList.length)?projList.length:PAGESIZE*curPage
      for(let i=PAGESIZE*(curPage-1);i<last;i++) {
        pageList.push(projList[i])
      }
    }

    return (
      <div className='g-projquery'>

        {showDetail && <ProjDetail show={showDetail} project={curProj} detail={detail} close={this.closeDetail}/>}


        <div className="m-query-form">
          <div className="m-row m-row-t">
            <div className="m-tl">項目のキーワードを入力してください</div>
            <div className="m-co">
              <Input placeholder="Basic usage" id="proj_key" onChange={this.setVal.bind(this,'proj_key')}/>
              <div className="m-adv">
                <span className="m-tl" >高级检索 </span>
                <Switch size="small" onChange={this.showAdv}/>
              </div>
              <Button type="primary" className="m-btn-search" onClick={this.query}> 案件を探す</Button>
            </div>
          </div>
          <div className="m-row">
            <div className="m-col">
              <span>勤務希望エリア</span>
              <MSelect className="m-form-text" placeholder="勤務希望エリア" id="proj_area"  data={CD.workareaList} onChange={this.setMVal.bind(this,'proj_area')}/>
            </div>
            <div className="m-col">
              <span>希望稼働時期</span>
              <MSelect className="m-form-text" placeholder="業界" id="proj_domn" data={CD.projdomnList} onChange={this.setMVal.bind(this,'proj_domn')}/>
            </div>
            <div className="m-col">
              <span>希望働き方</span>
              <MSelect className="m-form-text" placeholder="こだわり" id="proj_pref" data={CD.projprefList} onChange={this.setMVal.bind(this,'proj_pref')}/>
            </div>
            <div className="m-col">
              <span>応募対象</span>
              <Select className="m-form-text m-form-select" id="proj_targ"  onChange={this.setMVal.bind(this,'proj_targ')}>
                {CD.projTarget.map((item,index)=> <Select.Option value={item.val} key={index}>{item.txt}</Select.Option> )}
              </Select>
            </div>
          </div>
 
          {showAdv && 
            <div className="m-row m-row-adv">
              <div className="m-col">
                <span>職種</span>
                <MSelect className="m-form-text" placeholder="職種" id="proj_role" data={CD.workroleList} onChange={this.setMVal.bind(this,'proj_role')}/>
              </div>
              <div className="m-col">
                <span>担当工程</span>
                <MSelect className="m-form-text" placeholder="担当工程" id="proj_resp" data={CD.workprojList} onChange={this.setMVal.bind(this,'proj_resp')}/>
              </div>
              <div className="m-col">
                <span>言語スキル</span>
                <MSelect className="m-form-text" placeholder="言語スキル" id="proj_lang" data={CD.worklangList} onChange={this.setMVal.bind(this,'proj_lang')}/>
              </div>
              <div className="m-col">
                <span>作業内容</span>
                <Input placeholder="Basic usage" id="proj_cont" onChange={this.setVal.bind(this,'proj_cont')}/>
              </div>
            </div>
          }

          <div className="m-row m-row-mobile"> 
              <Button type="primary" className="m-btn-search-m" onClick={this.query}> 案件を探す</Button>
          </div>

        </div>

        <Skeleton  loading={this.state.loading}>

          <Pagination defaultCurrent={1} total={projList.length} onChange={this.showPageData} />

          {pageList.map((item,index)=>{
            return (
                <div className="m-proj-item" key={index}>
                  <div className="m-proj-row">
                    <div className="m-proj-id">{(index+1) + (curPage-1)*PAGESIZE}.</div>
                    <div className="m-proj-name">{item.proj_name}</div>
                  </div>
                  <div className="m-proj-row">
                    <div className="m-proj-tl">项目时间</div>
                    <div className="m-proj-co m-date">{DATE.convertI2S(item.date_from)} ~ {DATE.convertI2S(item.date_from)}</div>
                    <div className="m-proj-tl">業界</div>
                    <div className="m-proj-co">
                    { (projList.length !== 0) &&
                      CT.strToNameList(item.proj_domn, CD.projdomnList).map((item_domn,j)=>
                        <span className="m-proj-item-d" key={j}>{item_domn}</span>
                     ) }
                    </div>
                  </div>
                  <div className="m-proj-row">
                    <div className="m-proj-tl">勤務エリア</div>
                    <div className="m-proj-co">
                    { (projList.length !== 0) &&
                      CT.strToNameList(item.proj_area, CD.workareaList).map((item_area,j)=>
                        <span className="m-proj-item-d" key={j}>{item_area}</span>
                     ) }
                    </div>
                    <div className="m-proj-tl">こだわり</div>
                    <div className="m-proj-co">
                    { (projList.length !== 0) &&
                      CT.strToNameList(item.proj_pref, CD.projprefList).map((item_pref,j)=>
                        <span className="m-proj-item-d" key={j}>{item_pref}</span>
                     ) }
                    </div>
                  </div>
                  <div className="m-proj-row">
                    <div className="m-proj-tl">応募対象</div>
                    <div className="m-proj-co">
                      { (projList.length !== 0) &&
                      CT.strToNameList(item.proj_targ, CD.projTarget).map((item_targ,j)=>
                        <span className="m-proj-item-d" key={j}>{item_targ}</span>
                      )}
                    </div>
                    <div className="m-proj-tl">働き方</div>
                    <div className="m-proj-co">
                      { (projList.length !== 0) &&
                        CT.strToNameList(item.proj_styl, CD.worktypeList).map((item_styl,j)=>
                          <span className="m-proj-item-d" key={j}>{item_styl}</span>
                        )}
                    </div>
                  </div>
                  <div className="m-proj-row m-proj-row-f">
                    <Button type="default" htmlType="submit" className="c-green" onClick={this.showDetail.bind(this,item)}>詳細を見る</Button> 
                  </div>
                </div>
              )
          })}

          <Pagination defaultCurrent={1} total={projList.length} onChange={this.showPageData} />

        </Skeleton>

      </div>
    )
  }
}




export default Projquery