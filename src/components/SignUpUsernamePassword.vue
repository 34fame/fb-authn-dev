<template>
   <div>
      <q-form class="q-gutter-sm" @submit.prevent="onSignUp">
         <q-input outlined :placeholder="$t('enteryouremailaddress')" v-model="email" />
         <q-input
            outlined
            :placeholder="$t('enteryourpassword')"
            type="password"
            v-model="password"
         />
         <q-input
            outlined
            :placeholder="$t('confirmyourpassword')"
            type="password"
            v-model="confirm"
         />
      </q-form>
      <div class="q-mt-md column q-gutter-sm">
         <q-btn color="primary" :label="$t('save')" no-caps @click="onSignUp" />
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
      const confirm = ref('')

      return {
         email,
         password,
         confirm,

         async onSignUp() {
            try {
               const session = await auth.createUserWithEmailAndPassword(
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
