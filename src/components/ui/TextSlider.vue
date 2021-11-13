<template>
  <div v-for="field in data" :key="field.id" @mouseenter="pauseControl" @mouseleave="playControl">
    <transition name="slide" mode="out-in">
    <div v-if="field.id === current" :key="field.id">
          <div class="content">
            <h3 class="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">{{ field.service }}</h3>
        <h1 class="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">{{ field.title }} </h1>
        <p class="text-justify text-s5 sm:text-s6 md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-normal">
          {{ field.description }}
        </p>
        </div>
    </div>
    </transition>
  </div>
      <transition-group name="fade">      
      <div class="flex flex-row justify-center mt-5" key="w">
      <div v-for="n in fields+1" :key="n" class="dot" :class="n == current+1 ? 'active' : ''" @click="setCurrent(n-1)">
      </div> 
      </div>
      </transition-group>
</template>

<script>
export default {
  props: {
      fields:{
          type: Number,
          required: true,
          default:3
      }, 
      data:{
          type: Object
      }
      },
  data() {
    return {
      current: 0,
      pause:false,
      interval:null,
    };
  },
  mounted() {
    this.autoPlay();
  },
  methods: {
    autoPlay() {
      if (!this.pause) {
      this.interval = setInterval(() => {
          if (this.current < 3) {
              this.current ++;
          } else{
              this.current = 0;
          }
      }, 5000);
      }
    },
    setCurrent(n){
        this.current = n;
    },
    pauseControl(){
      clearInterval(this.interval);
    },
    playControl(){
      this.autoPlay();
    }
  },
};
</script>

<style scoped>
.slide-enter-active{
  transition: all .3s ease;
}
.slide-leave-active{
  transition: all .2s ease;
  position: absolute;
  opacity: 0;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100px);
}
.slide-move{
  transition: transform 0.8s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    }
.dot{
    margin: .1em;
    width: 1vw;
    height: 1vw;
    border-radius: 100%;
    background-color: #d2d2d0;
    transition: all 1s ease;
    cursor: pointer;
}
.active{
    stroke-width: 1px;
    stroke: #019cd5;
    background-color: #019cd5;
}

.content h3 {
  font-family: "Vazir";
  font-style: normal;
  font-weight: bold;
  /* font-size: 2.25rem;
  line-height: 3.625rem;
  identical to box height */
  text-align: right;

  /* Black II */

  color: #2c2c30;
}
.content h1 {
  font-family: "Vazir";
  font-style: normal;
  /* font-weight: 900;
  font-size: 5rem;
  line-height: 8.0625rem; */
  /* identical to box height */

  text-align: right;

  /* Black I */

  color: #222222;
}
.content p {
  font-family: "Vazir";
  font-style: normal;
  font-weight: normal;
  /* font-size: 1.5rem;
  line-height: 3.125rem; */
  /* or 208% */

  text-align: right;

  /* Black II */

  color: #2c2c30;
}
</style>
