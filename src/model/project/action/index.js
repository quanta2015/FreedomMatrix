import { action, runInAction, toJS } from 'mobx'
import BaseActions from 'component/BaseActions'
import * as urls from 'constant/urls'
import store from '../store'
import jwt from 'util/token'
import getNode from 'util/getNode'
import log from 'util/log'

class ProjectActions extends BaseActions {
  constructor(store) {
    super()
    this.store = store
  }

  saveProj(ret, st) {
    let { token, user, pos} = ret.data
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
  async projQuery(params) {
    let r = await this.post(urls.API_PROJ_QUERY, params, true)

    runInAction(() => {
      this.store.project = r.data
    })
    return r
  }

  @action
  async projAdd(params) {
    let r = await this.post(urls.API_PROJ_ADD, params, true)
    return r
  }






  

}

export default new ProjectActions(store)