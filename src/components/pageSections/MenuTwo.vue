<template>
  <div class="wrapper">
      <div class="flex justify-between items-center mt-14 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-44 2xl:mt-52" id="menu2">
      <img class="side" src="../../assets/icons/Frame-rs.png" alt="">
      <div class="text-center font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white justify-self-center title">منو شماره 2</div>
      <img class="side" src="../../assets/icons/Frame-ls.png" alt="">
      </div>
      <div class="slider w-7/12 h-3/6 2xl:w-full  sm:w-7/12 sm:h-2/6 md:w-8/12 md:h-3/6 lg:w-9/12 lg:h-4/6 xl:w-10/12 xl:h-5/6 mx-auto">
      <carousel :autoplay="true" :display="3" :controls-visible="true" :classes="`flex justify-between`">
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <figure>
          <img class="pic" :src="getImgUrl(slide.src)">
          <figcaption>
            <h1 class="absolute bottom-12 right-12 text-right text-2xl text-white title"> {{ slide.desc }} </h1>
          </figcaption>
          </figure>
        </slide>
      </carousel>
      <div class="flex mx-auto items-center justify-center">
          <div v-for="(n,i) in 3" :key="i" class="inline-block mx-auto dot" :class="n == 2 ? 'active' : ''"></div>
      </div>
    </div>

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
      slides:[
        {desc : "توضیحات مختصر مربوط به عکس بالا",
        src: "img/slide1.png"
        },{desc : "توضیحات مختصر مربوط به عکس بالا",
        src: "img/slide2.png"
        },{desc : 'توضیحات مختصر مربوط به عکس بالا',
        src: "img/slide3.png"
        },
      ],
      visibleSlide: 0,
    }
  },
  methods:{
    getImgUrl: function (imagePath) {
      return require('@/assets/' + imagePath);
    },
  },
}
</script>
<style scoped>
.title{
font-family: 'Vazir';
}
.wrapper {
  width: 100%;
  height: 56.42vw;
  background-image: url("../../assets/icons/menu2.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 15fr;
}
.pic{
background: linear-gradient(180deg, rgba(34, 34, 34, 0) 47.7%, #222222 100%);
border-radius: 30px;
}
.pic:hover{
  filter: brightness(50%);
  transition: all 1s ease;
}
.dot{
  width: 1vw;
  height: 1vw;
  border-radius: 100%;
  background: white;
  margin: .3em;
}
.active{
  width: 2vw;
  border-radius: 25%;
}
.side{
  width: 24.19vw;
  height: 7.52vw;
}
/* .slider{
  width: 44.53vw;
  height: 28.125vw;
} */
</style>
