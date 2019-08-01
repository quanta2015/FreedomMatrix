import { observable } from 'mobx'

class Store {
  @observable apply = null
}

export default new Store()