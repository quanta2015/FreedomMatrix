import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input } from 'antd';
import getNode from 'util/getNode'
import './index.less'
import { message } from 'antd'

@inject('projectActions', 'userStore')
@observer
class Question extends React.Component {

  constructor(props) {
    super(props)
    this.actions = props.projectActions
    this.store   = props.userStore
  }


  render() {

    return (
      <div className='g-question'>
        <div class="m-child-wrap m-child-wrap-s">
          <form class="m-form m-form-contact">
            <div class="m-form-item">
              <div class="m-form-tl m-require" data-locate="contact.form_ask">お問い合わせの種別</div>
              <div class="m-form-ip">
                <select id="fs_type" class="input--select form-control">
                  <option value="0" data-locate="contact.form_sel_c1">案件に関する問い合わせ</option>
                  <option value="1" data-locate="contact.form_sel_c2">採用に関する問い合わせ</option>
                  <option value="2" data-locate="contact.form_sel_c3">その他</option>
                </select>
              </div>
            </div>
            <div class="m-form-item">
              <div class="m-form-tl m-require" data-locate="contact.form_name">お名前</div>
              <div class="m-form-ip">
                <input type="text" id="fs_name" class="input--text form-control" required=""/>
              </div>
            </div>
            <div class="m-form-item ">
              <div class="m-form-tl m-require" data-locate="contact.form_email">メールアドレス</div>
              <div class="m-form-ip">
                <input type="email" id="fs_mail" class="input--text form-control" required=""/>
              </div>
            </div>
            <div class="m-form-item">
              <div class="m-form-tl" data-locate="contact.form_tel">電話番号</div>
              <div class="m-form-ip">
                <input type="tel" id="fs_tel" class="input--text form-control" pattern="^1(3|4|5|7|8)\d{9}$"/>
              </div>
            </div>
            <div class="m-form-item">
              <div class="m-form-tl m-require" data-locate="contact.form_title">題名</div>
              <div class="m-form-ip">
                <input type="text" id="fs_title" class="input--text form-control" required=""/>
              </div>
            </div>
            <div class="m-form-item">
              <div class="m-form-tl m-require" data-locate="contact.form_con">お問い合わせ内容</div>
              <div class="m-form-ip">
                <textarea type="text" id="fs_contact" class="input--textarea form-control" rows="8" required=""></textarea>
              </div>
            </div>
            <div class="m-form-item">
              <div class="m-agree">
                <div class="m-agree-r1">
                  <span>※</span>
                  <a href="about.html?type=3" data-locate="contact.form_agree1">[セキュリティポリシー]</a>
                  <span data-locate="contact.form_agree2">をご確認いただき、</span>
                </div>
                <div class="m-agree-r2">
                  <span data-locate="contact.form_agree3">同意いただける方はチェックをお願いします。</span>
                </div>

              </div>
            </div>

            <div class="m-form-item">
              <input type="button" value="送信" class="input--submit" id="btn-contact"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}




export default Question