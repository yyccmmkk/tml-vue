export default {
  state: {
    token: ''
  },
  getters: {},
  mutations: {
    updateToken(state: any, value: any) {
      // mutate state
      state.token = value;
      console.log(value)
    }
  },
  actions: {},
  modules: {}
}
