<template>
  <div class="card"
  >
    <div class="body">
      <p>
        Bienvenue sur le site de visualisation du démantèlement de la
        raffinerie de Dunkerque
      </p>
      <p>
        Afin de visualiser l'avancement du démantèlement veuillez compléter le
        formulaire suivant
      </p>
    </div>
    <div class="footer">

        <v-btn  @click="$emit('leave')"> Quitter</v-btn>
        <v-btn
               color="rgba(254,235,52,1)"
               @click="$emit('agreed')"> Visualiser</v-btn>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RequestUserInformation',
  };
</script>

<style scoped>
  .card{
    width: 75%;
    height: 100%;
    background: rgba(216,216,216,100);
    border-radius: 1%;
    box-shadow: 5px 5px 6px 0 rgba(0,0,0,0.5);
    border: 1px solid rgba(0,0,0,0.50);
    padding: 3%;
    position: relative;
  }

  .footer{
    position: absolute;
    padding-bottom: 5%;
    bottom: 0;
    left: 60%;
  }

  .body{
    position: absolute;
    top: 20%;
    left: 25%;
    width: 50%;
  }
</style>
