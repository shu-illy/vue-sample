<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title class="headline text-uppercase">
      <span>マイアドレス帳</span>
    </v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <!-- <router-view/> -->
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
