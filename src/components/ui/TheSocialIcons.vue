<template>
<div class="flex">
  <div class="flex flex-col fixed socia z-50 flex-shrink">
    <div ><img class="logo" src="../../assets/icons/ins.png" alt="" /></div>
    <div ><img class="logo" src="../../assets/icons/fac.png" alt="" /></div>
    <div ><img class="logo" src="../../assets/icons/twit.png" alt="" /></div>
    <div ><img class="logo" src="../../assets/icons/link.png" alt="" /></div>
  </div>
</div>
</template>
<style scoped>
div img{
  filter: grayscale(1);
  transition: all 0.3s ease-in-out;
}
div img:hover{
  filter: grayscale(0);
}
.socia{
  top: 13vw;
  right: 2vw;
  margin: 2em 0;
  width: 2.4vw;
  height: 2.4vw;
}
.logo{
  margin: 1em;
}
</style>