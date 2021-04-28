<template>
   <div>
      <q-form class="q-gutter-sm" @submit.prevent="onLogin">
         <q-input
            dense
            outlined
            :placeholder="$t('enteryouremailaddress')"
            v-model="email"
         />
         <q-input
            dense
            outlined
            :placeholder="$t('enteryourpassword')"
            type="password"
            v-model="password"
         />
      </q-form>
      <div class="q-mt-md column q-gutter-sm">
         <q-btn color="primary" dense :label="$t('login')" no-caps @click="onLogin" />
         <q-btn color="primary" dense outline :label="$t('forgotpassword')" no-caps />
      </div>
   </div>
</template>

<script>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { LocalStorage, useQuasar } from 'quasar'

export default {
   setup() {
      const router = useRouter()
      const $q = useQuasar()
      const auth = inject('auth')
      const email = ref('')
      const password = ref('')

      return {
         email,
         password,

         async onLogin() {
            try {
               const session = await auth.signInWithEmailAndPassword(
                  email.value,
                  password.value
               )
               LocalStorage.set('user', session.user)
               router.push({ name: 'home' })
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
