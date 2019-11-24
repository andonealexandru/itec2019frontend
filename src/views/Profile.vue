<template>
  <b-list-group style="max-width: 50%; margin: auto; padding: 20px; text-align: left;">
  <b-list-group-item><b>First name:</b> {{ getUser.firstName }} </b-list-group-item>
  <b-list-group-item><b>Last name:</b> {{ getUser.lastName }} </b-list-group-item>
  <b-list-group-item><b>Email:</b> {{ getUser.email }} </b-list-group-item>
  <b-list-group-item><b>Phone:</b> {{ getUser.phone }} </b-list-group-item>
  <b-list-group-item><b>City:</b> {{ getUser.city }} </b-list-group-item>
  <b-list-group-item><b>Address:</b> {{ getUser.address }} </b-list-group-item>
  <b-list-group-item><b>Building:</b> {{ getUser.building }} </b-list-group-item>
  <b-list-group-item><b>Postal code:</b> {{ getUser.postalCode }} </b-list-group-item>
</b-list-group>
</template>

<script>
/* eslint-disable */
import store from '../store'

export default {
  name: "profile",
  computed: {
    getUser () {
      return this.$store.state.user
    }
  }
}
</script>

