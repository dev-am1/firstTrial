<template>
  <button class="btn 2xl:flex-shrink-0 w-24 h-5 md:h-8 lg:h-10 xl:h-14 sm:w-32 md:w-36 lg:w-64 ">
      <div class="txt text-s5 md:text-sm lg:text-lg xl:text-xl">
    <slot></slot>
      </div>
  </button>
</template>

<style scoped>
.txt {
  font-style: normal;
  /* identical to box height */
  text-align: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  /* White */
  color: #ffffff;
}
.btn{
    border-radius: 1.875rem;
    background-color: #019CD5;
}
.btn:hover{
    background-color: #16A8FC;
}
</style>
