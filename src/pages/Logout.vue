<template></template>

<script>
import { inject } from 'vue'
import { LocalStorage } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
   setup() {
      const router = useRouter()
      const store = useStore()
      const auth = inject('auth')

      auth.signOut()
      LocalStorage.clear()
      store.commit('app/SET_IS_AUTHENTICATED', false)

      router.push({ name: 'login' })
   },
}
</script>

<style></style>
