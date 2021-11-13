<template>
        <div class="mx-8 wrap">
    <div class="container flex justify-center items-center content-center mx-auto my-8"  >
          <span v-for="card in cards" :key="card.id">
        <div class="blueC square" v-if="cards.id == 1">
      <h1 class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center font-bold p-4" >
       {{cards.spec}}
      </h1>
        <p class="text-s4 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl p-4">
        {{ cards.desc }}
      </p>
        </div>
        <div class="redC square" v-if="cards.id == 2">
      <h1 class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center font-bold p-4">
        {{ cards.spec }}
      </h1>
       <p class="text-s4 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl p-4">
{{ cards.desc }}
      </p>
        </div>
        <div class="blueC square " v-if="cards.id == 3">
      <h1 class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center font-bold p-4">
       {{cards.spec}}
      </h1>
       <p class="text-s4 sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-2xl p-4">
         {{ cards.desc }}
      </p>
        </div>
          </span>
    </div>
        </div>
      <div class="absolute top-2/4 left-0 w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 flex-shrink">
  <img src="../../assets/icons/Frame.png" alt="">
  </div>
</template>
<script>
export default {
  computed: {
    cards(){
      return this.$store.getters['cards/cards'];
    }
  },
}
</script>
<style scoped>
.wrap{
  margin-top: 6vw;
}
h1{
    font-weight: bold;
    text-align: center;
    padding: .3em;
}
p{
    text-align: right;
}
.triangles {
  position: absolute;
  left: 0;
  top: 50%;
}

.blueC,
.redC{
    margin: 1em;
    font-family: 'Vazir';
    color: #FFF;
}
.blueC{
    width: 28.5vw;
    height: 28.5vw;
    border-radius: 2.5vw;
}
.redC{
    border-radius: 2.92vw;
    width: 31.125vw;
    height: 31.125vw;
}
.redC {
  background: #fd3d39;
  transition: all 0.4s ease-in-out;
}
.redC:hover {
  transform: scale(1.1);
}
.blueC {
  background: #16a8fc;
  border-radius: 2.8125vw;
  transition: all 0.4s ease-in-out;
}
.blueC:hover {
  transform: scale(1.05);
}

  .square:before {
    content: "";
    float: left;
    padding-bottom: 100%;
  }
  .square:after {
    content: "";
    display: table;
    clear: both;
  }
  *, *:before, *:after {
  box-sizing: border-box;
}

</style>