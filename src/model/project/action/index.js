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

  @action
  async projQuery(params) {
    let r = await this.post(urls.API_PROJ_QUERY, params, true)

    runInAction(() => {
      this.store.project = r.data
    })
    return r
  }

}

export default new ProjectActions(store)