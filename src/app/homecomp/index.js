import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input } from 'antd';

@inject('userActions', 'userStore')
@observer
class Homecomp extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.userActions
    this.store = props.userStore
  }

  render() {
    return (
      <div className='g-homecomp'>
        home comp
      </div>
    )
  }
}


export default Homecomp