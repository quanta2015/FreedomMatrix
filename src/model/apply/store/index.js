import { observable } from 'mobx'

class Store {
  @observable apply = null
  @observable msg = null
}

export default new Store()