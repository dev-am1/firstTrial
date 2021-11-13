<template>
<div class="cont p-10 w-full" id="footer">
    <div class="flex justify-around mb-4">
  <div class="w-2/4 h-auto">
      <div class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">LOGO</div>
      <ul class="list-reset leading-normal">
          <li class="pers text-grey-darker w-9/12 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</li>
      </ul>
  </div>
  <div class="w-1/4 flex-col h-auto sm:mt-0 mt-8 mx-10">
      <div class="pers text-white text-lg font-semibold mb-2">دسترسی سریع</div>
      <ul class="list-reset leading-normal">
          <li class="hover:text-blue text-grey-darker my-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><a href="#menu1">منوی شماره 1</a></li>
          <li class="hover:text-blue text-grey-darker my-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><a href="#menu2">منوی شماره 2</a></li>
          <li class="hover:text-blue text-grey-darker my-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><a href="#menu3">منوی شماره 3</a></li>
          <li class="hover:text-blue text-grey-darker my-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><a href="#menu4">منوی شماره 4</a></li>
          <li class="hover:text-blue text-grey-darker my-4 text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><a href="#menu5">منوی شماره 5</a></li>
      </ul>

  </div>
  <div class="w-1/4 flex-col h-auto sm:mt-0 mt-8">
<button><a href="#menu1" class="border-2 border-white p-2 md:p-4 absolute left-0 text-s5 md:text-base">بازگشت به بالا ^</a></button>
      <div class="pers text-white text-lg font-semibold mb-2">تماس با ما</div>
      <ul class="list-reset leading-normal">
          <li class="hover:text-green-dark contac text-grey-darker text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><img class="inline m-2" src="../../assets/icons/Location.png">تهران، پاسداران، خیابان نجفی،<br> کوچه اقاقیا، پلاک 2 واحد 11</li>
          <li class="hover:text-green-dark contac text-grey-darker text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><img class="inline m-2" src="../../assets/icons/phone.png" alt="">(+98)2222222222 </li>
          <li class="hover:text-green-dark contac text-grey-darker text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><img class="inline m-2" src="../../assets/icons/printer.png" alt="">(+98)2222222222 </li>
          <li class="hover:text-green-dark contac text-grey-darker text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><img class="inline m-2" src="../../assets/icons/Message.png" alt="">info@peak-elevator.com </li>
      </ul>
      <ul class="flex flex-row">
    <div class="mx-2 my-2 w-10 soci text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><img src="../../assets/icons/ins.png" alt="" /></div>
    <div class="mx-2 my-2 w-10 soci text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><img src="../../assets/icons/fac.png" alt="" /></div>
    <div class="mx-2 my-2 w-10 soci text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><img src="../../assets/icons/twit.png" alt="" /></div>
    <div class="mx-2 my-2 w-10 soci text-s3 sm:text-s6 md:text-sm lg:text-lg xl:text-2xl"><img src="../../assets/icons/link.png" alt="" /></div>
      </ul>


  </div>

</div>
</div>
        
    
</template>

<style scoped>
.contac:hover{
    color: #019CD5;
}
.soci{
    filter:grayscale(90%);
}
.soci:hover{
    filter: grayscale(0);
    transition: all 1s ease-in-out;
}
.cont{
    background-color: #2C2C30;
    color: white;
    width: 100%;
    margin-top: 10vw;
}
.logo{
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  /* identical to box height */
  text-align: right;
}
.pers{
    font-family: 'Vazir';
}
</style>