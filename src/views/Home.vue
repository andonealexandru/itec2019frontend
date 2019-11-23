<template>
  <div id="home">
  <b-card-group>
    <div v-for="product in products" :key="product" class="cards">
    <CardView
      :product="product"
    />
    </div>
  </b-card-group>
  </div>
</template>

<script>
/* eslint-disable */
import CardView from '../components/CardViewCard'

export default {
  name: "home",
  components: {
    CardView
  },
  data() {
    return {
      products: [
        {
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },
        {
          name: 'bjwkvn',
          description: 'bewj',
          userId: 'webjk',
          unit: 'kg',
          unitPrice: '10',
          availableUnits: '200',
          subcategoryId: '5'
        },
        {
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },
        {
          name: 'bjwkvn',
          description: 'bewj',
          userId: 'webjk',
          unit: 'kg',
          unitPrice: '10',
          availableUnits: '200',
          subcategoryId: '5'
        },
        {
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },
        {
          name: 'bjwkvn',
          description: 'bewj',
          userId: 'webjk',
          unit: 'kg',
          unitPrice: '10',
          availableUnits: '200',
          subcategoryId: '5'
        },
        {
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },
        {
          name: 'bjwkvn',
          description: 'bewj',
          userId: 'webjk',
          unit: 'kg',
          unitPrice: '10',
          availableUnits: '200',
          subcategoryId: '5'
        },
        {
          name: 'lkknsv',
          description: 'ldsvn',
          userId: 'vobdsjx ',
          unit: 'buc',
          unitPrice: '5',
          availableUnits: '100',
          subcategoryId: '5'
        },
        {
          name: 'bjwkvn',
          description: 'bewj',
          userId: 'webjk',
          unit: 'kg',
          unitPrice: '10',
          availableUnits: '200',
          subcategoryId: '5'
        }
      ]
    }
  }
}
</script>

<style>
.cards {
  margin: 10px;
}
</style>
