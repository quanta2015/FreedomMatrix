import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input,Tabs,Form } from 'antd';

const { TabPane } = Tabs;

@Form.create()
@inject('carlActions', 'userStore')
@observer
class Homeuser extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.carlActions
    this.store = props.userStore
  }

  render() {

    const { getFieldDecorator } = this.props.form;
   
    return (
      <div className='g-homeuser'>
          <Tabs className="m-home-menu" type="card">
            <TabPane tab="用户信息" key="1">
              <Form className="m-reg-form" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} >
                <Form.Item label="メールアドレス">
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'メールアドレスを入力してください' }],
                    initialValue:'liyangtom@163.com'
                  })(<Input placeholder="email@address.com" disabled='true'/>)}
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="応募案件" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="気になる案件" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="登録情報" key="4">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
      </div>
    )
  }
}


export default Homeuser