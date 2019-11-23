<template>
    <div>
        <b-card class='card' img-src="https://placekitten.com/300/300" img-alt="Card image" img-left>
            <b-card-text style="text-align: left">
            Category: {{subcategory.category}}<br/>
            Subcategory: {{subcategory.name}}<br/>
            Price: {{ product.unitPrice }} RON / {{ product.unit }} <br/>
            Description: {{ product.description }}<br/>
            Seller: {{user.firstName + " " + user.lastName}}<br/>
            Seller details:
                <ul style="margin: 20px">
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
            </b-card-text>
            <div>
                <b-button v-b-modal.modal-1>Buy now</b-button>
                <b-modal id="modal-1" title={{ product.name }}>
                <p class="my-4">Hello from modal!</p>
                </b-modal>
            </div>
        </b-card>
    </div>
</template>

<style>
    .card{
        margin-right: 50px;
        margin-left: 50px;
        margin-bottom: 10px;
    }
</style>>
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
