import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Tabs, Form, Button, Modal, message} from 'antd';
import './index.less'

var newsList = [{
  title:"法人化はお得？個人事業主の法人成りのメリット・デメリットまとめ",
  content:"まずはじめに、あなたは以下の項目のうち、いくつあてはまりますか？"
},{
  title:"フリーランスの実態とは　～報酬・営業活動～",
  content:"フリーランスという働き方を選ぶ人は年々増え続けています。"
},{
  title:"フリーランスになると訪れる!?リスクは未然に回避せよ！",
  content:"フリーランスの最大のメリットは、なんといってもその自由さですよね。自分で案件を選び、キャリア形成をしていくことができる働き方はとても魅力的ですが、反面、大きなトラブルに発展しやすい"
},{
  title:"フリーランスになる前に～退職準備・退職届編～",
  content:"フリーランスとして独立するときには、当然ながら今まで正社員や派遣・契約社員として勤務していた就業先を退職することになりますが、自分勝手に事を進めてしまうと、想定通りに退職できなか"
},{
  title:"退社・入社準備～雇用保険と失業給付金～",
  content:"退社から再就職までの間には、さまざまな手続きが必要です。エンジニアとしてのスキルアップやフリーランスとしての独立などといったように、退社へ至る理由はさまざまですが"
}]

class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='g-news'>
        <div className="m-news">
          <div class="m-news-title">お役立ち情報一覧</div>
          {newsList.map((item,index)=>
             <div className="m-news-row">
                <div className="m-news-tl">{item.title}</div>
                <div className="m-news-co">{item.content}</div>
              </div>
          )}
        </div>
      </div>
    )
  }
}

export default News