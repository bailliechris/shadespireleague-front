import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';

import CallIcon from 'vue-material-design-icons/Phone.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
 
//Add logo options
Vue.component('call-icon', CallIcon);
Vue.component('twitter-icon', Twitter);
Vue.component('facebook-icon', Facebook);

Vue.use(Vuex);
Vue.use(Buefy)

Vue.config.productionTip = false

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
    status_user (state) {
      state.user.status = 1;
    },
    status_admin(state) {
      state.user.status = 2;
    },
    status_logout(state) {
      state.user.status = 0;
    }
    // Change / update favourite fav_band?
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app');
