import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input,DatePicker,InputNumber,Select,Switch,Tabs,Button,Form,message  } from 'antd';
import moment  from 'moment'

const { Option } = Select;
const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const expItem = {
  proj_name:"",
  data_from:moment(moment(), dateFormat),
  data_to:  moment(moment(), dateFormat),
  work_lang:["0"],
  work_role:["0"],
  work_proj:["0"],
  work_detl:""
}

@inject('userActions', 'userStore')
@observer
class Reg extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.userActions
    this.store   = props.userStore
    this.state = {
      showexp: false,
      expList: [{
        proj_name:"",
        data_from:moment(moment(), dateFormat),
        data_to:  moment(moment(), dateFormat),
        work_lang:["0"],
        work_role:["0"],
        work_proj:["0"],
        work_detl:""
      }]
    }
  }


  doReg = (e) =>{
    e.preventDefault();
    

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let pwd = values.pwd
        let repwd = values.repwd
        if (pwd !== repwd) {
          message.success('r.msg')
        }else{
          let r = await this.actions.saveUser(values)
          if (r && r.code === 200) {
            window.location.assign(`${window.location.origin}${window.location.pathname}#/home`)
          }
        }
      }
    })
  }

  showExp = (e)=>{
    this.setState({
      showexp: e
    })
  }

  addExp = (e)=>{
    let expList = this.state.expList;
    expList.push(expItem)
    this.setState({
      showexp: expList
    })
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    let { showexp,expList } = this.state

    return (
      <div className='g-reg'>
        <div className="m-reg">
          <h1 className="m-reg_h1">無料登録フォーム</h1>
          <h2 className="m-reg_h2">基本情報をご入力ください</h2>
          <Form className="m-reg-form" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
            <Form.Item label="メールアドレス">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'メールアドレスを入力してください' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="パスワード">
              {getFieldDecorator('pwd', {
                rules: [{ required: true, message: 'パスワードを入力してください' }],
              })(<Input.Password placeholder="パスワード"/>)}
            </Form.Item>
            <Form.Item label="パスワード（確認用)">
              {getFieldDecorator('repwd', {
                rules: [{ required: true, message: 'パスワードを再入力してください' }],
              })(<Input.Password placeholder="パスワード"/>)}
            </Form.Item>
            <Form.Item label="氏名">
              {getFieldDecorator('name-cn', {
                rules: [{ required: true, message: '氏名を入力してください' }],
              })(<Input placeholder="自由陣　太郎" />)}
            </Form.Item>
            <Form.Item label="氏名（カナ）">
              {getFieldDecorator('name-kj', {
                rules: [{ required: true, message: '氏名（カナ）を入力してください' }],
              })(<Input.Password placeholder="ジユウジン　タロウ"/>)}
            </Form.Item>
            <Form.Item label="生まれた年">
              {getFieldDecorator('name-kn', {
                rules: [{ required: true, message: '生まれた年を入力してください' }],
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="電話番号">
              {getFieldDecorator('phone', {
                rules: [{ required: true, type:'number', min:10000000000, max:99999999999,  message: '電話番号を入力してください' }],
              })(<InputNumber placeholder="01234567890（ハイフン不要）" style={{width:'100%'}} />)}
            </Form.Item>
            <Form.Item label="カテゴリー">
              {getFieldDecorator('pers_type', {
                initialValue: "0",
                rules: [{ required: true, type: 'string', message: 'カテゴリーを選択してください' }]
                
              })(<Select className="m-form-text">
                  <Option value="0">フリーランス</Option>
                  <Option value="1">副業</Option>
                </Select>)}
            </Form.Item>

            <h2 className="m-reg_h2">稼働希望をご入力ください</h2>
            <Form.Item label="勤務希望エリア">
              {getFieldDecorator('work_area', {
                rules: [{ required: true, type: 'array', message: '勤務希望エリアを選択してください' }],
                initialValue: ["0"]
              })(<Select mode="multiple" className="m-form-text">
                  <Option value="0">２３区</Option>
                  <Option value="1">都内その他</Option>
                  <Option value="2">横浜市</Option>
                  <Option value="3">川崎市</Option>
                  <Option value="4">神奈川県</Option>
                  <Option value="5">千葉県</Option>
                  <Option value="6">埼玉県</Option>
                  <Option value="7">その他の県</Option>
                </Select>)}
            </Form.Item>
            <Form.Item label="希望稼働時期">
              {getFieldDecorator('work_time', {
                rules: [{ required: true, type: 'array', message: '希望稼働時期を選択してください' }],
                initialValue: ["0"]
              })(<Select mode="multiple" className="m-form-text">
                  <Option value="0">1ヶ月</Option>
                  <Option value="1">3ヶ月</Option>
                  <Option value="2">6ヶ月</Option>
                  <Option value="3">1年</Option>
                  <Option value="4">長期</Option>
                </Select>)}
            </Form.Item>
            <Form.Item label="希望月額報酬（万円）">
              {getFieldDecorator('work_mony', {
                rules: [{ type: 'integer', required: true,  min:1, max:200, message: '希望月額報酬を入力してください（最大200万円）' }],
                initialValue: 10
              })(<InputNumber placeholder="数字（単位：万円）" style={{width:'100%'}} />)}
            </Form.Item>
            <Form.Item label="希望働き方">
              {getFieldDecorator('work_type', {
                rules: [{ required: true, type: 'array', message: '希望働き方を選択してください' }],
                initialValue: ["0"]
              })(<Select mode="multiple" className="m-form-text">
                  <Option value="0">常駐</Option>
                  <Option value="1">週1</Option>
                  <Option value="2">週2</Option>
                  <Option value="3">週3</Option>
                  <Option value="4">週4</Option>
                  <Option value="5">完全リモート</Option>
                </Select>)}
            </Form.Item>

        
            <h2 className="m-reg_h2">
              <span className="m-h2-ti">経験・スキル登録</span>
              <Switch onChange={this.showExp} />
            </h2>
            
            {showexp?(
              <Tabs defaultActiveKey="1"  tabBarExtraContent={<Button onClick={this.addExp}>+</Button>}>
                {expList.map((item,index)=>{
                  return (
                  <TabPane tab={ <div><span>{index+1}</span> <Button onClick={this.delExp}>del</Button></div>} key={index+1}>
                    <Form.Item label="案件名">
                    {getFieldDecorator(`proj_name_${index+1}`, {
                      rules: [{ required: true, type: 'string', message: '案件名を入力してください' }],
                      initialValue: item.proj_name
                    })(<Input placeholder="案件名" />)}
                    </Form.Item>

                    <Form.Item label="期間">
                      {getFieldDecorator([`data_from_${index+1}`,`data_to_${index+1}`], {
                        rules: [{ required: true,  message: '期間を選択してください' }],
                        initialValue: [item.data_from, item.data_to]
                      })(<RangePicker format={dateFormat}　className="m-form-text"/>)}
                    </Form.Item>

                    <Form.Item label="経験言語">
                      {getFieldDecorator(`work_lang_${index+1}`, {
                        rules: [{ required: true, type: 'array', message: '経験言語を選択してください' }],
                        initialValue: ["0"]
                      })(<Select mode="multiple" className="m-form-text">
                          <Option value="0">Java</Option>
                          <Option value="1">ASP</Option>
                          <Option value="2">PHP</Option>
                          <Option value="3">Perl</Option>
                          <Option value="4">Struts</Option>
                          <Option value="5">HTML</Option>
                          <Option value="6">JavaScript</Option>
                          <Option value="7">.NET</Option>
                          <Option value="8">XML</Option>
                          <Option value="9">VB</Option>
                          <Option value="10">Script</Option>
                          <Option value="11">その他</Option>
                        </Select>)}
                    </Form.Item>

                    <Form.Item label="経験職種">
                      {getFieldDecorator(`work_role_${index+1}`, {
                        rules: [{ required: true, type: 'array', message: '経験職種を選択してください' }],
                        initialValue: ["0"]
                      })(<Select mode="multiple" className="m-form-text">
                          <Option value="0">システムエンジニア</Option>
                          <Option value="1">プログラマ</Option>
                          <Option value="2">Webエンジニア</Option>
                          <Option value="3">ネットワークエンジニア</Option>
                          <Option value="4">運用保守</Option>
                          <Option value="5">データベースエンジニア</Option>
                          <Option value="6">PM/PL/コンサル</Option>
                          <Option value="7">評価・テスト</Option>
                          <Option value="8">ヘルプデスク</Option>
                          <Option value="9">SE支援その他</Option>
                        </Select>)}
                    </Form.Item>

                    <Form.Item label="経験工程">
                      {getFieldDecorator(`work_proj_${index+1}`, {
                        rules: [{ required: true, type: 'array', message: '経験工程を選択してください' }],
                        initialValue: ["0"]
                      })(<Select mode="multiple" className="m-form-text">
                          <Option value="0">保険</Option>
                          <Option value="1">流通</Option>
                          <Option value="2">金融</Option>
                          <Option value="3">証券</Option>
                          <Option value="4">製造</Option>
                          <Option value="5">運輸</Option>
                          <Option value="6">通信</Option>
                          <Option value="7">官公庁</Option>
                          <Option value="8">教育</Option>
                          <Option value="9">医療</Option>
                          <Option value="10">情報</Option>
                          <Option value="11">その他</Option>
                        </Select>)}
                    </Form.Item>

                    <Form.Item label="詳細">
                      {getFieldDecorator(`work_detl_${index+1}`, {
                        rules: [{ required: false, type: 'string', message: '詳細を入力してください' }],
                        initialValue: ""
                      })(<TextArea rows={4} />)}
                    </Form.Item>
                  </TabPane>
                  ) 
                })}
              </Tabs>
            ):(<div></div>)}

            <div className="m-row fn-frc">
              <Button type="primary"  htmlType="submit" onClick={this.doReg}>登録</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

const RegApp = Form.create()(Reg);

export default RegApp