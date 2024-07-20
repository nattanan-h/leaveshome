<template lang="">
  <div>
    <div>
      <h1>Blog</h1>
      <v-divider class="mb-5 mt-1" />
      <!-- <v-btn @click=newssearch> search </v-btn> -->
    </div>
    <div>
      <v-container class="bg-surface-variant">
        <v-row>
          <v-col>
            <v-card style="background-color: grey">
              <v-sheet id="blog" class="d-flex bg-surface-variant">
                <v-sheet id="blog" class="mt-2 ml-2 me-auto text-h4">
                  {{ content.title }}
                </v-sheet>
                <v-sheet id="blog" class="ma-2 pr-7">Date</v-sheet>
              </v-sheet>
              <v-divider color="black" />
              <v-card-text>Post by</v-card-text>
            </v-card>
            <div class="d-flex justify-center ma-3">
              <v-img :src="content.images.jpg.image_url" height="350" contain>
              </v-img>
            </div>
            <div>
              <p>{{ content.synopsis }}</p>
              <saveBtn
                style="
                   {
                    right: 0;
                    bottom: 0;
                    margin-bottom: 20px;
                    float: right;
                  }
                "
              ></saveBtn>
            </div>
          </v-col>
        </v-row>
        <div>
          <v-card style="background-color: grey">
            <v-sheet id="comment" class="d-flex bg-surface-variant">
              <v-sheet id="comment" class="mt-2 ml-2 me-auto"
                >Comment by</v-sheet
              >
              <v-sheet id="comment" class="ma-1 pr-7">Date</v-sheet>
            </v-sheet>
            <v-card-text>Text</v-card-text>
          </v-card>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import saveBtn from '../../components/global/button/saveBtn.vue'

export default {
  components: {
    saveBtn,
  },
  asyncData(ctx) {
    // eslint-disable-next-line no-console
    console.log('CTX ROUTE PARAMS:', ctx.route.params)
    const url = `https://api.jikan.moe/v4/anime/${ctx.route.params.blogid}`
    return axios.get(url).then((res) => {
      return {
        content: res.data.data,
      }
    })
  },
  data() {
    return {
      content: '',
    }
  },
  // async created() {
  //   console.log('Mounted')
  //   const url = `https://api.jikan.moe/v4/manga/${this.$route.params.newsid}`
  //   const res = await axios.get(url)
  //   this.content = res.data.data

  //   console.log('Data: ', this.content)
  //   console.log('News ID: ', this.$route.params.newsid)
  // },
}
</script>

<style>
/* h1 {
  background-color: gray;
} */
#blog,
#comment {
  background-color: grey;
}
</style>
