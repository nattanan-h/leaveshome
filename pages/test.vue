<template lang="">
  <div>
    <addForm title="Add News" class="btn"></addForm>
    <addForm title="Add blog" blogTag="true" class="mt-5"></addForm>
  </div>
</template>

<script>
import addForm from '../components/global/addForm.vue'
export default {
  components: {
    addForm,
  },
  // methods: {
  //   popup(dialog) {
  //     dialog = true
  //   },
  // },
}
</script>

<style>
.btn {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 10% 5% 0;
}
</style>
