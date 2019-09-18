<template>
    <div class="encart-tuto" v-if="display">
        <div class="header">
            <v-btn dark  icon class="close-icon" @click="display = false">
                <v-icon >
                    close
                </v-icon>
            </v-btn>

        </div>
        <div class="body">
            <p class="warning-text">
                Afin de profiter pleinement de la vidéo, il est préférable
                d'attendre l'affichage complet des couleurs
            </p>
            <div class="icon-description">
                <v-icon dark color="rgb(54,91,171)">
                    play_circle_outline
                </v-icon>
                <p>
                    Cliquez sur play pour lancer la vidéo
                </p>
            </div>

            <div class="icon-description">
                <v-icon dark color="rgb(54,91,171)">
                    pause_circle_outline
                </v-icon>
                <p>
                    Cliquez sur pause pour arrêter la vidéo
                </p>
            </div>
            <div class="icon-description">
                <v-icon dark color="rgb(54,91,171)">
                    replay
                </v-icon>
                <p>
                    Cliquez sur rejouer pour relancer la vidéo
                </p>
            </div>

            <p> Utilisez votre souris pour vous déplacer/zoomer dans la
                maquette</p>
        </div>

    </div>
</template>

<script>
  export default {
    name: "EncartTuto",
    data(){
      return {
        display: true
      }
    }
  }
</script>

<style scoped>
    .encart-tuto {
        position: relative;
        z-index: 1;
        background: rgba(34,34,34,0.94);
        box-shadow: 1px 3px 10px 0 rgba(0,0,0,.5);
        padding: 10px;
        width: 30%;
        border-radius: 8px;
        max-width: 360px;
        transform: translateY(15vh);
    }
    .header{
        position: relative;
        padding-bottom: 30px;
    }
    .body{
        position: relative;
    }

    .icon-description {
        display: flex;
        align-items: end;
    }

    .close-icon{
        position: absolute;
        right: 0;
    }
    p{
        padding-left: 5px;
        color: #f4f4f4;
    }
    .warning-text{
        position: relative;
    }
</style>