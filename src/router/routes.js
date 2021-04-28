const routes = [
   {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
         { name: 'login', path: '', component: () => import('pages/Index.vue') },
         { name: 'home', path: 'home', component: () => import('pages/Home.vue') },
         { name: 'logout', path: 'logout', component: () => import('pages/Logout.vue') },
      ],
   },

   // Always leave this as last one,
   // but you can also remove it
   {
      path: '/:catchAll(.*)*',
      component: () => import('pages/Error404.vue'),
   },
]

export default routes
