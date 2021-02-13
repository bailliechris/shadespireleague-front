<template>
  <section class="hero is-white">
    <div class="container">
      <div class="hero-body">
        <div class="tile is-ancestor">
          <div class="tile is-2 is-vertical is-parent">
            <div class="tile is-child">
              <span class="container has-text-centered">
                <img alt="Underworlds Logo" src="../assets/WHUlogo.jpg" width="300">
                <div v-if="user.status">
                  <button class="button is-white" @click="logout">Logout</button>
                </div>
                <div v-else-if="!user.status">
                 <Modals :title="title" :body="body" />
                </div>     
              </span>
            </div>
          </div>

          <div class="tile is-vertical is-parent">
            <div class="tile is-child">
              <h1 class="title">
                Shadespire League and Tracker
              </h1>
              <h2 class="subtitle">
                <call-icon /> 0115 900 4151
                <facebook-icon /> Shadespire
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Modals from './Modals.vue'
import cookie from 'js-cookie'
import {mapState} from 'vuex'

export default {
  name: 'Header',
  components: {
    Modals
  },
  data() {
    return {
      title: "Logon Page",
      body: "Please enter your details",
      loggedin: false,
      auth: 0
    }
  },
  methods: {
    logout: function() {
      cookie.remove('auth');
 //     this.loggedin = false;
      this.$store.commit('status_logout');
    }
  },
  computed: {
      ...mapState(['user'])
  }
}
</script>

<style>

</style>
