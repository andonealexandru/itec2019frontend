<template>
<div class='middle'>
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
    <b-button @click="decrement()">&lsaquo;</b-button>
      <b-button>{{page}}</b-button>
    <b-button @click="increment()">&rsaquo;</b-button>
    </b-button-toolbar>
</div>
</template>

<script>
export default {
  props: {
    page: null
  },
  methods: {
    increment () {
      this.page++
    },
    decrement () {
      if (this.page > 1) {
        this.page--
      }
    }
  }
}
</script>

<style>
.middle{
    margin-left: 627px;
    margin-right: 100px;
}
</style>
