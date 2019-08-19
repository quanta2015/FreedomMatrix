import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Tabs, Form, Button, Modal, message} from 'antd';
import './index.less'



class Rule extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='g-rule'>
        <div className="m-rule">
          <h1>利用規約</h1>
          <div className="m-row-rule m-row-tl">この利用規約（以下、「本規約」といいます。）は、jiyujin：自由陣（以下、「運営事務局」といいます。）が、このウェブサイト上で提供するサービス （以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。</div>

        <p>
        <span className="m-row-rule">第1条（適用）</span>
        <span className="m-row-rule">本規約は、ユーザーと運営事務局との間の本サービスの利用に関わる一切の関係に適用されるものとします。</span>
        </p>

        <p>
        <span className="m-row-rule">第2条（利用登録）</span>
        <span className="m-row-rule">1. ユーザは、運営事務局の定める方法によって利用登録が完了するものとします。</span>
        <span className="m-row-rule">2. 運営事務局は、利用登録者に以下の事由があると判断した場合、利用登録を削除することがあり、その理由については一切の開示義務を負わないものとします。</span>
        <span className="m-row-rule">（1）利用登録に際して虚偽の事項を登録した場合</span>
        <span className="m-row-rule">（2）本規約に違反したことのある者から利用登録がある場合</span>
        <span className="m-row-rule">（3）その他、運営事務局が利用登録を相当でないと判断した場合</span>
        </p>

        <p>
        <span className="m-row-rule">第3条（ユーザーIDおよびパスワードの管理）</span>
        <span className="m-row-rule">1. ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを管理するものとします。</span>
        <span className="m-row-rule">2. ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与することはできません。運営事務局は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。</span>
        </p>

        <p>
        <span className="m-row-rule">第4条（利用料金および支払方法）</span>
        <span className="m-row-rule">1. ユーザー（案件を登録する側）は、本サービス利用の対価として、運営事務局が別途定め、本ウェブサイトに表示する利用料金を、運営事務局が指定する方法により支払うものとします。</span>
        <span className="m-row-rule">2. ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年１４．６％の割合による遅延損害金を支払うものとします。</span>
        <span className="m-row-rule">3. ユーザー（案件に応募する側）は、利用料金が一切かからないものとします。</span>
        </p>

        <p>
        <span className="m-row-rule">第5条（禁止事項）</span>
        <span className="m-row-rule">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</span>
        <span className="m-row-rule">（1）法令または公序良俗に違反する行為</span>
        <span className="m-row-rule">（2）犯罪行為に関連する行為</span>
        <span className="m-row-rule">（3）運営事務局のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</span>
        <span className="m-row-rule">（4）運営事務局のサービスの運営を妨害するおそれのある行為</span>
        <span className="m-row-rule">（5）他のユーザーに関する個人情報等を収集または蓄積する行為</span>
        <span className="m-row-rule">（6）他のユーザーに成りすます行為</span>
        <span className="m-row-rule">（7）既に成約している案件を削除せず放置する行為</span>
        <span className="m-row-rule">（8）運営事務局のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</span>
        <span className="m-row-rule">（9）その他、運営事務局が不適切と判断する行為</span>
        </p>

        <p>
        <span className="m-row-rule">第6条（本サービス提供の停止等）</span>
        <span className="m-row-rule">1. 運営事務局は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</span>
        <span className="m-row-rule">（1）本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</span>
        <span className="m-row-rule">（2）地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</span>
        <span className="m-row-rule">（3）コンピュータまたは通信回線等が事故により停止した場合</span>
        <span className="m-row-rule">（4）その他、運営事務局が本サービスの提供が困難と判断した場合</span>
        </p>

        <p>
        <span className="m-row-rule">2. 運営事務局は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。</span>
        </p>

        <p>
        <span className="m-row-rule">第7条（利用制限および登録抹消）</span>
        <span className="m-row-rule">1. 運営事務局は、以下の場合には事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</span>
        <span className="m-row-rule">（1）本規約のいずれかの条項に違反した場合</span>
        <span className="m-row-rule">（2）登録事項に虚偽の事実があることが判明した場合</span>
        <span className="m-row-rule">（3）その他、運営事務局が本サービスの利用を適当でないと判断した場合</span>
        </p>

        <p>
        <span className="m-row-rule">2.運営事務局は、本条に基づき運営事務局が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</span>
        </p>

        <p>
        <span className="m-row-rule">第8条（免責事項）</span>
        <span className="m-row-rule">1.運営事務局の債務不履行責任は、運営事務局の故意または重過失によらない場合には免責されるものとします。</span>
        <span className="m-row-rule">2.運営事務局は、何らかの理由によって責任を負う場合にも、通常生じうる損害の範囲内かつ有料サービスにおいては代金額（継続的サービスの場合には1か月分相当額）の 　範囲内においてのみ賠償の責任を負うものとします。</span>
        <span className="m-row-rule">3.運営事務局は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</span>
        </p>

        <p>
        <span className="m-row-rule">第9条（サービス内容の変更等）</span>
        <span className="m-row-rule">運営事務局は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</span>
        </p>

        <p>
        <span className="m-row-rule">第10条（利用規約の変更）</span>
        <span className="m-row-rule">運営事務局は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</span>
        </p>

        <p>
        <span className="m-row-rule">第11条（通知または連絡）</span>
        <span className="m-row-rule">ユーザーと運営事務局との間の通知または連絡は、運営事務局の定める方法によって行うものとします。</span>
        </p>

        <p>
        <span className="m-row-rule">第12条（権利義務の譲渡の禁止）</span>
        <span className="m-row-rule">ユーザーは、運営事務局の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</span>
        </p>

        <p>
        <span className="m-row-rule">第13条（準拠法・裁判管轄）</span>
        <span className="m-row-rule">1.本規約の解釈にあたっては、日本法を準拠法とします。</span>
        <span className="m-row-rule">2.本サービスに関して紛争が生じた場合には、運営事務局の本店所在地を管轄する裁判所を専属的合意管轄とします。</span>
        </p>

        <p>
        <span className="m-row-rule">以上</span>
        </p>
        </div>
        


      </div>
    )
  }
}

export default Rule