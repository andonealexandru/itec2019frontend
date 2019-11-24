<template>
  <b-card
    :title="product.name"
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

  <b-button v-b-modal.modal-multi-1>Check</b-button>
  <b-modal id="modal-multi-1" size="lg" title="Check" ok-only no-stacking>
    <p class="my-4">Seller details:</p>
          <ul style="margin: 20px">
              <li>
              First name: {{user.firstName}}
              </li>
              <li>
              Last name: {{user.lastName}}
              </li>
              <li>
              Email: {{user.email}}
              </li>
              <li>
              Phone: {{user.phone}}
              </li>
              <li>
              City: {{user.city}}
              </li>
              <li>
              Address: {{user.address}}
              </li>
          </ul>
    <p class="my-4">Product details:</p>
          <ul style="margin: 20px">
              <li>
              Category: {{subcategory.category}}
              </li>
              <li>
              Subategory: {{subcategory.name}}
              </li>
          </ul>
    <b-button v-b-modal.modal-multi-2>Buy herel</b-button>
  </b-modal>
  <b-modal id="modal-multi-2" title="Buy here" ok-only>
    <br>
    <div>
      <VueCardPayment></VueCardPayment>
    </div>
  </b-modal>
</b-card>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    product: {
        name: '',
        description: '',
        userId: '',
        unit: '',
        unitPrice: '',
        availableUnits: '',
        subcategoryId: ''
      }
  },
  data () {
    return {
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
