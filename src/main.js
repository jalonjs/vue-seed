import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  store,
  router,
  template: '<div><App/></div>',
  components: { App }
})
