import { createStore } from 'vuex'
import * as types from './mutation-types'

export default createStore({
  state: {
    isCloseSidebar: false,
  },
  getters: {
    isCloseSidebar: state => state.isCloseSidebar
  },
  mutations: {
    [types.TOGGLE_SIDEBAR](state) {
      state.isCloseSidebar = !state.isCloseSidebar
    }
  },
  actions: {},
  modules: {},
})
