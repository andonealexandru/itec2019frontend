<template>
    <mdb-jumbotron class="mb-0 text-center hoverable p-4">
    <mdb-row>
      <mdb-col md="4" offsetMd="1" class="m-3">
        <mdb-view src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="Sample image for first version of blog listing">
          <a><mdb-mask waves overlay="white-slight"/></a>
        </mdb-view>
      </mdb-col>
    <mdb-col md="7" class="text-md-left ml-3 mt-3">
        <br>
        <h4 class="h4 mb-4">{{product.name}}</h4>
        <p class="font-weight-normal">{{product.descripion}}</p><br>
        <p class="font-weight-normal">Price: {{ product.unitPrice }} RON / {{ product.unit }}</p>
        <p class="font-weight-normal">Category: {{subcategory.category}}</p>
        <p class="font-weight-normal">Subcategory: {{subcategory.name}}</p>
        <p class="font-weight-normal">Seller: <a><strong>{{user.firstName + " " + user.lastName}}</strong></a></p>
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
        <br>
        <div>
            <VueCardPayment></VueCardPayment>
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-jumbotron>
</template>
<script>
import { mdbJumbotron, mdbRow, mdbCol, mdbView, mdbMask } from 'mdbvue'
export default {
  name: 'JumbotronPage',
  components: {
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbRow,
    mdbCol
  },
  props: {
    product: {
      id: null,
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
      showModal: false,
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
