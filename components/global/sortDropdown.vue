<!-- eslint-disable vue/require-prop-types -->
<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div class="text-center">
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn small outlined rounded v-bind="attrs" v-on="on">
          Order by
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" link>
          <v-list-item-title @click="selected(item.text)">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  // props: ['result'],
  data: () => ({
    items: [{ text: 'Name' }, { text: 'Date' }, { text: 'View' }],
    sortBy: '',
  }),
  methods: {
    selected(key) {
      this.sortBy = key
      console.log('Key: ', key)
    },
  },
  // data() {
  //   return {
  //     items: [{ text: 'Name' }, { text: 'Date' }, { text: 'View' }],
  //   }
  // },
}
</script>
