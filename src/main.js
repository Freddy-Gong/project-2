import Vue from 'vue'
import Button from './Button.vue'

Vue.component('g-button', Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(Button),
}).$mount('#app')
