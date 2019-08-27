<template>
  <div v-if="!isActive" >
    <img class="background" v-if="day === 1" alt="icon"
         src="./slider-icon-png/1.png">

    <img class="background" v-if="day === 2" alt="icon"
         src="./slider-icon-png/2.png">

    <img class="background" v-if="day === 3" alt="icon"
         src="./slider-icon-png/3.png">

    <img class="background" v-if="day === 4" alt="icon"
         src="./slider-icon-png/4.png">

    <img class="background" v-if="day === 5" alt="icon"
         src="./slider-icon-png/5.png">

    <img class="background" v-if="day === 6" alt="icon"
         src="./slider-icon-png/6.png">

    <img class="background" v-if="day === 7" alt="icon"
         src="./slider-icon-png/7.png">

    <img class="background" v-if="day === 8" alt="icon"
         src="./slider-icon-png/8.png">

    <img class="background" v-if="day === 9" alt="icon"
         src="./slider-icon-png/9.png">

    <img class="background" v-if="day === 10" alt="icon"
         src="./slider-icon-png/10.png">

    <img class="background" v-if="day === 11" alt="icon"
         src="./slider-icon-png/11.png">

    <img class="background" v-if="day === 12" alt="icon"
         src="./slider-icon-png/12.png">

    <img class="background" v-if="day === 13" alt="icon"
         src="./slider-icon-png/13.png">

    <img class="background" v-if="day === 14" alt="icon"
         src="./slider-icon-png/14.png">

    <img class="background" v-if="day === 15" alt="icon"
         src="./slider-icon-png/15.png">

    <img class="background" v-if="day === 16" alt="icon"
         src="./slider-icon-png/16.png">

    <img class="background" v-if="day === 17" alt="icon"
         src="./slider-icon-png/17.png">

    <img class="background" v-if="day === 18" alt="icon"
         src="./slider-icon-png/18.png">

    <img class="background" v-if="day === 19" alt="icon"
         src="./slider-icon-png/19.png">

    <img class="background" v-if="day === 20" alt="icon"
         src="./slider-icon-png/20.png">

    <img class="background" v-if="day === 21" alt="icon"
         src="./slider-icon-png/21.png">

    <img class="background" v-if="day === 22" alt="icon"
         src="./slider-icon-png/22.png">

    <img class="background" v-if="day === 23" alt="icon"
         src="./slider-icon-png/23.png">

    <img class="background" v-if="day === 24" alt="icon"
         src="./slider-icon-png/24.png">

    <img class="background" v-if="day === 25" alt="icon"
         src="./slider-icon-png/25.png">

    <img class="background" v-if="day === 26" alt="icon"
         src="./slider-icon-png/26.png">

    <img class="background" v-if="day === 27" alt="icon"
         src="./slider-icon-png/27.png">

    <img class="background" v-if="day === 28" alt="icon"
         src="./slider-icon-png/28.png">

    <img class="background" v-if="day === 29" alt="icon"
         src="./slider-icon-png/29.png">

    <img class="background" v-if="day === 30" alt="icon"
         src="./slider-icon-png/30.png">

    <img class="background" v-if="day === 31" alt="icon"
         src="./slider-icon-png/31.png">
  </div>
  <div v-else >
    <img class="background" v-if="day === 1" alt="icon"
         src="./slider-icon-png/1-active.png">

    <img class="background" v-if="day === 2" alt="icon"
         src="./slider-icon-png/2-active.png">

    <img class="background" v-if="day === 3" alt="icon"
         src="./slider-icon-png/3-active.png">

    <img class="background" v-if="day === 4" alt="icon"
         src="./slider-icon-png/4-active.png">

    <img class="background" v-if="day === 5" alt="icon"
         src="./slider-icon-png/5-active.png">

    <img class="background" v-if="day === 6" alt="icon"
         src="./slider-icon-png/6-active.png">

    <img class="background" v-if="day === 7" alt="icon"
         src="./slider-icon-png/7-active.png">

    <img class="background" v-if="day === 8" alt="icon"
         src="./slider-icon-png/8-active.png">

    <img class="background" v-if="day === 9" alt="icon"
         src="./slider-icon-png/9-active.png">

    <img class="background" v-if="day === 10" alt="icon"
         src="./slider-icon-png/10-active.png">

    <img class="background" v-if="day === 11" alt="icon"
         src="./slider-icon-png/11-active.png">

    <img class="background" v-if="day === 12" alt="icon"
         src="./slider-icon-png/12-active.png">

    <img class="background" v-if="day === 13" alt="icon"
         src="./slider-icon-png/13-active.png">

    <img class="background" v-if="day === 14" alt="icon"
         src="./slider-icon-png/14-active.png">

    <img class="background" v-if="day === 15" alt="icon"
         src="./slider-icon-png/15-active.png">

    <img class="background" v-if="day === 16" alt="icon"
         src="./slider-icon-png/16-active.png">

    <img class="background" v-if="day === 17" alt="icon"
         src="./slider-icon-png/17-active.png">

    <img class="background" v-if="day === 18" alt="icon"
         src="./slider-icon-png/18-active.png">

    <img class="background" v-if="day === 19" alt="icon"
         src="./slider-icon-png/19-active.png">

    <img class="background" v-if="day === 20" alt="icon"
         src="./slider-icon-png/20-active.png">

    <img class="background" v-if="day === 21" alt="icon"
         src="./slider-icon-png/21-active.png">

    <img class="background" v-if="day === 22" alt="icon"
         src="./slider-icon-png/22-active.png">

    <img class="background" v-if="day === 23" alt="icon"
         src="./slider-icon-png/23-active.png">

    <img class="background" v-if="day === 24" alt="icon"
         src="./slider-icon-png/24-active.png">

    <img class="background" v-if="day === 25" alt="icon"
         src="./slider-icon-png/25-active.png">

    <img class="background" v-if="day === 26" alt="icon"
         src="./slider-icon-png/26-active.png">

    <img class="background" v-if="day === 27" alt="icon"
         src="./slider-icon-png/27-active.png">

    <img class="background" v-if="day === 28" alt="icon"
         src="./slider-icon-png/28-active.png">

    <img class="background" v-if="day === 29" alt="icon"
         src="./slider-icon-png/29-active.png">

    <img class="background" v-if="day === 30" alt="icon"
         src="./slider-icon-png/30-active.png">

    <img class="background" v-if="day === 31" alt="icon"
         src="./slider-icon-png/31-active.png">
  </div>
</template>

<script>
export default {
  name: 'TimeLineItem',
  props: {
    day: {type: Number},
    isActive: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    margin: 10px;
    text-align: center;
  }

  .background {
    width: 100%;
  }
  .active{
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .activeContainter {
    position: absolute;
    top: -23%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .day {
    position: absolute;
    top: -23%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
