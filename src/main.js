import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
//import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Buefy)

// Create Vuex Store for users
const store = new Vuex.Store({
  state: {
    user: {
      name: "",
      status: 0,
      fav_band: ""
    }
  },
  mutations: {
    change_status (state) {
      state.user.status++
    }
    // Change / update favourite fav_band?
  }
})

new Vue({
  el: '#app',
  store
})