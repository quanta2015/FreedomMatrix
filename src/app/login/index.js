import React from 'react'
import { observer, inject } from 'mobx-react'
import { Form, Button, Input, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import './index.less'
const FormItem = Form.Item
import * as MSG  from 'constant/msg'

@Form.create()
@inject('userActions', 'userStore')
@observer
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.userActions
    this.store = props.userStore
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let r = await this.actions.login(values)
        if (r && r.code === 200) {   
          if(r.data.user.usertype == 1){
            window.location.assign(`${window.location.origin}${window.location.pathname}#/homecomp`)
          }else{
            window.location.assign(`${window.location.origin}${window.location.pathname}#/homeuser`)
          }  
        }
      }
    })
  }

  render() {
    const {  getFieldDecorator } = this.props.form

    return (
      <div className='g-login'>
        <div className='m-login'>
          <div className='login__header'>
            <span>自由阵ログイン </span>
          </div>

          <div className='login__form'>
            <Form onSubmit={this.handleSubmit}>
              <FormItem hasFeedback>
                {getFieldDecorator('email', { 
                  rules: [{ required: true, message: MSG.MSG_INPUT_ACCOUNT }],
                  initialValue: 'liy@163.com'
                })(
                  <Input
                    name='email'
                    prefix={<Icon type='user' />}
                    placeholder={MSG.MSG_INPUT_ACCOUNT}
                  />
                )}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator('pwd', { 
                  rules: [{ required: true, message: MSG.MSG_INPUT_PWD,
                  initialValue: 'aaa'
                }] })(
                  <Input
                    prefix={<Icon type='lock' />}
                    name='pwd'
                    type='password'
                    placeholder={MSG.MSG_INPUT_PWD}
                  />
                )}
              </FormItem>

              <Form.Item formItemLayout='vertical'>
                <Button className='login__btn' >
                  <NavLink to='/'><span>返回</span></NavLink> 
                </Button>
                <Button className='login__btn' type='primary' htmlType='submit' > 登录 </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login