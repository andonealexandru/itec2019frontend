<template>
  <div id="home">
    <b-row>
<b-col></b-col>
<b-col cols="10">
    <Categories /><b-dropdown id="dropdown-1" text="View" class="m-md-2">
    <b-dropdown-item @click="viewType=true">Grid</b-dropdown-item>
    <b-dropdown-item @click="viewType=false">List</b-dropdown-item>
  </b-dropdown>
    <div class="product_grid" v-if="!viewType">
      <b-card-group>
      <div v-for="product in products" :key="product.id" class="cards">
      <ListView
      :product="product"
      />
    </div>
  </b-card-group>
    </div>
    <div class="product_grid" v-if="viewType">
      <b-card-group>
      <div v-for="product in products" :key="product.id" class="cards">
      <CardView
      :product="product"
      />
    </div>
  </b-card-group>
    </div>
  <div>
    <Pages
      :page="page"
    />
  </div>
</b-col>
<b-col></b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable */
import CardView from '../components/CardViewCard'
import store from '../store'
import ListView from '../components/ListView'
import Categories from '../components/VerticalNav'
import Sort from '../components/Sort_list_grid_map'
import Pages from '../components/Pages'

export default {
  name: "home",
  components: {
    CardView,
    ListView,
    Categories,
    Sort,
    Pages
  },
  computed: {
    getViewType () {
      return this.$store.state.viewType
    }
  },
  methods: {
    changeViewType (s) {
      store.commit('setViewType', s);
    }
  },
  data () {
    return {
      viewType: true,
      page: 1,
      products: [
        {
          id: 2,
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },
        {
          id: 3,
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },{
          id: 4,
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },{
          id: 5,
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },{
          id: 6,
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        }
      ]
    }
  }
}
</script>

<style>
.cards {
  margin: auto;
  padding: 10px;
}
</style>
