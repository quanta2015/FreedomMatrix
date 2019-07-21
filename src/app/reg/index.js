import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input,DatePicker,InputNumber,Select,Switch,Tabs,Button,Form  } from 'antd';
import moment  from 'moment'

const { Option } = Select;
const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

@inject('carlActions', 'userStore')
@observer
class Reg extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.carlActions
    this.store = props.userStore
  }


  doReg = (e) =>{

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }


      console.log('error')
    });

    // var forms = document.getElementsByClassName('m-reg-form');
    // var validation = Array.prototype.filter.call(forms, function (form) {
    //   console.log(form);


    //   if (form.checkValidity() === false) {
    //     form.classList.add('was-validated');
    //   } else {
        
    //     console.log(form);
    //   }
    // })
  }



  render() {

    const { getFieldDecorator } = this.props.form;

    let tabList = [0,0,0]

   

    return (
      <div className='g-reg'>
        <div className="m-reg">
          <h1 className="m-reg_h1">無料登録フォーム</h1>
          <h2 className="m-reg_h2">基本情報をご入力ください</h2>
          <Form className="m-reg-form" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
            <Form.Item label="メールアドレス">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="パスワード">
              {getFieldDecorator('pwd', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(<Input.Password placeholder="パスワード"/>)}
            </Form.Item>
            <Form.Item label="パスワード（確認用)">
              {getFieldDecorator('repwd', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(<Input.Password placeholder="パスワード"/>)}
            </Form.Item>
            <Form.Item label="氏名">
              {getFieldDecorator('name-cn', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(<Input placeholder="自由陣　太郎" />)}
            </Form.Item>
            <Form.Item label="氏名（カナ）">
              {getFieldDecorator('name-kj', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(<Input.Password placeholder="ジユウジン　タロウ"/>)}
            </Form.Item>
            <Form.Item label="生まれた年">
              {getFieldDecorator('name-kn', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="電話番号">
              {getFieldDecorator('phone', {
                rules: [{ required: true, type:'number', min:10000000000, max:99999999999,  message: 'Please input your password!' }],
              })(<InputNumber placeholder="01234567890（ハイフン不要）" style={{width:'100%'}} />)}
            </Form.Item>
            <Form.Item label="カテゴリー">
              {getFieldDecorator('pers_type', {
                initialValue: "0",
                rules: [{ required: true, type: 'string', messge: 'Please input your password!' }]
                
              })(<Select className="m-form-text">
                  <Option value="0">ない</Option>
                  <Option value="1">フリーランス</Option>
                  <Option value="2">副業</Option>
                </Select>)}
            </Form.Item>

            <h2 className="m-reg_h2">稼働希望をご入力ください</h2>
            <Form.Item label="勤務希望エリア">
              {getFieldDecorator('work_area', {
                rules: [{ required: true, type: 'array', messge: 'Please input your password!' }],
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
                rules: [{ required: true, type: 'array', messge: 'Please input your password!' }],
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
                rules: [{ type: 'integer', required: true,  min:1, max:200, messge: 'Please input your password!' }],
                initialValue: 10
              })(<InputNumber placeholder="数字（単位：万円）" style={{width:'100%'}} />)}
            </Form.Item>
            <Form.Item label="希望働き方">
              {getFieldDecorator('work_type', {
                rules: [{ required: true, type: 'array', messge: 'Please input your password!' }],
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
              <Switch defaultChecked />
            </h2>
            
            <Tabs defaultActiveKey="1">
            {tabList.map((item,index)=>{
              return (
              <TabPane tab={`案件${index+1}`} key={index+1}>
                <div className="m-row">
                  <div className="m-ti m-require">案件名</div>
                  <div className="m-co">
                    <Input className="m-form-text form-control" placeholder="xxxxx@yahoo.co.jp" required/>
                    
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-ti">期間</div>
                  <div className="m-co">
                    <RangePicker defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                                 format={dateFormat}　
                                 className="m-form-text"/>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-ti">経験言語</div>
                    <div className="m-co">
                    <Select mode="multiple" defaultValue={['0']} className="m-form-text">
                      <Option value="0">Java</Option>
                      <Option value="1">ASP</Option>
                      <Option value="2">PHP</Option>
                      <Option value="3">Perl</Option>
                      <Option value="4">Struts</Option>
                      <Option value="5">HTML</Option>
                      <Option value="6">JavaScript</Option>
                      <Option value="1">.NET</Option>
                      <Option value="2">XML</Option>
                      <Option value="3">VB</Option>
                      <Option value="4">Script</Option>
                      <Option value="4">その他</Option>
                    </Select>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-ti">経験職種</div>
                    <div className="m-co">
                    <Select mode="multiple" defaultValue={['0']} className="m-form-text">
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
                    </Select>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-ti">経験工程</div>
                    <div className="m-co">
                    <Select mode="multiple" defaultValue={['0']} className="m-form-text">
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
                    </Select>
                  </div>
                </div>
                <div className="m-row">
                  <div className="m-ti">詳細</div>
                    <div className="m-co">
                    <TextArea rows={4} />
                  </div>
                </div>
              </TabPane>
              ) 
            })}
            </Tabs>


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