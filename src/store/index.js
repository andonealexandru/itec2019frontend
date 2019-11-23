import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    authorization: '',
    user: {
      userId: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      address: '',
      building: '',
      postalCode: '',
      type: ''
    }
  },
  plugins: [createPersistedState()],
  mutations: {
    updateAuth: (state, auth) => {
      state.authorization = auth
    }
  }
})
