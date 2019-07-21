import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input,DatePicker,InputNumber,Select  } from 'antd';

const { Option } = Select;

@inject('carlActions', 'userStore')
@observer
class Reg extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.carlActions
    this.store = props.userStore
  }

  render() {
   
    return (
      <div className='g-reg'>
        <div className="m-reg">
          <h1 className="m-reg_h1">無料登録フォーム</h1>
          <h2 className="m-reg_h2">基本情報をご入力ください</h2>
          <div className="m-reg-form">
            <div className="m-row">
              <div className="m-ti">メールアドレス</div>
              <div className="m-co"><Input className="m-form-text" placeholder="xxxxx@yahoo.co.jp" /></div>
            </div>
            <div className="m-row">
              <div className="m-ti">パスワード</div>
              <div className="m-co"><Input.Password className="m-form-text" placeholder="パスワード" /></div>
            </div>
            <div className="m-row">
              <div className="m-ti">パスワード（確認用)</div>
              <div className="m-co"><Input.Password className="m-form-text" placeholder="パスワード（確認用)" /></div>
            </div>
            <div className="m-row">
              <div className="m-ti">氏名</div>
              <div className="m-co"><Input className="m-form-text" placeholder="自由陣　太郎" /></div>
              <div className="m-gp"></div>
              <div className="m-ti">氏名（カナ）</div>
              <div className="m-co"><Input className="m-form-text" placeholder="ジユウジン　タロウ" /></div>
            </div>
            <div className="m-row">
              <div className="m-ti">生まれた年</div>
              <div className="m-co"><DatePicker className="m-form-text" /></div>
            </div>
            <div className="m-row">
              <div className="m-ti">電話番号</div>
              <div className="m-co"><InputNumber className="m-form-text" placeholder="01234567890（ハイフン不要）" min={10000000000} max={99999999999} /></div>
            </div>
            <div className="m-row">
              <div className="m-ti">カテゴリー</div>
              <div className="m-co">
                <Select defaultValue="ない">
                  <Option value="0">ない</Option>
                  <Option value="1">フリーランス</Option>
                  <Option value="2">副業</Option>
                </Select>
              </div>
            </div>


            <h2 className="m-reg_h2">稼働希望をご入力ください</h2>
            
            



            
          </div>
        </div>
      </div>
    )
  }
}


export default Reg