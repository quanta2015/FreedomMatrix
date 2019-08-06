import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input,DatePicker,Modal, InputNumber,Select,Switch,Tabs,Button,Form,message  } from 'antd';
import moment  from 'moment'
import clone from 'util/clone'
import MSelect from 'util/MSelect'
import * as DT from 'util/date'
import * as cd from 'constant/data'

const { Option } = Select;
const { TabPane } = Tabs;
const { MonthPicker, RangePicker } = DatePicker;
const { TextArea } = Input;



@inject('userActions', 'userStore')
@observer
class Reg extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.userActions
    this.store   = props.userStore


    this.state = {
    //   showexp: false,
      regtype: 1,
    //   activeKey: panes[0].key,
    //   panes,
    }
  }

  doReg = (e) =>{
    e.preventDefault();
    this.props.form.validateFields( async (err, values) => {
      if (!err) {
        let params = clone(values)
        let pwd   = params.pwd
        let repwd = params.repwd
        if (pwd !== repwd) {
          message.success('二回入力したパスワードが一致しません。')
        }else{
          Modal.confirm({
            title: 'データをログインするかどうかを確認してください?',
            onOk:()=> {
              this.regComp(params)
            }
          });
        }
      }
    })
  }

  regComp = async (params) => {
    
    let r = await this.actions.regComp(params)
    if (r && r.code === 200) {
      Modal.success({
        title: '登録成功！',
        content: 'クリックして企業ページにジャンプします。',
        okText:"確認",
        onOk() {
          window.location.assign(`${window.location.origin}${window.location.pathname}#/homecomp`)
        }
      })
    }else if(r && r.code === 201) {
      message.success('该用户已经存在。')
    }
  }



  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="m-regcomp">
        <h1 className="m-reg_h1">無料企業登録フォーム</h1>
        <h2 className="m-reg_h2">基本情報をご入力ください</h2>
        <Form className="m-reg-form" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
          >
          <Form.Item label="会社名">
            {getFieldDecorator('name_comp', {
              rules: [{ required: true, message: '会社名を入力してください' }],
              initialValue: 'テスト' 
            })(<Input placeholder="自由陣株式会社" />)}
          </Form.Item>
          <Form.Item label="部署">
            {getFieldDecorator('name_dept', {
              rules: [{ required: true, message: '部署を入力してください' }],
              initialValue: 'テスト部' 
            })(<Input placeholder="総務部、人事部、経理部、営業部、開発部等" />)}
          </Form.Item>
          <Form.Item label="担当者氏名（漢字）">
            {getFieldDecorator('name_kj', {
              rules: [{ required: true, message: '担当者氏名（漢字）を入力してください' }],
              initialValue: 'テスト' 
            })(<Input placeholder="自由陣　太郎"/>)}
          </Form.Item>
          <Form.Item label="担当者氏名（カナ）">
            {getFieldDecorator('name_kn', {
              rules: [{ required: true, message: '氏名（カナ）を入力してください' }],
              initialValue: 'テスト' 
            })(<Input placeholder="ジユウジン　タロウ"/>)}
          </Form.Item>
          <Form.Item label="電話番号">
            {getFieldDecorator('input-number-phone', {
              rules: [{ required: true, type:'number', min:10000000000, max:99999999999,  message: '電話番号を入力してください' }],
              initialValue: 12345678901
            })(<InputNumber placeholder="01234567890（ハイフン不要）" style={{width:'100%'}} />)}
          </Form.Item>
          <Form.Item label="メールアドレス">
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'メールアドレスを入力してください' }],
              initialValue:'test@gmail.com'
            })(<Input placeholder="email@address.com" />)}
          </Form.Item>
          <Form.Item label="パスワード">
            {getFieldDecorator('pwd', {
              rules: [{ required: true, message: 'パスワードを入力してください' }],
              initialValue: '123' 
            })(<Input.Password placeholder=""/>)}
          </Form.Item>
          <Form.Item label="パスワード（確認用）">
            {getFieldDecorator('repwd', {
              rules: [{ required: true, message: 'パスワードを再入力してください' }],
              initialValue: '123' 
            })(<Input.Password placeholder=""/>)}
          </Form.Item>   

          
          <div className="m-row fn-frc">
            <Button type="primary"  htmlType="submit" onClick={this.doReg}>登録</Button>
          </div>
        </Form>
      </div>
    )
  }
}

const RegApp = Form.create()(Reg);

export default RegApp
