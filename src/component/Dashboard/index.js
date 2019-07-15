import React from 'react'
import { Layout, Row, Col, Dropdown, Icon, Menu, Avatar, BackTop,Button } from 'antd'
const { Header, Content, Footer } = Layout;
import { NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import './index.less'
const { Sider } = Layout
const { SubMenu } = Menu;
const MenuItem = Menu.Item

let menu = [
      {
        path:'/home',
        icon:'home',
        title:'HOME'
      },{
        icon:'project',
        title:'案件',
        submenu: [{
          path:'/search',
          icon:'search',
          title:'案件検索',
        },{
          path:'/addproject',
          icon:'schedule',
          title:'案件登録'
        },{
          path:'/myproject',
          icon:'project',
          title:'案件My'
        }]
      },{
        path:'/mymember',
        icon:'user',
        title:'会員My'
      },{
        path:'/ask',
        icon:'question-circle',
        title:'お問い合わせ'
      },{
        icon:'user',
        title: 'その他',
        submenu: [{
          path:'/management',
          icon:'profile',
          title:'運営企業'
        },{
          path:'/rule',
          icon:'profile',
          title:'利用規約'
        },{
          path:'/privacy',
          icon:'profile',
          title:'プライバシーポリシー'
        },{
          path:'/news',
          icon:'profile',
          title:'お役たち情報'
        }]
      }
    ]


@inject('userActions', 'userStore')
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.actions = props.userActions
    this.store = props.userStore
  }


  logout = async() => {
    await this.actions.logout()
    window.location.assign(
      window.location.origin + window.location.pathname + '#' + '/login'
    )
  }

  render() {

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
          <Menu theme='light' mode="horizontal">
            {menu.map((item,i) => {
              if (!item.submenu) {
                return(
                <MenuItem key={i}>
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
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default Dashboard
