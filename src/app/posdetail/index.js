import React from 'react'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Input,message,Button,Select,Switch,Pagination,Icon,Modal } from 'antd'
import getNode   from 'util/getNode'
import MSelect   from 'util/MSelect'
import * as DATE from 'util/date'
import * as CT   from 'util/convert'
import * as CD   from 'constant/data'
import './index.less'


class Posdetail extends React.Component {

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
    let { pos } = this.props

    return (
      <div className='g-pd'> 
       
        { show &&
          <div className="m-pd">
            <div className="m-pd-wrap">
              <div className="m-close" onClick={this.close}></div> 
              <div className="m-main">
                <div className="md-row md-row-tl">
                  <span className="m-return" onClick={this.close}>
                    <Icon type="left" />
                  </span>
                  <span className="m-proj-title">
                    {pos.proj_name}
                  </span>
                </div>
                <div className="md-row">
                  <span className="m-tl">日期</span>
                  <span className="m-co">
                    {DATE.convertI2S(pos.date_from)} ~ {DATE.convertI2S(pos.date_from)}
                  </span>
                </div>
                <div className="md-row">
                  <span className="m-tl">勤務エリア</span>
                  <span className="m-co">
                    {CT.strToNameList(pos.proj_area, CD.workareaList).map((item_area,i)=> 
                        <span key={i}>{item_area}</span>)}
                  </span>
                </div>
                <div className="md-row">
                  <span className="m-tl">業界</span>
                  <span className="m-co">
                    {CT.strToNameList(pos.proj_domn, CD.projdomnList).map((item_domn,i)=> 
                        <span key={i}>{item_domn} </span> )}
                  </span>
                </div>
                <div className="md-row">
                  <span className="m-tl">応募対象</span>
                  <span className="m-co">
                    {CT.strToNameList(pos.proj_targ, CD.projTarget).map((item_targ,i)=> 
                        <span key={i}>{item_targ}</span>)}
                  </span>
                </div>
                <div className="md-row">
                  <span className="m-tl">働き方</span>
                  <span className="m-co">
                    {CT.strToNameList(pos.proj_styl, CD.worktypeList).map((item_styl,i)=> 
                        <span key={i}>{item_styl}</span>)}
                  </span>
                </div>
                <div className="md-row">
                  <span className="m-tl">こだわり</span>
                  <span className="m-co">
                    {CT.strToNameList(pos.proj_pref, CD.projprefList).map((item_pref,i)=> 
                        <span className="m-proj-item-d" key={`pref-${i}`}>{item_pref}</span>)}
                  </span>
                </div>

              </div>
              



            </div>
          </div>
        }

      </div>
    )
  }
}


export default Posdetail