import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    authorization: '',
    userId: '',
    user: {
      userId: '',
      firstName: 'Blah',
      lastName: 'Blah',
      email: '',
      phone: '',
      city: '',
      address: '',
      building: '',
      postalCode: '',
      type: ''
    },
    viewType: ''
  },
  plugins: [createPersistedState()],
  mutations: {
    setAuthorization (state, s) {
      state.authorization = s
    },
    setUserId (state, s) {
      state.userId = s
    },
    setIsLoggedIn (state, b) {
      state.isLoggedIn = b
    },
    setViewType (state, s) {
      state.viewType = s
    },
    setUser (state, obj) {
      state.user = obj
    }
  }
})
