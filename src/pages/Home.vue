<template>
   <q-page class="flex flex-center">
      <div class="column q-gutter-lg">
         <q-img src="/images/shield.svg" width="240px" />
         <q-btn color="primary" :label="$t('logout')" no-caps @click="onLogout" />
      </div>
   </q-page>
</template>

<script>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { LocalStorage, useQuasar } from 'quasar'
import { mapGetters, mapMutations } from 'vuex'

export default {
   computed: {
      ...mapGetters(['app/isAuthenticated']),
   },

   methods: {
      ...mapMutations(['app/SET_IS_AUTHENTICATED']),
   },

   setup() {
      const router = useRouter()
      const $q = useQuasar()
      const auth = inject('auth')

      return {
         async onLogout() {
            try {
               router.push({ name: 'logout' })
            } catch (error) {
               console.error(error.message)
               $q.notify({ color: 'negative', message: error.message })
            }
         },
      }
   },
}
</script>

<style></style>
