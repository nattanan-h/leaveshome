<template>
  <v-app dark>
    <sidebar />
    <topbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <footbar />
  </v-app>
</template>
<script>
import sidebar from '../components/global/sidebar.vue'
import topbar from '../components/global/topbar.vue'
import footbar from '../components/global/footbar.vue'
export default {
  components: {
    sidebar,
    topbar,
    footbar,
  },
}
</script>
