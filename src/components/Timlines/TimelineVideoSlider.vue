<template>
    <div class="video-slider">

        <div class="video-slider-time">
            <p class="video-slider-start-stop">
                <v-icon
                        @click="toggle"
                        :color="startStopColor"
                        x-large
                >
                    {{startStopIcon}}
                </v-icon>
            </p>
            <p class="video-slider-current-time">
                {{currentDate}}
            </p>
            <p class="video-slider-time-stepper">
                /
            </p>
            <p class="video-slider-end-time">
                {{endDateComputed}}
            </p>
        </div>
        <div class="video-slider-slider">
            <v-slider
                    v-model="dateNum"
                    :color="color"
                    :track-color="trackColor"
                    :max="max"
                    always-dirty
            ></v-slider>
        </div>
    </div>
</template>

<script>
  import moment from "moment"

  export default {
    name: "TimelineVideoSlider",
    data() {
      return {
        dateNum: 0,
        playing: false,
        interval: null,
        lastDate: null
      }
    },

    props: {
      /**
       * speed of the video
       */
      speed: {
        type: Number,
        default: 500
      },
      /**
       *
       */
      step: {
        type: Number,
        default: 7
      },

      max: {
        type: Number,
        default: 730
      },

      startDate: {
        type: Object,
        default: () => new moment( '2018-01-01' )
      },

      endDate: {
        type: String,
        default: () => {
          const tmp = new moment( '2018-01-01' );
          return tmp.add( 730, 'd' ).format( 'D - M - Y' )
        }
      },
      dateFormat: {
        type: String,
        default: () => {
          return "D - M - Y"
        }
      },
      color: {
        type: String,
        default: "rgb(246,226,0)"
      },
      trackColor: {
        type: String,
        default: "rgb(39,29,0)"
      }
    },
    computed: {
      startStopIcon: function () {
        return this.playing ? 'pause_circle_outline' : 'play_circle_outline'
      },
      startStopColor: function () {
        return this.playing ? this.trackColor : this.color
      },
      currentDate: function () {
        const tmp = new moment( this.startDate ).add( this.dateNum, "days" );
        this.$emit( 'change', tmp );
        return tmp.format( this.dateFormat );
      },
      endDateComputed: function () {
        return this.endDate.format(this.dateFormat)
      }
    },
    methods: {
      play() {
        this.interval = setInterval( () => {
            this.dateNum += this.step;
            this.dateNum = Math.min( this.dateNum, this.max );

            if (this.dateNum === this.max)
              this.stop();
          }, this.speed
        )
      },
      stop() {
        clearInterval( this.interval )
      },
      toggle() {
        this.playing = !this.playing;
        if (this.playing)
          this.play();
        else
          this.stop();
      },
    }
  }
</script>

<style scoped>

    .video-slider {
        margin: 0;
        position: relative;
        left: 50%;
        width: 75%;
        transform: translateX(-50%);
    }

    .video-slider-time {
        display: flex;
        position: absolute;
        align-items: baseline;
        top: -60%;
        left: 0.5%;
    }

    .video-slider-time-stepper {
        color: rgba(0, 0, 0, 0.5);
    }

    .video-slider-current-time {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 0.3%;
        color: rgba(0, 0, 0, 0.5);
    }

    .video-slider-end-time {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 0.3%;
        color: rgba(0, 0, 0, 0.5);
    }

    .video-slider-start-stop {
        padding-bottom: 3%;
    }


    .video-slider-slider {

    }
</style>