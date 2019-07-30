import { observable } from 'mobx'

class Store {
  @observable fav = null
}

export default new Store()