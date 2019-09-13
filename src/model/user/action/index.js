import { action, runInAction, toJS } from 'mobx'
import BaseActions from 'component/BaseActions'
import * as urls from 'constant/urls'
import { message } from 'antd'
import store from '../store'
import jwt from 'util/token'
import clone from 'util/clone'




class UserActions extends BaseActions {
  constructor(store) {
    super()
    this.store = store
  }

  saveData(ret, st) {
    let { token, user, exp} = ret.data
    if (ret && ret.code === 200) {
      jwt.saveToken(token)
      jwt.saveUser(user)
      jwt.saveExp(exp)
      runInAction(() => {
        st.isLogin = user.usertype == 0?1:2
        st.user = {
          token: token,
          user: user,
          exp: exp 
        }
      }) 
    }
  }

  @action
  async regUser(params) {
    let r = await this.post(urls.API_USER_REG, params, true)

    if (r.code === 200) {
      this.saveData(r, this.store)
    }
    return r
  }

  @action
  async saveUser(params) {
    let r = await this.post(urls.API_USER_SAVE, params, true)
    this.saveData(r, this.store)
    return r
  }

  @action
  async saveComp(params) {
    let r = await this.post(urls.API_COMP_SAVE, params, true)
    this.saveData(r, this.store)
    return r
  }

  @action
  async regComp(params) {
    let r = await this.post(urls.API_COMP_REG, params, true)

    if(r.code === 200){
      this.saveData(r, this.store)
    }
    return r
  }

  @action
  async login(params) {
    let r = await this.post(urls.API_USER_LOGIN, params, true)
    if (r && r.code === 200) {
      this.saveData(r, this.store)
    }
    return r
  }


  @action
  async logout() {
    this.store.user = null
    this.store.isLogin = 0
    jwt.removeToken()
    jwt.removeUser()
    jwt.removeExp()
  }
  

  @action
  async autoLogin() {
    const data = jwt.decodeToken()
    let params = { email: data.email, pwd: data.pwd }
    let r = await this.post(urls.API_USER_LOGIN, params, true)

    if (r && r.code === 200) {
      this.saveData(r, this.store)
      // if(r.data.user.usertype === 1){
      //   window.location.assign(`${window.location.origin}${window.location.pathname}#/homecomp`)
      // }else{
      //   window.location.assign(`${window.location.origin}${window.location.pathname}#/homeuser`)
      //   window.location.assign(`${window.location.origin}${window.location.pathname}#/projquery`)
      // }
    }else{
      message.success('获取自动登录数据失败！')
    }
    return
  }

  @action
  async setVal(id,v,level,index) {
    if (level==0) {
      this.store.user.user[id] = v
    }else{
      let tmp = id.split('_')
      tmp.pop()
      id = tmp.join('_')
      this.store.user.exp[index][id] = v
    }
    
    return
  }


}

export default new UserActions(store)