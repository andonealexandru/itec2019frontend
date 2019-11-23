<template>
  <div>
    <b-card
      :title="name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
    <b-card-text>
      Price: {{ product.unitPrice }} RON / {{ product.unit }}
      Description: {{ product.description }}
    </b-card-text>

    <b-button href="#" variant="primary">See more</b-button>
  </b-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      product: {
        name: '',
        description: '',
        userId: '',
        unit: '',
        unitPrice: '',
        availableUnits: '',
        subcategoryId: ''
      },
      subcategory: {
        category: '',
        name: ''
      },
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        building: '',
        postalCode: '',
        type: ''
      }
    }
  }
}
</script>
