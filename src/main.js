import Vue from 'vue'
import App from './App.vue'
import Vuelidate from './plugins/vuelidate'
import VueMask from './plugins/v-mask'

Vue.config.productionTip = false
Vue.use(VueMask)
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
