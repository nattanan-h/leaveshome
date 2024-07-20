<template>
  <div>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  async login() {
    try {
      await this.$auth.loginWith('google')
      this.$router.push('/')
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
