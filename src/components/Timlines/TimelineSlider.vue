<template>
 <div>
   <v-slider
     :min="-100"
     :max="100"
     :always-dirty="true"
     color="rgba(216,216,216,1)"
     :thumb-label="thumbDate"
     thumb-color="rgba(255,237,0,1)"
     v-model="value"
   ></v-slider>
 </div>
</template>

<script>
export default {
  name: 'TimelineSlider',
  data() {
    return {
      value: 0,
      currentDate: new Date(),
    };
  },
  watch: {
    value(e){
      console.log(e);
    }
  },
  computed: {
    thumbDate() {
      return this.currentDate.getDay();
    },
    change(e){
      this.value = e;
    }
  },
};
</script>

<style scoped>

</style>
