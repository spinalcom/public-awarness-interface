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
            <div class="icon-description">
                <v-icon dark color="rgb(54,91,171)">
                    play_circle_outline
                </v-icon>
                <p>
                    Cliquez sur play pour lancer la video
                </p>
            </div>

            <div class="icon-description">
                <v-icon dark color="rgb(54,91,171)">
                    pause_circle_outline
                </v-icon>
                <p>
                    Cliquez sur pause pour mettre la video en pause
                </p>
            </div>
            <p> Utilisez votre souris pour vous deplacer dans maquette</p>
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
        left: 70vw;
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
</style>