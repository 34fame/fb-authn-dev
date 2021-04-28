import { boot } from 'quasar/wrappers'
import { LocalStorage } from 'quasar'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: 'AIzaSyAOuSlV-5jIxPtPTs_VOY553PtTMTmxc2I',
   authDomain: 'fb-authn-dev.firebaseapp.com',
   projectId: 'fb-authn-dev',
   storageBucket: 'fb-authn-dev.appspot.com',
   messagingSenderId: '976174163685',
   appId: '1:976174163685:web:e325b6cd10be768831560c',
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      LocalStorage.set('user', {
         displayName: user.displayName,
         email: user.email,
         id: user.uid,
         picture: user.photoURL,
      })
   }
})

export default boot(({ app }) => {
   app.provide('auth', firebase.auth())
   app.provide('providers', {
      google: new firebase.auth.GoogleAuthProvider(),
   })
   app.provide('firestore', firebase.firestore())
})
