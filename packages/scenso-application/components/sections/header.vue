<template>
  <header class="site-header" role="banner">
    <div class="site-header-int">
      <p class="site-title logo-desktop">
        <nuxt-link to="/">
          <img height="30" width="200" src="~/static/logos/logobeta.svg" alt="Scènso">
        </nuxt-link>
      </p>
      <p class="site-title logo-mobile">
        <nuxt-link to="/">
          <img height="40" width="40" src="~/static/logos/logomobilebeta.svg" alt="Scènso">
        </nuxt-link>
      </p>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/page-1/">
              Page 1
            </nuxt-link>
          </li>
          <!-- <li v-if="!isPremium"><nuxt-link to="/plans/">Abonnez vous</nuxt-link></li> -->
          <!-- <li v-if="isAuthenticated">
            <nuxt-link to="/account/">
              Mon compte
            </nuxt-link>
          </li>
          <li v-if="!isAuthenticated">
            <nuxt-link id="login" to="/auth/signin">
              Connectez-vous
            </nuxt-link>
          </li>
          <li v-if="isAuthenticated">
            <a id="logout" @click.stop.prevent="signOut">
              Déconnexion
            </a>
          </li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
// import { auth } from '~/services/fireinit.js'
export default {
  methods: {
    signOut() {
      // let that = this
      // auth.signOut().then(function() {
      //   console.log('Sign-out successful.')
      //   that.$store.commit('SET_USER', null)
      // }).catch(function(error) {
      //   console.log(error)
      //   // An error happened.
      // })
    }
  }
}
</script>
