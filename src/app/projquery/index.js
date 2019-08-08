import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input } from 'antd';
import getNode from 'util/getNode'
import './index.less'
import { message,Button,Select,Switch } from 'antd'
import MSelect from 'util/MSelect'
import * as CD from 'constant/data'
import { toJS } from 'mobx'


@inject('projectActions', 'projectStore', 'userStore')
@observer
class Projquery extends React.Component {

  constructor(props) {
    super(props)

    this.action = props.projectActions
    this.store = props.projectStore

    

    this.state = {
      showAdv: false
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

  render() {

    let { showAdv } = this.state
    let projList
    // let projList =  toJS(this.store.projectStore.project)

    if (!this.store.project && typeof(this.store.project)!="undefined" && this.store.project!=0) {
      projList = []
    }else{
      projList =  toJS(getValue(this.store, 'project', '[]'))
    }

    return (
      <div className='g-projquery'>
        <div className="m-query-form">
          <div className="m-row m-row-t">
            <div className="m-tl">項目のキーワードを入力してください</div>
            <div className="m-co">
              <Input placeholder="Basic usage" />
              <div className="m-adv">
              <span className="m-tl" >高级检索 </span>
            <Switch size="small" onChange={this.showAdv}/>
              </div>
              <Button type="primary" className="m-btn-search"> 案件を探す</Button>
            </div>
          </div>
          <div className="m-row">
            <div className="m-col">
              <span>勤務希望エリア</span>
              <MSelect className="m-form-text" placeholder="勤務希望エリア" data={CD.workareaList}/>
            </div>
            <div className="m-col">
              <span>希望稼働時期</span>
              <MSelect className="m-form-text" placeholder="業界" data={CD.projdomnList}/>
            </div>
            <div className="m-col">
              <span>希望働き方</span>
              <MSelect className="m-form-text" placeholder="こだわり" data={CD.projprefList}/>
            </div>
            <div className="m-col">
              <span>応募対象</span>
              <Select className="m-form-text m-form-select">
                <Select.Option value="0">フリーランス</Select.Option>
                <Select.Option value="1">副業</Select.Option>
                <Select.Option value="2">協力パートナー</Select.Option>
              </Select>
            </div>
          </div>
 

          {showAdv && 

          <div className="m-row m-row-adv">
            <div className="m-col">
              <span>職種</span>
              <MSelect className="m-form-text" placeholder="職種" data={CD.workroleList}/>
            </div>
            <div className="m-col">
              <span>担当工程</span>
              <MSelect className="m-form-text" placeholder="担当工程" data={CD.workprojList}/>
            </div>
            <div className="m-col">
              <span>言語スキル</span>
              <MSelect className="m-form-text" placeholder="言語スキル" data={CD.worklangList}/>
            </div>
            <div className="m-col">
              <span>作業内容</span>
              <MSelect className="m-form-text" placeholder="作業内容" data={CD.projrespList}/>
            </div>
          </div>
          }

        </div>

          {projList.map((item,index)=>{
            return (
                <div className="m-proj-item">
                  <div className="m-proj-row">
                    <span className="m-proj-id">{item.pid}</span>
                    <span className="m-proj-name">{item.proj_name}</span>
                  </div>
                  <div className="m-proj-row">
                    <span className="m-proj-tl">项目时间</span>
                    <span className="m-proj-co m-date">{item.date_from}-{item.date_from}</span>
                    <span className="m-proj-tl">项目技术</span>
                    <span className="m-proj-co">{item.proj_domn}</span>
                  </div>
                </div>
              )
          })}


        
      </div>
    )
  }
}




export default Projquery