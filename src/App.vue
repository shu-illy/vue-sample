<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-app-bar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNav/>

    <v-main>
      <!-- <router-view/> -->
    </v-main>
  </v-app>
</template>

<script>
// import { mapActions } from 'vuex'
import SideNav from './components/SideNav'
export default {
  name: 'App',
  components: {
    SideNav
  },
  data: () => ({
    //
  }),
  methods: {
    openSideMenu() {
      this.$store.dispatch('toggleSideMenu')
    }
    // ...mapActions(['toggleSideMenu'])
  }
};
</script>
