<template>
  <header class="fixed top-0 bg-white z-50 max-w-10xl w-full">
    <nav class="wrp">
      <div class="flex justify-around flex-shrink lg:flex-shrink-0 items-center">
        <the-button>CTA</the-button>
        <div class="flex -mr-10 2xl:-mr-24 2xl:ml-40 ">
          <ul class="flex my-2 sm:my-4 md:my-8 lg:my-10 xl:my-12 flex-shrink xl:flex-grow-0 items-start">
            <li class="cu1 pl-2 sm:pr-2 md:pr-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl">منو شماره1</li>
            <li class="cu1 pl-2 sm:pr-2 md:pr-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl">منو شماره 2</li>
            <li class="cu1 pl-2 sm:pr-2 md:pr-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl">منو شماره 3</li>
            <li class="cu1 pl-2 sm:pr-2 md:pr-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl">منو شماره 4</li>
            <li class="cu1 pl-2 sm:pr-2 md:pr-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl">منو شماره 5</li>
            <li class="cu1 pl-2 sm:pr-2 md:pr-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl">فوتر</li>
          </ul>
        </div>
        <div class="logo">
          <p class=" float-left font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">LOGO</p>
      </div>
        </div>
    </nav>
  </header>
</template>
<script>
import TheButton from "../ui/TheButton.vue";
export default {
  components: {
    TheButton,
  },
};
</script>

<style scoped>
.wrp {
  box-shadow: 0rem 0.125rem 0.5rem rgba(34, 34, 34, 0.15);
}
.cu1 {
  flex-shrink: 1;
  font-family: "Vazir";
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: flex-start;
  /* padding: 9px 24px 8px; */
  color: #797877;
}
.logo {
  display: flex;
  /* margin-top: 1.25rem; */
  /* margin-right: 18.75rem; */
}
.tx {
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  /* identical to box height */
  text-align: left;
  color: #222222;
}
</style>
