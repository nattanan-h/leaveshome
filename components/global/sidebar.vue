<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-navigation-drawer v-model="drawer" fixed temporary app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        class="my-3"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-text v-if="login" class="d-flex justify-end mx-5 out">LOG-OUT </v-text>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        // {
        //   icon: 'mdi-login',
        //   title: 'Log-in',
        //   to: { name: 'auth-login' },
        // },
        // {
        //   icon: 'mdi-newspaper-variant',
        //   title: 'News',
        //   to: { name: 'news' },
        // },
        // {
        //   icon: 'mdi-post',
        //   title: 'Blogs',
        //   to: { name: 'blogs' },
        // },
        // {
        //   icon: 'mdi-bookmark-box-multiple-outline',
        //   title: 'Collections',
        //   to: '/collections',
        // },
        // {
        //   icon: 'mdi-chat-outline ',
        //   title: 'Chatroom',
        //   to: '/chat',
        // },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire',
        // },
      ],
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.commit('set_drawer', value)
      },
    },
  },
}
</script>

<style>
.out {
  color: red;
  font-weight: bold;
}
.out:hover {
  color: white;
}
</style>
