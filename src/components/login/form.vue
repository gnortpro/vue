<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex class="text-xs-center" xs4>
        <div v-if="accessToken">Already login</div>
        <div v-if="loginError">
          <div class="display-1 mb-3">X3English Login</div>
          <v-card>
            <v-card-text>
              <v-form
                @submit.prevent="loginSubmit($data)"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-alert :value="true" v-if="loginError" type="error">{{loginError}}</v-alert>
                <p v-if="accessToken">Login Successful</p>
                <v-card-text subheading>Log in to X3English</v-card-text>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  name="email"
                  id="user_email"
                  prepend-icon="email"
                  type="email"
                ></v-text-field>
                <v-text-field
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  v-model="password"
                  name="password"
                  label="Password"
                  id="user_password"
                  prepend-icon="lock"
                  :type="show ? 'text' : 'password'"
                  :rules="[passwordRules.required, passwordRules.min]"
                  hint="At least 6 characters"
                  counter
                  @click:append="show = !show"
                ></v-text-field>
                <v-checkbox light label="Stay logged in?" hide-details></v-checkbox>
                <v-btn color="success" type="submit">Sign In</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      show: false,
      email: "",
      password: "",
      error: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: {
        required: v => !!v || "Password is required",
        min: v => v.length >= 6 || "Min 6 characters"
      }
    }
  },
  computed: {
    ...mapState(["loggingIn", "loginError", "accessToken"])
  },
  methods: {
    ...mapActions(["fetchLogin"]),
    loginSubmit(user) {
      this.fetchLogin(user)
    }
  }
}
</script>

<style>
</style>
