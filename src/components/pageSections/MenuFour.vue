<template>
    <div class="wrap">
        <div class="flex flex-row justify-center mt-10 sm:mt-14 md:mt-18 lg:mt-22 xl:mt-28 2xl:mt-32">
            <img class="qua" src="../../assets/icons/quat-s.png">
            <p class="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-white title">منوی شماره 4</p>
            <img class="qua" src="../../assets/icons/quat-e.png">
        </div>
        <div class="carou">
            <carousel :autoplay="true" :display="1" :controls-visible="true" :disable3d="true" :classes="`flex align-center justify-center mt-16`">
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <figure>
          <img class="pic" :src="getImgUrl(slide.src)">
          <figcaption>
            <h1 class="absolute bottom-12 right-12 text-right text-2xl text-white title"> {{ slide.desc }} </h1>
          </figcaption>
          </figure>
        </slide>
        <template #bullet>
                  <transition-group name="fade">      
      <div class="flex flex-row justify-center -mt-10" key="w">
      <div v-for="(n,i) in 6" :key="i" class="dot" :class="n == current+1 ? 'active' : ''" @click="setCurrent(n-1)">
      </div> 
      </div>
      </transition-group>
        </template>
      </carousel>
        </div>
        <img src="../../assets/icons/right-tria.png" class="tria absolute right-0">
        <img src="../../assets/icons/cube-l.png" class="cubl absolute left-0">
    </div>
</template>
<script>
  import Carousel from '../ui/Carousels/Carousel3d.vue';
  import Slide from '../ui/Carousels/Slide.vue';
export default {
    components:{
        Carousel,
        Slide
    },
    data() {
        return {
            current:0,
        }
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
            getImgUrl: function (imagePath) {
      return require('@/assets/' + imagePath);
    },
        setCurrent(n){
        this.current = n;
    },
    }, 
    computed: {
        slides(){
            return this.$store.getters['carousel/slides4']
        }
    },
}

</script>
<style scoped>
.carou{
    margin-top:-10vw;
    margin-bottom: 5vw;
    
}
.tria{
    top:170vw;
    width: 2.5vw;
}
.cubl{
    top: 141.5vw;
    width: 10.vw;
}
.wrap{
    background-image: url('../../assets/img/sec4.png');
    width: 100%;
    height: 57.42vw;
     background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  opacity: .8;
  display: grid;
}
.title{
    font-family: 'Vazir';
    padding:0 3em;

}
.qua{
    width: 3.6rem;
    height: 3rem;
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
width: 2vw;
border-radius: 25%;
}
.pic{
background: linear-gradient(180deg, rgba(34, 34, 34, 0) 47.7%, #222222 100%);
border-radius: 30px;
}
</style>