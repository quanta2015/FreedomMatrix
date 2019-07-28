import React from 'react'
import { Layout, Row, Col,Drawer, Dropdown, Icon, Menu, Avatar, BackTop,Button } from 'antd'
const { Header, Content, Footer } = Layout;
import { NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import './index.less'
const { Sider } = Layout
const { SubMenu } = Menu;
const MenuItem = Menu.Item

import { MAIN_MENU }  from 'constant/data'


@inject('userActions', 'userStore')
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.userActions
    this.store   = props.userStore
    this.state   = { visible: false };
  }


  logout = async() => {
    await this.actions.logout()
    window.location.assign(
      window.location.origin + window.location.pathname + '#' + '/login'
    )
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {

    let isLogin = this.store.isLogin
    if (typeof(isLogin)==='undefined') {
      isLogin = 0;
    }

    console.log(isLogin)

    const dropdownMenu = (
      <Menu>
        <Menu.Item>
          <span onClick={this.logout}>
            <Icon type='poweroff' /> <span>退出登录</span>
          </span>
        </Menu.Item>
      </Menu>
    )

    return (
      <Layout className="layout">
        <Header>
          <div className="logo">自由阵</div>
          <div className="m-reg">
            <NavLink to='reg'>
              <span>無料登録</span>
            </NavLink>
          </div>
          <div className="m-hd-desktop">
            <Menu theme='light' mode="horizontal">
              {MAIN_MENU.map((item,i) => {
                if (!item.submenu) {
                  return(
                  <MenuItem key={i} className={(isLogin===item.type)||(0===item.type)?'fn-show':'fn-hide'}>
                    <NavLink to={item.path} >
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </NavLink>
                  </MenuItem>
                  )
                }else{
                  return(
                  <SubMenu key={i} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                    {item.submenu.map(subitem =>{
                      return (
                        <Menu.Item key={subitem.path}><Icon type={subitem.icon} />{subitem.title}</Menu.Item>
                      )
                    })}
                  </SubMenu>
                )}
              })}
            </Menu>
            <Dropdown overlay={dropdownMenu}>
              <span className='account'>
                <Avatar className='avatar' icon='user' />
              </span>
            </Dropdown>
          </div>
          <div className="m-hd-mobile">
            <Drawer
              className="m-mobile-menu"
              title={<Icon type="codepen" />}
              placement="left"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              {MAIN_MENU.map((item,i) => {
                if (!item.submenu) {
                  return(
                  <p key={i} className="m-menu_h">
                    <NavLink to={item.path} >
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </NavLink>
                  </p>
                  )
                }else{
                  return(

                  <p key={i} className="m-menu_s">
                    <span className="m-menu_s_tl"><Icon type={item.icon} />{item.title}</span>
                    {item.submenu.map(subitem =>{
                      return (
                        <NavLink to={subitem.path} key={subitem.path}>
                          <span  className="m-menu_s_ch"><Icon type={subitem.icon} />{subitem.title}</span>
                        </NavLink>
                      )
                    })}
                  </p>
                )}
              })}
            </Drawer>
          </div>
          <Button type="primary" className="m-hd-mobile" onClick={this.showDrawer}>
            <Icon type="menu" />
          </Button>
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default Dashboard
