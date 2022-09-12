import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store/index'

import api from './api'

Vue.use(VueLazyload,{
    loading:require('./assets/img/123456.png')
    // loading:"https://fantuan.tv/template/mytheme/statics/img/load.png"
})
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
