<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>ROCK THE CODE</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="goToHome">Home</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item v-if="!getState" size="sm" class="my-2 my-sm-0" @click="goToSignIn">Sign in</b-nav-item>
        <b-nav-item v-if="!getState" size="sm" class="my-2 my-sm-0" @click="goToLogIn">Log in</b-nav-item>

        <b-nav-item-dropdown right v-if="getState">
          <template v-slot:button-content v-if="getState">
            <em>{{ getUser.firstName + " " + getUser.lastName }}</em>
          </template>
          <b-dropdown-item @click="signOut">Sign out</b-dropdown-item>
          <b-dropdown-item @click="goToProfile">Profile</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import store from '../store'

export default {
  computed: {
    getState () {
      return this.$store.state.isLoggedIn
    },
    getUser () {
      return this.$store.state.user
    }
  },
  methods: {
    goToLogIn () {
      this.$router.push({ name: 'login' })
    },
    goToSignIn () {
      this.$router.push({ name: 'signin' })
    },
    goToHome () {
      this.$router.push({ name: 'home' })
    },
    signOut () {
      store.commit('setUserId', '')
      store.commit('setAuthorization', '')
      store.commit('setIsLoggedIn', false)
    },
    goToProfile () {
      this.$router.push({ name: 'profile' })
    }
  }
}
</script>
