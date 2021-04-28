const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx) {
   return {
      supportTS: false,
      boot: ['i18n', 'axios', 'firebase'],

      css: ['app.sass'],

      extras: ['fontawesome-v5', 'roboto-font', 'material-icons'],

      build: {
         vueRouterMode: 'history',

         chainWebpack(/* chain */) {},
      },

      devServer: {
         https: false,
         port: 8080,
         open: true, // opens browser window automatically
      },

      framework: {
         config: {},

         plugins: ['LocalStorage', 'Notify'],
      },

      animations: ['backInLeft', 'backInRight', 'backOutLeft', 'backOutRight'],

      ssr: {
         pwa: false,
         prodPort: 3000, // The default port that the production server should use
         // (gets superseded if process.env.PORT is specified at runtime)

         maxAge: 1000 * 60 * 60 * 24 * 30,
         chainWebpackWebserver(/* chain */) {},

         middlewares: [
            ctx.prod ? 'compression' : '',
            'render', // keep this as last one
         ],
      },

      pwa: {
         workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
         workboxOptions: {}, // only for GenerateSW
         chainWebpackCustomSW(/* chain */) {},

         manifest: {
            name: `Quasar App`,
            short_name: `Quasar App`,
            description: `A Quasar Framework app`,
            display: 'standalone',
            orientation: 'portrait',
            background_color: '#ffffff',
            theme_color: '#027be3',
            icons: [
               {
                  src: 'icons/icon-128x128.png',
                  sizes: '128x128',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-256x256.png',
                  sizes: '256x256',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-384x384.png',
                  sizes: '384x384',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
               },
            ],
         },
      },

      cordova: {},

      capacitor: {
         hideSplashscreen: true,
      },

      electron: {
         bundler: 'packager', // 'packager' or 'builder'

         packager: {},

         builder: {
            appId: 'firebase-auth',
         },

         chainWebpackMain(/* chain */) {},

         chainWebpackPreload(/* chain */) {},
      },
   }
})
