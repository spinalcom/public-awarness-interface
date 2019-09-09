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
                <v-icon dark>
                    play_circle_outline
                </v-icon>
                <p>
                    Cliquez sur ce bouton pour lancer la video
                </p>
            </div>

            <div class="icon-description">
                <v-icon dark>
                    pause_circle_outline
                </v-icon>
                <p>
                    Cliquez sur ce bouton pour mettre la video en pause
                </p>
            </div>
            <div class="icon-description">
                <img alt="icon cursor rotation"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAt1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAzMzP6+vri4uISEhKKioqtra2dnZ2EhIR9fX10dHRkZGQdHR3t7e3Hx8e5ubm1tbWoqKhWVlZKSko4ODgICAjv7+/o6OjMzMyxsbFOTk4pKSkXFxcEBAT29vbW1tZ6enpISEgLCwvhzeX+AAAAGXRSTlMANRO0nHRJHfnskIxQRKh89syDVwTWZjEJxPFEswAAAOFJREFUKM+1j+lygkAQhIflEAJe0Rw9u4CCeKKoSTTX+z9XoMJWWeX+ssrvZ3f19DQ5zOw/0DUMQPlmQ72bE2adBp8/Rp3CQUi3ILx+bxj4fjDs9T1Bmo6bbPPN8aDU4bjJt4nb+de789kSFyxn826jW3ICLNZZKU8nWWbrBTCRVm04U8TpjquRFf1Go0d7l8aYOrUR7FGEFr1S9LGymwthgX2gE/Kl0cHPOtF2xOWZ5QpIC93RflW4InkDoPRXesd5LJIMQPzV7tCMa7f6BvhJL79AVDmYTNQ1NhnxbI/uwB8H5Bjd4zQPBAAAAABJRU5ErkJggg=="/>
                <p>
                    Cliquez sur la carte pour la faire tourner
                </p>
            </div>

            <div class="icon-description">
                <img alt="icon cursor translation"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABHVBMVEUAAABPTk4AAAAAAAAJCQkRERE0MzQQEBAODg4QEBB4d3dbWlo9PDw/Pj4vLy8sLCwZGBgWFhYcHBwKCgoSEhIAAAAKCgoICAgKCgoQEBAODg4EBAQICAgPDw8REREMDAx2dnY0NDQvLy9QUFAaGhomJSYjIyM7OjokJCQNDA0mJiYNDQ0AAAAUFBQJCQkQEBAEBAQNDQ0PDw8VFRX///+amJkAAAD5+fnz8/PKycn9/f339vbi4eLR0dDNzMyAgIB8e3xycHH7+/vw7+/o6OjX1ta7urq4t7iwsLCnp6eioqKbmppva21OTk74+Pjl5eXc3Nzb29vLy8vDw8PDwsKrqqqdnZ2WlpaSkpKTkZKMiouEg4NkZGRISEgxLzBpgbsEAAAANHRSTlMA+fiQXgngKSYG/vX17uvBuqackpCNg3BpUkpAPBwTDvj18+vl0s/NwrOwoZZ+TDg4NBkBGrzX8QAAAP5JREFUKM99j9Vuw0AQRdeuKZyGkyZNmbnXDLHDVGb8/8/oy7paK1bO0+oc7WiGnGiaxq+QRTQAOh8f9Jv4H/Ge8PZPrCdlvkxfYluUT2WyyCq3mZ7unwlKVLcqOzA/Mf71j0TWJ/Ym6rPeca05Ni4iIevYc7yoUD2zQFhq71BdI9nvBeBabFDSPe8DswlUc1Riw3VxbH0NHBUPQ0jrbDnPYDjALQBMq9E7nkC5y7VDKTZlUg8Q0lmjvl74zlYErgvKa42GPKf3/a0kQmYCDY1SYMDosqMoiWrGwz/uAbNvc/fNon4kXRKGq+PUo2Mb96afV0iUxqGU2s4VBbKUP65NL/LKF+7ZAAAAAElFTkSuQmCC"/>
                <p>
                    Cliquez sur la carte pour la faire se deplacer
                </p>
            </div>
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