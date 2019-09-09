<template>
    <div class="encart">
        <p class="text">
            Ce site utilise des cookies pour stocker des informations sur votre ordinateur.
            Consultez notre <a @click="redirectTo"> Charte
            d'utilisation des
            cookies
        </a>
            pour savoir comment fonctionnent les
            cookies et
            apprendre comment les bloquer.
        </p>
        <v-btn class="accept" @click="$emit('click')"> Accepter</v-btn>
    </div>
</template>

<script>
  export default {
    name: "EncartCookie",
    methods:{
      redirectTo(){
        this.$router.push('cookie_policy')
      }
    }
  }
</script>

<style scoped>
    p.text{
        color: #f0e5d8;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 75%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .encart {
        display: flex;
        background: rgba(61, 61, 61, 0.9);
        height: 5%;
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 2;
    }

    .accept {
        position: absolute;
        right: 5%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>