import { observable } from 'mobx'

class Store {
  @observable project = null
}

export default new Store()