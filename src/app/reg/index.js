import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input,DatePicker,Modal, InputNumber,Select,Switch,Tabs,Button,Form,message  } from 'antd';
import moment  from 'moment'
import clone from 'util/clone'
import MSelect from 'util/MSelect'
import * as cd from 'constant/data'
import RegUser from 'app/reguser'
import RegComp from 'app/regcomp'

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
      regtype: 0
    }
  }


  setType = (type,e)=>{
    this.setState({ regtype: type })
  }

  render() {
    let { regtype } = this.state

    return (
      <div className='g-reg'>
        <div className='m-reg-type'>
          <Button className="m-type-btn c-blue" onClick={this.setType.bind(this,0)}>会員様へ無料登録</Button>
          <Button className="m-type-btn c-blue" onClick={this.setType.bind(this,1)}>企業様へ無料登録</Button>
        </div>
        { regtype === 0 && <RegUser/>  }
        { regtype === 1 && <RegComp/> }
      </div>
    )
  }
}

const RegApp = Form.create()(Reg);

export default RegApp
