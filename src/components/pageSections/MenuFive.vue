<template>
<p class="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center title">منوی شماره 5</p>
  <form class="bg-white rounded px-8 pt-6 pb-8 mb-4 mx-auto">
      <div class="flex mb-4 w-9/12 mx-auto">
  <div class="w-1/3 h-12 mx-3.5 mb-6"> <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        نام و نام خانوادگی
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="نام و نام خانوادگی را وارد کنید">
    </div></div>
  <div class="w-1/3 h-12 mx-3.5 mb-6"><div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
        شماره تماس
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" min="0" placeholder="شماره تماس خود را وارد کنید">
    </div>    </div>
  <div class="w-1/3 h-12 mx-3.5 mb-6"> <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        ایمیل
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="آدرس ایمیل خود را وارد کنید">
    </div></div>
</div>
        <div class="mb-6 w-9/12 mx-auto">
      <label class="block text-gray-700 text-sm font-bold mb-2 mx-3.5" for="area">
        پیام
      </label>
      <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mx-3.5" id="area" row="10" placeholder="اینجا بنویسید"/>
    <div class="flex float-left btn">
    <the-button>CTA</the-button>
    </div>

    </div>
  </form>
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
*{
    font-family: 'Vazir';
}
.title{
    margin-top: 10vw;
    margin-bottom: 5vw;
}
.btn{
    margin-top: 1vw;
}
</style>