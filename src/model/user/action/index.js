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

  @action
  async regUser(params) {
    let r = await this.post(urls.API_USER_REG, params, true)
    if (r && r.code === 200) {
      let { token, user, exp } = r.data
      jwt.saveToken(token)
      jwt.saveUser(user)
      jwt.saveExp(exp)

      this.store.user = {
        token: token,
        user: user,
        exp: exp 
      }
    }
    return r;
  }

  @action
  async login(params) {
    let r = await this.post(urls.API_USER_LOGIN, params, true)
    if (r && r.code === 200) {
      let token = r.data.token
      let langdb = r.data.langdb
      let config = r.data.config
      jwt.saveToken(token)
      jwt.saveLangdb(langdb)
      jwt.saveConfig(config)

      const data = jwt.decodeToken()
      this.store.user = {
        usr: data.usr,
        pwd: data.pwd,
        token: jwt.getToken(),
        langdb: langdb,
        config: config
      }


    }
    return r
  }

  @action
  async logout() {
    this.store.user = null
    jwt.removeToken()
    jwt.removeConfig()
  }


  @action
  async autoLogin() {
    const data = jwt.decodeToken()
    let params = {
      usr: data.usr,
      pwd: data.pwd
    }

    let r = await this.post(urls.API_USER_LOGIN, params, true)
    if (r && r.code === 200) {
      jwt.saveLangdb(r.data.langdb)
      jwt.saveConfig(r.data.config)
      
      runInAction(() => {
        this.store.user = {
          usr: data.usr,
          pwd: data.pwd,
          token: data.token,
          langdb: r.data.langdb,
          config: r.data.config
        }
      })
    }
    return
  }

}

export default new UserActions(store)