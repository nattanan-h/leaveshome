<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div>
    <div>
      <h1>All News</h1>
      <v-divider class="mb-5 mt-1" />
      <!-- <v-btn @click=newssearch> search </v-btn> -->
    </div>
    <div class="d-flex flex-wrap justify-center">
      <v-col cols="12" md="9">
        <v-text-field
          v-model="query"
          label="Search"
          append-icon="mdi-magnify"
          outlined
          rounded
          dense
          solo
          @click:append="newssearch"
          @keyup.enter="newssearch"
        />
      </v-col>
    </div>
    <div class="d-flex flex-wrap justify-end me-10 mb-2">
      <sortdropdown></sortdropdown>
    </div>
    <h3 v-if="search && empty" class="d-flex flex-wrap justify-center">
      Not Found
    </h3>
    <div class="d-flex flex-wrap justify-center">
      <v-card
        v-for="items in results"
        :key="items.mal_id"
        class="ma-2"
        max-width="350"
        outlined
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
import sortdropdown from '../../components/global/sortDropdown.vue'

export default {
  components: {
    sortdropdown,
  },
  // ***************************use async******************************
  asyncData(ctx) {
    // eslint-disable-next-line no-console
    console.log('CTX ROUTE QUERY:', ctx.route.query)
    const url = `https://api.jikan.moe/v4/manga?search=${ctx.route.query.search}`
    return axios.get(url).then((res) => {
      return {
        query: ctx.route.query.search,
        results: res.data.data,
      }
    })
  },
  data() {
    return {
      query: '',
      results: [],
      show: false,
      search: false,
      // check data is zero
      empty: false,
      // items: ['View', 'Name', 'Date'],
      // sortlist: [{ text: 'Name' }, { text: 'Date' }, { text: 'View' }],
    }
  },
  // async fetch() {
  //   // https://api.jikan.moe/v4/manga?q=${this.query}
  //   const url = `https://api.jikan.moe/v4/manga?q=${this.$route.query}`
  //   if (this.$route.query) {
  //     const response = await axios.get(url)
  //     this.results = response.data.data
  //   }
  // },
  mounted() {
    // eslint-disable-next-line no-console
    // console.error('Route:', this.$route.name)
    // console.error('Response:', this.results)
    // console.log(this.results)
  },
  methods: {
    // newssearch() {
    //   // this.$rounter.replace({ name: 'news', query: { q: this.query } })
    //   const url = `https://api.jikan.moe/v4/manga?q=${this.query}`
    //   // eslint-disable-next-line no-console
    //   console.log('URL:', url)
    //   axios.get(url).then((res) => {
    //     this.results = res.data.data
    //     console.log(this.results)
    //   })
    // },
    async newssearch() {
      this.$router.replace({ name: 'news', query: { search: this.query } })
      const url = `https://api.jikan.moe/v4/manga?q=${this.query}`
      const res = await axios.get(url)
      this.results = res.data.data
      this.search = true
      if (this.results.length === 0) {
        this.empty = true
      } else {
        this.empty = false
      }
      // eslint-disable-next-line no-console
      console.log('Search: ', this.search)
      // eslint-disable-next-line no-console
      console.log('Empty: ', this.empty)
      // eslint-disable-next-line no-console
      console.log(this.results.length)
      console.log('Result: ', this.results)
    },
    gotolink(item) {
      // window.open(item.url)
      this.$router.push({ path: `news/${item.mal_id}` })
      // this.$router.push({ name: 'news', params: { newsid: 'item.mal_id' } })
      console.error(item.mal_id)
    },
  },
}
</script>
<style lang=""></style>
