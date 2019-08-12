import React from 'react'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Input,message,Button,Select,Switch,Pagination } from 'antd'
import getNode   from 'util/getNode'
import MSelect   from 'util/MSelect'
import * as DATE from 'util/date'
import * as CT   from 'util/convert'
import * as CD   from 'constant/data'
import './index.less'


class Projdetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: props.show
    }


  }


  close =()=>{
    this.props.close()
  }

  render() {
    let { show } = this.state
    let { detail, project } = this.props

    return (
      <div className='g-projdetail'> 
       
        { show &&
          <div className="m-proj-detail">
            <div className="m-proj-detail-wrap">
              <div className="m-close" onClick={this.close}></div> 

              <div className="m-detail-wrap">


                <div className="m-detail">
                  <div className="md-row md-row-tl">
                    <span className="m-proj-title c-blue">
                      {project.proj_name}
                    </span>
                    <span className="m-proj-pd m-date">
                      {DATE.convertI2S(project.date_from)} ~ {DATE.convertI2S(project.date_from)}
                    </span>
                  </div>

                  <div className="md-row">
                    <span className="md-proj-tl">
                      勤務エリア
                    </span>
                    <span className="md-proj-co">
                      {CT.strToNameList(project.proj_area, CD.workareaList).map((item_area,i)=> 
                        <span className="" key={`area-${i}`}>{item_area}</span>)}
                    </span>
                    <span className="md-proj-tl">
                      業界
                    </span>
                    <span className="md-proj-co">
                      {CT.strToNameList(project.proj_domn, CD.projdomnList).map((item_domn,i)=> 
                        <span className="" key={`domn-${i}`}>{item_domn} </span> )}
                    </span>
                  </div>

                  <div className="md-row">
                    <span className="md-proj-tl">
                      応募対象
                    </span>
                    <span className="md-proj-co">
                      {CT.strToNameList(project.proj_targ, CD.projTarget).map((item_targ,i)=> 
                        <span className="" key={`targ-${i}`}>{item_targ}</span>)}
                    </span>
                    <span className="md-proj-tl">
                      働き方
                    </span>
                    <span className="md-proj-co">
                      {CT.strToNameList(project.proj_styl, CD.worktypeList).map((item_styl,i)=> 
                        <span className="" key={`styl-${i}`}>{item_styl}</span>)}
                    </span>
                  </div>

                  <div className="md-row">
                    <span className="md-proj-tl">
                      こだわり
                    </span>
                    <span className="md-proj-co">
                      {CT.strToNameList(project.proj_pref, CD.projprefList).map((item_pref,i)=> 
                        <span className="m-proj-item-d" key={`pref-${i}`}>{item_pref}</span>)}
                    </span>
                  </div>
                </div>

                <div className="m-pos">
                  {detail.map((item,index)=>
                    <div className="m-pos-item"  key ={index}>
                      <div className="m-row">
                        <span className="m-tl">職種</span>
                        <span className="m-co">
                          {CT.strToNameList(item.proj_role, CD.workroleList).map((item_role,i)=> 
                            <span className="" key={i}>{item_role}</span>)}
                        </span>
                        <span className="m-money">{item.proj_mony}万円</span>
                      </div>
                      <div className="m-row">
                        <span className="m-tl">担当工程</span>
                        <span className="m-co">
                          {CT.strToNameList(item.proj_resp, CD.projprefList).map((item_resp,i)=> 
                            <span className="" key={i}>{item_resp}</span>)}
                        </span>
                      </div>

                      <div className="m-row">
                        <span className="m-tl">言語スキル</span>
                        <span className="m-co">
                          {CT.strToNameList(item.proj_lang, CD.worklangList).map((item_lang,i)=> 
                            <span className="m-proj-item-d" key={i}>{item_lang}</span>)}
                        </span>
                      </div>

                      <div className="m-row">
                        <span className="m-tl">作業内容</span>
                        <span className="m-co">{item.proj_cont}</span>
                      </div>

                      <div className="m-row">
                        <span className="m-tl">経験必須</span>
                        <span className="m-co">{item.reqr_exp}</span>
                      </div>

                      <div className="m-row">
                        <span className="m-tl">経験歓迎</span>
                        <span className="m-co">{item.pref_exp}</span>
                      </div>

                      <div className="m-row m-fun">
                        <Button type="default" htmlType="submit" onClick={this.close}>返回</Button>
                        <Button type="default" htmlType="submit" onClick={this.doReg}>気になる</Button>
                        <Button type="danger" htmlType="submit" onClick={this.doApply}>応募する</Button>
                      </div>

                    </div>
                  )}
                </div>

              </div>



            </div>
          </div>
        }

      </div>
    )
  }
}


export default Projdetail