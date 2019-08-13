import { action, runInAction, toJS } from 'mobx'
import BaseActions from 'component/BaseActions'
import * as urls from 'constant/urls'
import store from '../store'
import jwt from 'util/token'
import fileToBlob from 'util/fileToBlob'

class ApplyActions extends BaseActions {
  constructor(store) {
    super()
    this.store = store
  }

  async queryApply(params) {
    let r = await this.post(urls.API_QUERY_APPLY, params, true)
    if (r && r.code === 200) {
      runInAction(() => {
        this.store.apply = {
          data: r.data
        }
      })
    }
    return r
  }


  async addApply(params) {
    let r = await this.post(urls.API_ADD_APPLY, params, true)
    if (r && r.code === 200) {
      runInAction(() => {
        this.store.apply = {
          data: r.data
        }
      })
    }
    return r
  }


}

export default new ApplyActions(store)