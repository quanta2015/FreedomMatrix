import { action, runInAction, toJS } from 'mobx'
import BaseActions from 'component/BaseActions'
import * as urls from 'constant/urls'
import store from '../store'
import jwt from 'util/token'
import fileToBlob from 'util/fileToBlob'

class FavActions extends BaseActions {
  constructor(store) {
    super()
    this.store = store
  }

  async queryFav(params) {
    let r = await this.post(urls.API_QUERY_FAV, params, true)
    if (r && r.code === 200) {
      runInAction(() => {
        this.store.fav = {
          data: r.data
        }
      })
    }
    return r
  }

  async addFav(params) {
    let r = await this.post(urls.API_ADD_FAV, params, true)
    if (r && r.code === 200) {
      runInAction(() => {
        this.store.fav = {
          data: r.data
        }
      })
    }
    return r
  }

  async cancelFav(params) {
    let r = await this.post(urls.API_CANCEL_FAV, params, true)
    if (r && r.code === 200) {
      runInAction(() => {
        this.store.fav = {
          data: r.data
        }
      })
    }
    return r
  }


}

export default new FavActions(store)