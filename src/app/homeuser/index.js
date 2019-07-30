import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input,Tabs,Form,Button,DatePicker,Select,InputNumber } from 'antd';
import './index.less'
import * as urls from 'constant/urls'
import * as cd from 'constant/data'
import clone   from 'util/clone'
import MSelect from 'util/MSelect'
import getNode from 'util/getNode'
import moment  from 'moment'




const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;

@Form.create()
@inject('favActions', 'favStore','userStore')
@observer
class Homeuser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: true,
    }

    let params = {
      id: 67 //this.props.userStore.user.user.id
    }
    this.props.favActions.queryFav(params) 
  }

  setEdit = () => {
    this.setState({
      editable: false
    })
  }


  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFields( async (err, values) => {
    
    })
  }

  render() {
    const { editable } = this.state
    const { user } = this.props.userStore
    const { fav }  = this.props.favStore
    const { getFieldDecorator } = this.props.form;



    const workareaList = getValue(user, 'user.workareaList', '') || ['0']
    const worktimeList = getValue(user, 'user.worktimeList', '') || ['0']
    const worktypeList = getValue(user, 'user.worktypeList', '') || ['0']
    const birth =        getValue(user, 'user.birth', '') || Date.now()
    const email =        getValue(user, 'user.email', '')
    const pwd =          getValue(user, 'user.pwd', '')
    const name_kj =      getValue(user, 'user.name_kj', '')
    const name_kn =      getValue(user, 'user.name_kn', '')
    const pers_type =    getValue(user, 'user.pers_type', '') || '0'
    const work_money   = getValue(user, 'user.work_money', '') || 0
    // const exp = getValue(data, exp, '')

    let list =   getValue(fav, 'data', [])

    console.log(list)


   
    return (
      <div className='g-homeuser'>
          <Tabs className="m-home-menu" type="card">
            <TabPane tab="用户信息" key="1" className="m-tab-userinfo">
              <Form className="m-reg-form" onSubmit={this.handleSubmit} >
                <div className="m-row">
                  <div className="m-tl">
                    <span>基本情報</span>
                    <div className="m-fn">
                      <Button htmlType="button" onClick={this.setEdit}>修改</Button>
                      <Button htmlType="submit" >保存</Button>
                    </div>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">メールアドレス</div>
                  <div className="m-col-co">
                    <Input placeholder="email@address.com"  defaultValue={email} disabled={editable}/>
                  </div>
                  <div className="m-col-tl">電話番号</div>
                  <div className="m-col-co">
                    <Input placeholder="01234567890（ハイフン不要）"  defaultValue={pwd} disabled={editable}/>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">氏名（漢字）</div>
                  <div className="m-col-co">
                    <Input placeholder="自由陣　太郎" defaultValue={name_kj} disabled={editable}/>
                  </div>
                  <div className="m-col-tl">氏名（カナ）</div>
                  <div className="m-col-co">
                    <Input placeholder="ジユウジン　タロウ" defaultValue={name_kn}  disabled={editable}/>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">生年月日</div>
                  <div className="m-col-co">
                    <DatePicker className="m-form-text"  defaultValue={moment(birth)} placeholder='年/月/日'  format= {cd.DATE_FORMAT}  disabled={editable}/>
                  </div>
                  <div className="m-col-tl">カテゴリー</div>
                  <div className="m-col-co">
                    <Select className="m-form-text" defaultValue={pers_type}  disabled={editable}>
                      <Option value="0">フリーランス</Option>
                      <Option value="1">副業</Option>
                    </Select>
                  </div>
                </div>

                <div className="m-row">
                  <div className="m-tl">
                    <span>稼働希望</span>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">勤務希望エリア</div>
                  <div className="m-col-co">
                    <MSelect className="m-form-text" data={cd.workareaList} defaultValue={workareaList}  disabled={editable}/>
                  </div>
                  <div className="m-col-tl">希望稼働時期</div>
                  <div className="m-col-co">
                    <MSelect className="m-form-text" data={cd.worktimeList} defaultValue={worktimeList}  disabled={editable}/>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-col-tl">希望月額報酬（万円）</div>
                  <div className="m-col-co">
                    <InputNumber placeholder="数字（単位：万円）" defaultValue={work_money}   disabled={editable}/>
                  </div>
                  <div className="m-col-tl">希望働き方</div>
                  <div className="m-col-co">
                    <MSelect className="m-form-text" data={cd.worktypeList} defaultValue={worktypeList}  disabled={editable}/>
                  </div>
                </div>

                <div className="m-row">
                  <div className="m-tl">
                    <span>経験・スキル登録</span>
                  </div>
                </div>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Tab 1" key="1">
                    <div className="m-row">
                      <div className="m-col-tl">案件名</div>
                      <div className="m-col-co">
                        <Input placeholder="案件名"  disabled={editable}/>
                      </div>
                    </div>
                    <div className="m-row">
                      <div className="m-col-tl">期間</div>
                      <div className="m-col-co">
                        <RangePicker format={cd.DATE_FORMAT}  className="m-form-text"  disabled={editable}/>
                      </div>
                      <div className="m-col-tl">経験言語</div>
                      <div className="m-col-co">
                        <MSelect className="m-form-text" data={cd.worklangList}  disabled={editable}/>
                      </div>
                    </div>
                    <div className="m-row">
                      <div className="m-col-tl">経験職種</div>
                      <div className="m-col-co">
                        <MSelect className="m-form-text" data={cd.workroleList}  disabled={editable}/>
                      </div>
                      <div className="m-col-tl">経験工程</div>
                      <div className="m-col-co">
                        <MSelect className="m-form-text" data={cd.workprojList}  disabled={editable}/>
                      </div>
                    </div>
                    <div className="m-row">
                      <div className="m-col-tl">詳細</div>
                      <div className="m-col-co">
                        <TextArea rows={4}  disabled={editable}/>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </Form>
            </TabPane>
            <TabPane tab="応募案件" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="気になる案件" key="3">
              {list.map((e,index)=>{
                return( <div key={index}>{e.proj_name}</div>)
              })}
              
            </TabPane>
            <TabPane tab="メッセージ" key="4">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
      </div>
    )
  }
}


export default Homeuser