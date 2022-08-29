import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

import api from './api'

Vue.use(VueLazyload,{
    loading:""
    // loading:"https://fantuan.tv/template/mytheme/statics/img/load.png"
})
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
