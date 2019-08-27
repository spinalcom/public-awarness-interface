<template>
  <div class="timeLine ">
    <div class="line"></div>
    <transition-group name="list" tag="div" class="list">
      <div class="item" v-for="(day, index) in days" :key="'i'+ index" @click="()=> {onDaySelected(index)}">
        <TimeLineItem :day="day.date()" :is-active="index + 1 === activeDay"></TimeLineItem>
      </div>
    </transition-group>
    <!--<div class="stepper">
      <div class="month" @click="changeMonth(selectedDay.month() === 0 ? 1 : selectedDay.month())">
        <TimeLineItem  :day="selectedDay.month() === 0 ? 1 : selectedDay.month()"  :is-active="false"></TimeLineItem>
      </div>
      <div class="month"  >
        <TimeLineItem  :day="selectedDay.month() + 1" :is-active="false"></TimeLineItem>
      </div>
      <div class="month" @click="changeMonth((selectedDay.month() + 2) % 12)">
        <TimeLineItem  :day="(selectedDay.month() + 2) % 12" :is-active="false"></TimeLineItem>
      </div>
    </div>-->

  </div>
</template>
<script>
import TimeLineItem from './TimeLineItem.vue'
import moment from 'moment'

export default {
  name: 'HorizontalDatePicker',
  components: {TimeLineItem},
  props: {
    nbItem: {
      type: Number,
      default () {
        return 15
      }
    }
  },
  data () {
    return {
      capacity: this.nbItem * 2,
      range: {
        start: this.nbItem / 2,
        end: this.nbItem + (this.nbItem / 2)
      },
      selectedDay: moment().startOf('year'),
      activeDay: Math.round(this.nbItem / 2),
      days: []
    }
  },
  computed: {
    prevMonth () {
      return (this.selectedDay.month()) % 12
    },
    currentMonth () {
      return (this.selectedDay.month() + 1) % 12
    },
    nextMonth () {
      return (this.selectedDay.month() + 2) % 12
    }
  },
  methods: {
    changeMonth (month) {
      if (month > this.selectedDay.month()) { this.selectedDay.add(1, 'month') } else { this.selectedDay.subtract(1, 'month') }
      this.init()
    },
    init () {
      this.days = [this.selectedDay]
      for (let i = 1; i < this.nbItem / 2; i++) {
        const tmpSub = moment(this.selectedDay)
        const tmpAdd = moment(this.selectedDay)
        this.days.unshift(tmpSub.subtract(i, 'days'))
        this.days.push(tmpAdd.add(i, 'days'))
      }
    },
    onDaySelected (index) {
      let delta = this.activeDay - index - 1
      if (delta > 0) {
        let firstDay = moment(this.selectedDay).subtract(this.activeDay, 'days')
        for (let i = Math.abs(delta); i > 0; i--) {
          let tmp = moment(firstDay).subtract(Math.abs(delta) - i, 'days')
          this.days.unshift(tmp)
          this.days.pop()
        }
      } else if (delta < 0) {
        let lastDay = moment(this.selectedDay).add(this.activeDay, 'days')
        for (let i = Math.abs(delta); i > 0; i--) {
          let tmp = moment(lastDay).add(Math.abs(delta) - i, 'days')
          this.days.push(tmp)
          this.days.splice(0, 1)
        }
      }
      this.selectedDay.subtract(delta, 'days')
      this.$emit('change', this.selectedDay)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style scoped>

  .line {
    border: gray 1px solid;
    position: absolute;
    top: 45%;
    width: 100%;
    z-index: 1;
  }

  .timeLine {
    white-space: nowrap;
    overflow: auto;
    position: relative;
  }

  .stepper {
    display: flex;
    position: absolute;
    top: 76%;
    left: 43.25%;
    justify-content: center;
    align-items: center;
    height: 20px;
    z-index: 12;
  }

  .item {
    display: inline-block;
    z-index: 2;
    padding: 10px;
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .month {
    padding: 10px;
  }

  .act {
    display: inline-block;
  }

  .active {
    display: inline-block;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .list-enter-active, .list-leave-active {
    transition: all 500ms;
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(15px);
  }

  .list-complete-leave-active {
    position: absolute;
  }
</style>
