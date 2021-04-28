<template>
   <q-page class="flex flex-center">
      <div class="column">
         <!-- Brand -->
         <div class="row justify-center items-center">
            <q-img src="/images/shield.svg" width="48px" />
            <span class="text-h4 text-weight-thin">ACME Security</span>
         </div>

         <!-- Login Card -->
         <transition appear enter-active-class="animated backInLeft">
            <q-card v-if="view === 'login'" class="q-mt-lg">
               <q-card-section class="q-pa-xs">
                  <div class="row justify-end">
                     <q-select
                        borderless
                        dense
                        emit-value
                        map-options
                        :options="localeOptions"
                        v-model="locale"
                     />
                  </div>
               </q-card-section>
               <q-card-section class="row justify-center">
                  <span class="text-h4 text-weight-light">Log In</span>
               </q-card-section>
               <q-card-section>
                  <template v-if="method === 'username-password'">
                     <sign-in-username-password />
                  </template>
               </q-card-section>
               <q-card-section>
                  <div class="row justify-center text-caption text-grey-5">
                     {{ $t('logininwiththese') }}
                  </div>
                  <div class="row justify-around items-center">
                     <q-btn color="amazon" flat round icon="fab fa-amazon" />
                     <q-btn color="apple" flat round icon="fab fa-apple" />
                     <q-btn color="facebook" flat round icon="fab fa-facebook" />
                     <q-btn color="github" flat round icon="fab fa-github" />
                     <q-btn
                        color="google"
                        flat
                        round
                        icon="fab fa-google"
                        @click="onGoogle"
                     />
                  </div>
               </q-card-section>
               <q-card-section>
                  <div class="row justify-center items-center">
                     <span>{{ $t('needanaccount') }}</span>
                     <q-btn
                        color="primary"
                        flat
                        :label="$t('signup')"
                        no-caps
                        @click="view = 'signup'"
                     />
                  </div>
               </q-card-section>
            </q-card>
         </transition>

         <!-- Sign Up Card -->
         <transition appear enter-active-class="animated backInRight">
            <q-card v-if="view === 'signup'" class="q-mt-lg">
               <q-card-section class="q-pa-xs">
                  <div class="row justify-end">
                     <q-select
                        borderless
                        dense
                        emit-value
                        map-options
                        :options="localeOptions"
                        v-model="locale"
                     />
                  </div>
               </q-card-section>
               <q-card-section class="row justify-center">
                  <span class="text-h4 text-weight-light">Sign Up</span>
               </q-card-section>
               <q-card-section>
                  <sign-up-username-password />
               </q-card-section>
               <q-card-section>
                  <div class="row justify-center items-center">
                     <span>{{ $t('alreadyhaveaccount') }}</span>
                     <q-btn
                        color="primary"
                        flat
                        :label="$t('login')"
                        no-caps
                        @click="view = 'login'"
                     />
                  </div>
               </q-card-section>
            </q-card>
         </transition>

         <!-- Terms & Privacy -->
         <div class="row justify-between items-center text-grey-5 text-caption">
            <q-btn flat :label="$t('termsofuse')" no-caps />
            <q-btn flat :label="$t('help')" no-caps />
            <q-btn flat :label="$t('privacy')" no-caps />
         </div>
      </div>
   </q-page>
</template>

<script>
import { defineAsyncComponent, computed, inject, ref, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default {
   setup() {
      const store = useStore()
      const auth = inject('auth')
      const authProviders = inject('providers')
      const view = ref('login')
      const method = ref('username-password')
      const localeOptions = [
         { label: 'English', value: 'en-US' },
         { label: 'Spanish', value: 'es-ES' },
      ]
      const locale = ref('en-US')

      const isAuthenticated = computed(() => store.getters['app/isAuthenticated'])

      watchEffect(isAuthenticated, (after, before) => {
         console.log('watch', 'isAuthenticated', after, before)
      })

      return {
         view,
         method,
         localeOptions,
         locale,

         onGoogle() {
            auth.signInWithRedirect(authProviders.google)
         },
      }
   },

   components: {
      SignInUsernamePassword: defineAsyncComponent(() =>
         import('components/SignInUsernamePassword')
      ),
      SignUpUsernamePassword: defineAsyncComponent(() =>
         import('components/SignUpUsernamePassword')
      ),
   },
}
</script>

<style></style>

SignInUsernamePassword
