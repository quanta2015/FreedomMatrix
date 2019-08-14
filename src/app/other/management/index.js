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
        「特定商取引に関する法律」第11条に基づき、以下のとおり表示いたします。
        販売事業者 合同会社ビズラボ
        運営責任者 田中
        サイトURL  http://jiyujin-freelance.com/jiyujin/
        所在地 東京都品川区大崎1丁目20-4-1201
        電話受付時間  午前9時～午後5時
        サービス料 使用料は全て無料。ただし、マッチング成立時のみ法人側が プロジェクト総額の10％をお支払い
        問合せ先  info@jiyujin-freelance.com
        電話番号  03-6420-0646
        支払方法/支払期限 銀行振込/成約した当月末締め翌月末払い
        キャンセル・交換  一度確定した取引はキャンセル不可
      </div>
    )
  }
}

export default Management