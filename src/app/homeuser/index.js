import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input } from 'antd';

@inject('carlActions', 'userStore')
@observer
class Homeuser extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.carlActions
    this.store = props.userStore
  }

  render() {
   
    return (
      <div className='g-homeuser'>
        home user
      </div>
    )
  }
}


export default Homeuser