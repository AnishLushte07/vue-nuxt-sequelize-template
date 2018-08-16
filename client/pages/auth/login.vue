<template lang='pug'>
v-layout(flex='', align-center='', justify-center='')
  v-flex(xs12='', sm4='', elevation-6='')
    v-toolbar.pt-5.blue.darken-4
      v-toolbar-title.white--text
        h4 Welcome Back
    v-card
      v-card-text.pt-4
        div
          v-form(ref="form" v-model="valid" lazy-validation)
            v-text-field(
              label='Enter your e-mail address',
              v-model='form.email',
              :rules='form.emailRules',
              required='')
            v-text-field(
              label='Enter your password',
              v-model='form.password',
              min='8',
              :append-icon="e1 ? 'visibility' : 'visibility_off'",
              :append-icon-cb='() => (e1 = !e1)',
              :type="e1 ? 'password' : 'text'",
              :rules='form.passwordRules',
              counter='',
              required='')
            v-layout(justify-space-between='')
              v-btn(
                @click='submit',
                :disabled="!valid",
                :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }",
                ) Login
              a(href='') Forgot Password

</template>

<script>
import axios from 'axios'

export default {
  layout: 'login',
  data() {
    return {
      valid: false,
      e1: false,
      form: {
        error: '',
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
        ],
      },
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/auth/local', {
          email: this.form.email,
          password: this.form.password,
        })
      }
    },

    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>
