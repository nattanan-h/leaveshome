<template>
  <div class="container">
    <div>
      <h1>Collections</h1>
      <v-divider class="mb-5" />
    </div>
    <div>
      <h2 class="ml-5 mb-3">News</h2>
    </div>
    <div class="d-flex flex-wrap justify-start">
      <v-card
        v-for="items in collect.slice(0 - 5)"
        :key="items.mal_id"
        class="ma-2"
        max-width="350"
        outlined
        v
      >
        <div @click="gotolink(items)">
          <v-img
            :src="items.images.jpg.image_url"
            height="300px"
            width="350px"
          />

          <v-card-title> {{ items.title }} </v-card-title>
        </div>

        <v-card-actions>
          <v-btn color="orange lighten-2" text> Explore </v-btn>

          <v-spacer />

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-card-text>
              {{ items.synopsis }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
    <v-divider class="my-5"></v-divider>
    <div>
      <h2 class="ml-5 mb-3">Blogs</h2>
    </div>
    <div class="d-flex flex-wrap justify-start">
      <v-card
        v-for="items in collect.slice(0 - 5)"
        :key="items.mal_id"
        class="ma-2"
        max-width="350"
        outlined
        v
      >
        <div @click="gotolink(items)">
          <v-img
            :src="items.images.jpg.image_url"
            height="300px"
            width="350px"
          />

          <v-card-title> {{ items.title }} </v-card-title>
        </div>

        <v-card-actions>
          <v-btn color="orange lighten-2" text> Explore </v-btn>

          <v-spacer />

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-card-text>
              {{ items.synopsis }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData(ctx) {
    // eslint-disable-next-line no-console
    console.log('CTX ROUTE QUERY:', ctx.route.query)
    const url = `https://api.jikan.moe/v4/manga?collected=/${ctx.route.query.collected}`
    return axios.get(url).then((res) => {
      return {
        collect: res.data.data,
      }
    })
  },
  data() {
    return {
      collect: {},
    }
  },
}
</script>

<style scoped></style>
