<template>
   <q-layout view="lHh Lpr lFf">
      <q-header elevated v-if="isAuthenticated">
         <q-toolbar>
            <q-btn
               flat
               dense
               round
               icon="menu"
               aria-label="Menu"
               @click="toggleLeftDrawer"
            />

            <q-toolbar-title> Quasar App </q-toolbar-title>

            <div>Quasar v{{ $q.version }}</div>
         </q-toolbar>
      </q-header>

      <q-drawer
         v-if="isAuthenticated"
         v-model="leftDrawerOpen"
         show-if-above
         bordered
         class="bg-grey-1"
      >
         <q-list>
            <q-item-label header class="text-grey-8"> Essential Links </q-item-label>
         </q-list>
      </q-drawer>

      <q-page-container>
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { LocalStorage } from 'quasar'

export default {
   name: 'MainLayout',

   setup() {
      const store = useStore()
      const leftDrawerOpen = ref(false)

      const isAuthenticated = computed(() => {
         return store.getters['app/isAuthenticated']
      })

      const toggleLeftDrawer = () => {
         leftDrawerOpen.value = !leftDrawerOpen.value
      }

      return {
         isAuthenticated,
         leftDrawerOpen,
         toggleLeftDrawer,
      }
   },
}
</script>
