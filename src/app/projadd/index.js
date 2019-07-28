import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import * as urls from 'constant/urls'
import { Input } from 'antd';

@inject('carlActions', 'userStore')
@observer
class Projadd extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.carlActions
    this.store = props.userStore
  }

  render() {
   
    return (
      <div className='g-projadd'>
        add
      </div>
    )
  }
}


export default Projadd