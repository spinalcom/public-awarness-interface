<template>
  <v-app id="app">
    <div v-if="!cookieAccepted">
      <encart-cookie @click="acceptCookies"/>
    </div>

    <router-view/>

  </v-app>
</template>

<style>
  #app{
    position: relative;
  }
</style>
<script>
  import EncartCookie from "./components/EncartCookie";
  export default {
    components: { EncartCookie },
    data(){
      return {
        cookieAccepted: false
      }
    },
    methods:{
      acceptCookies(){
        window.$cookies.set('cookiesAccepted', "ok", null, '/');
        this.cookieAccepted = true;
      }
    },
    mounted(){
      if (window.$cookies.get('cookiesAccepted'))
        this.cookieAccepted = true
    }
  }
</script>

<style>
  #app{
    overflow: hidden
  }
  html{
    overflow: hidden
  }
</style>