<template lang="">
  <div>
    <v-dialog v-model="dialog" persistent width="500">
      <template #activator="{ on }">
        <v-btn color="primary" v-bind="on" fab @click="popup">
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"> {{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="info.title"
                  label="Title"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row v-if="blogTag">
              <v-col>
                <v-autocomplete
                  v-model="info.tag"
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="info.content"
                  label="Content"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <!-- <v-input
                  v-model="info.url"
                  type="file"
                  @change="onFileChange"
                  /> -->
                <v-file-input
                  v-model="info.image"
                  label="File input"
                  variant="underlined"
                  multiple
                  chips
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="submitForm(info)">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="submitForm(info)">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<!-- <template>
  <div>
    <v-form v-model="valid">
        <v-text-field
          v-if="hasName"
          v-model="userInfo.name"
          label="Name"
          :rules="[required('name')]"
        />

        <v-text-field
          v-model="userInfo.email"
          label="Email"
          :rules="[required('email'), emailFormat()]"
        />

        <v-text-field
          v-model="userInfo.password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          counter="true"
          :rules="[required('password'), minLength('password', 8)]"
          @click:append="showPassword = !showPassword"
        />

        <v-btn :disabled="!valid" @click="submitForm(userInfo)">{{
          buttonText
        }}</v-btn>
      </v-form>
    </div>
</template> -->

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'blogTag'],
  data() {
    return {
      dialog: false,
      valid: false,
      info: {
        title: '',
        tag: '',
        content: '',
        image: '',
      },
    }
  },
  methods: {
    // onFileChange(e) {
    //   const file = e.target.files[0]
    //   this.url = URL.createObjectURL(file)
    // },
    popup() {
      // eslint-disable-next-line eqeqeq
      if (this.dialog == false) {
        this.dialog = true
      } else {
        this.dialog = false
      }
      console.log('Dialog', this.dialog)
    },
    submitForm(info) {
      // eslint-disable-next-line eqeqeq
      if (this.dialog == false) {
        this.dialog = true
      } else {
        this.dialog = false
      }
      console.log('Dialog', this.dialog)
    },
  },
}
</script>
<style lang=""></style>
