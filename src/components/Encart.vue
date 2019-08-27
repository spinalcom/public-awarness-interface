<template>
    <div class="encart">
        <p>
            Ce site internet necessite l'utilisation de cookie pour son bon
            fonctionnement
        </p>
        <v-btn class="accept" @click="$emit('click')"> Accepter</v-btn>
    </div>
</template>

<script>
  export default {
    name: "Encart"
  }
</script>

<style scoped>
.encart{
    display: flex;
    background: rgba(61,61,61,0.9);
    height: 5%;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
}
</style>