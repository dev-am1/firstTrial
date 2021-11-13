<template>
  <div class="container items-center justify-around flex wrap" id="menu1">
      <div class="flex flex-col w-2/4">
       <text-slider :fields="3" :data="getData" ></text-slider>
      </div>
      <div class="flex">
        <div class="cube"></div>
      </div>
    </div>

</template>
<script>
import TextSlider from '../ui/TextSlider.vue';
export default {
  components:{
    TextSlider
  },
  computed: {
    getData(){
      return this.$store.getters['carousel/slides1'];
    }
  },
}
</script>

<style scoped>
.wrap{
  margin-top: 11vw;
}
.cube {
  width: 20.56vw;
  height: 20.56vw;
  background: linear-gradient(
    316.88deg,
    #019cd5 19.45%,
    rgba(255, 255, 255, 0.5) 94.24%
  );
  border-radius: 6.25vw;
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
}
</style>
