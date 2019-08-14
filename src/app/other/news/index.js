import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Tabs, Form, Button, Modal, message} from 'antd';
import './index.less'



class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='g-news'>
        News
      </div>
    )
  }
}

export default News