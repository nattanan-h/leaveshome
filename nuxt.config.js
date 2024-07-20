import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - leaveshome',
    title: 'leaveshome',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ {src: '~/plugins/firebase', ssr: false }],
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    // '@nuxtjs/firebase',
    // '@nuxtjs/auth-next',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/firebase'
  ],

  // auth: {
  //   strategies: {
  //     facebook: {
  //       endpoints: {
  //         userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
  //       },
  //       clientId: process.env.FACEBOOK_APP_ID,
  //       scope: ['public_profile', 'email']
  //     },
  //     google: {
  //       clientId: process.env.GOOGLE_CLIENT_ID,
  //       codeChallengeMethod: '',
  //       responseType: 'code',
  //       endpoints: {
  //         token: 'http://localhost:8000/user/google/', // somm backend url to resolve your auth with google and give you the token back
  //         userInfo: 'http://localhost:8000/auth/user/' // the endpoint to get the user info after you recived the token 
  //       },
  //     },
  //   }
  // },

  // firebase: {
  //   config: {
  //     apiKey: "AIzaSyCX2SXiy-GGxLES2S-Iit3ro_mX9qJSc84",
  //     authDomain: "leaveshome.firebaseapp.com",
  //     projectId: "leaveshome",
  //     storageBucket: "leaveshome.appspot.com",
  //     messagingSenderId: "33688321465",
  //     appId: "1:33688321465:web:a6d499cdfac6eccb9bca68",
  //     measurementId: "G-JRZ46DQL75"
  //   },
  //   // eslint-disable-next-line no-undef
  //   services: {
  //     // auth: true,
  //     auth: {
  //       persistence: 'local', // optional, defaults to 'session'
  //       ssr: false, // optional, defaults to false
  //       initialize: {
  //         onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
  //         onAuthStateChangedAction: 'onAuthStateChangedAction',
  //         subscribeManually: false
  //       },
  //     emulatorPort: process.env.NODE_ENV === 'development' ? 9099 : undefined,
  //     firestore: true,
  //     storage: true
  //     }
  //   }
  // },

  // firebase: {
  //   config: {
  //     apiKey: "AIzaSyCX2SXiy-GGxLES2S-Iit3ro_mX9qJSc84",
  //     authDomain: "leaveshome.firebaseapp.com",
  //     projectId: "leaveshome",
  //     storageBucket: "leaveshome.appspot.com",
  //     messagingSenderId: "33688321465",
  //     appId: "1:33688321465:web:a6d499cdfac6eccb9bca68",
  //     measurementId: "G-JRZ46DQL75"
  //   },
  //   services: {
  //     auth: true, // Enable Firebase Authentication
  //     firestore: true, // Enable Firestore
  //     // Add other Firebase services you need here
  //   },
  // },

  // auth: {
  //   strategies: {
  //     google: {
  //       clientId: process.env.GOOGLE_CLIENT_ID,
  //       userinfo_endpoint: 'https://openidconnect.googleapis.com/v1/userinfo',
  //       scope: ['openid', 'profile', 'email'],
  //       // redirect_uri: '<your-redirect-uri>',
  //       response_type: 'id_token token',
  //     }
  //   },
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
