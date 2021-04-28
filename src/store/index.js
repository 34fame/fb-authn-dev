import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import app from './app'

export default store(function (/* { ssrContext } */) {
   const Store = createStore({
      modules: {
         app,
      },

      strict: process.env.DEBUGGING,
   })

   return Store
})
