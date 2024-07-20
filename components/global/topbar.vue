<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="toggledrawer" />
    <v-toolbar-title>
      <router-link style="text-decoration: none; color: white" to="/">
        {{ name }}
      </router-link>
      <v-icon large color="green" class="ml-2"> mdi-leaf </v-icon>
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      name: 'LeavesHome',
    }
  },
  methods: {
    toggledrawer() {
      this.$store.commit('set_drawer', !this.$store.state.drawer)
    },
  },
}
</script>

<style></style>
