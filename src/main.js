import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from '@/components/demo-block.vue'
import Input from '@/views/mobile/Input'

import "./assets/style/normalize.css";

Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)
Vue.component('demo-Input', Input)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
