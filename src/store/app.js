const state = {
   isAuthenticated: false,
}

const mutations = {
   SET_IS_AUTHENTICATED: (state, value) => {
      state.isAuthenticated = value
   },
}

const getters = {
   isAuthenticated: (state) => {
      return state.isAuthenticated
   },
}

const actions = {}

export default {
   namespaced: true,
   getters,
   mutations,
   actions,
   state,
}
