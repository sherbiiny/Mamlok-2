<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import $ from 'jquery'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {Navbar},

  mounted() {
  },
};
</script>

<style lang="scss">
@import './assets/style/conf';
</style>
