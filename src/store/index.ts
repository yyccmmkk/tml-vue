import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import common from './common'

const persistedState = createPersistedState({
  storage: window.sessionStorage
  //paths:['common'] //todo 指定需要持久化的数据
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {},
  mutations: {
    increment(state, value) {
      // mutate state
      state.count++
      console.log(value)
    }
  },
  actions: {},
  modules: {
    common
  },
  plugins: [persistedState]
})
