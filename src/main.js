import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCardPayment from 'vue-card-payment'
import 'vue-card-payment/dist/vue-card-payment.css'
Vue.use(BootstrapVue)
Vue.use(VueCardPayment)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
