import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Tabs, Form, Button, Modal, message} from 'antd';
import './index.less'



class Management extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='g-management'>
        <div className="m-manage">
          <h1>運営企業</h1>
          <div className="m-row-manage m-row-tl">「特定商取引に関する法律」第11条に基づき、以下のとおり表示いたします。</div>
         <div className="m-row-manage"><span className="m-tl">販売事業者</span> <span className="m-co">合同会社ビズラボ</span></div>
        <div className="m-row-manage"><span className="m-tl">運営責任者</span> <span className="m-co">田中</span>
        </div>
        <div className="m-row-manage"><span className="m-tl">サイトURL</span>  <span className="m-co">http://jiyujin-freelance.com/jiyujin/</span>
        </div>
        <div className="m-row-manage"><span className="m-tl">所在地</span> <span className="m-co">東京都品川区大崎1丁目20-4-1201</span>
        </div>
        <div className="m-row-manage"><span className="m-tl">電話受付時間</span>  <span className="m-co">午前9時～午後5時</span>
        </div>
        <div className="m-row-manage"><span className="m-tl">サービス料</span> <span className="m-co">使用料は全て無料。ただし、マッチング成立時のみ法人側が,プロジェクト総額の10％をお支払い</span>
        </div>
        <div className="m-row-manage"><span className="m-tl">問合せ先</span>  <span className="m-co">info@jiyujin-freelance.com</span>
        </div>
        <div className="m-row-manage"><span className="m-tl">電話番号</span>  <span className="m-co">03-6420-0646</span>
        </div>
        <div className="m-row-manage"><span className="m-tl">支払方法/支払期限</span> <span className="m-co">銀行振込/成約した当月末締め翌月末払い</span>
        </div>
        <div className="m-row-manage"><span className="m-tl">キャンセル・交換</span>  <span className="m-co">一度確定した取引はキャンセル不可</span>
        </div>

        </div>
      </div>
    )
  }
}

export default Management