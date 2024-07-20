<template lang="">
  <div>
    <v-container>
      <v-row align="center" justify="center" style="height: 75vh" dense>
        <v-col
          cols="12"
          lg="6"
          md="6"
          class="lighten-2 fill-height d-flex flex-column justify-center align-center"
        >
          <v-card  width="350" variant="outlined">
            <v-card-item class="form">
              <img rounded class="logo" src="~/assets/logo.png"></img>
            </v-card-item>

            <v-card-actions class="form">
                <v-btn class="btn" rounded @click="loginWithGoogle()">
                  <v-col>
                    <v-icon class="d-flex justify-start">mdi-google</v-icon> 
                  </v-col>
                  <v-col>
                    Log-in with Google 
                  </v-col>
                </v-btn>
            </v-card-actions>
            <v-card-actions class="form">
                <v-btn class="f-btn" rounded @click="loginWithFacebook()">
                  <v-col >
                    <v-icon class="d-flex justify-start">mdi-facebook</v-icon> 
                  </v-col>
                    Log-in with Facebook 
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from '~/plugins/firebase'

export default {
  data() {
    return {
      user: null,
    }
  },
  created() {
    // ตรวจสอบว่ามีผู้ใช้ล็อกอินอยู่หรือไม่
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user
        // eslint-disable-next-line no-console
        console.log('ผู้ใช้ล็อกอินแล้ว:', user)
      } else {
        // eslint-disable-next-line no-console
        console.log('ไม่มีผู้ใช้ล็อกอิน')
      }
    })
  },
  methods: {
    async loginWithGoogle() {
      try {
        const userCredential = await auth.signInWithPopup(googleAuthProvider)
        this.user = userCredential.user
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Google login error:', error)
      }
    },
    async loginWithFacebook() {
      try {
        // eslint-disable-next-line no-undef
        const result = await auth.signInWithPopup(facebookAuthProvider)
        console.log('User:', result.user)
      } catch (error) {
        console.error('Facebook login error', error)
      }
    },
    logout() {
      auth.signOut()
      this.user = null
      this.$router.push('/')
    },
  },
}
// export default {
//   data() {
//     return {
//       login: false
//     }
//   },
//   methods: {
//     gologin() {
//       // eslint-disable-next-line no-undef
//       login = true;
//     }
//   }
// }
</script>

<style>
/* .container {
  margin-top: 10%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
} */
.form {
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
}
.logo {
    max-width: 150px;
    max-height: 150px;
}
.btn {
  width: 18em;
  text-align: start;
}
.f-btn {
  width: 18em;
  text-align: start;
}
/* .f-btn:hover {
  color: blue;
} */
/* .icon{
  display: flex;
  justify-content: start;
  margin-right: 5px;
} */
</style>
