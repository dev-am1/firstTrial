<template>
  <div
    class="
      container
      flex
      justify-center
      items-center
      content-center
      mx-auto
      my-28
    "
  >
    <div
      class="
        w-defined
        blueCube
        h-1/6
        w-1/6
        sm:h-2/6 sm:w-2/6
        md:h-3/6 md:w-3/6
        lg:h-4/6 lg:w-4/6
        xl:h-5/6 xl:w-5/6
        2xl:h-97 2xl:w-97
      "
    >
      <p
        class="
          text-white text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
          2xl:text-5xl
          m-12
          text-center
          font-bold
        "
      >
        ویژگی دوم
      </p>
      <p
        class="
          text-s2
          sm:text-s3
          md:text-s4
          lg:text-s5
          xl:text-sm
          2xl:text-lg
          mx-12
          mb-24
          mt-12
          text-white text-right
          font-normal
          p-defined
          sm:large
        "
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>
    </div>
    <div
      class="
        w-defined
        mx-12
        redCube
        h-1/6
        w-1/6
        sm:h-2/6 sm:w-2/6
        md:h-3/6 md:w-3/6
        lg:h-4/6 lg:w-4/6
        xl:h-5/6 xl:w-5/6
        2xl:h-98 2xl:w-98
      "
    >
      <p
        class="
          text-white text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
          2xl:text-5xl
          m-12
          text-center
          font-bold
        "
      >
        ویژگی اول
      </p>
      <p
        class="
          mx-12
          mb-24
          mt-12
          text-ss
          sm:text-ss2
          md:text-xs
          lg:text-sm
          xl:text-base
          2xl:text-lg
          text-white text-right
          font-normal
          p-defined
        "
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>
    </div>
      <div
      class="
        w-defined
        blueCube
        h-1/6
        w-1/6
        sm:h-2/6 sm:w-2/6
        md:h-3/6 md:w-3/6
        lg:h-4/6 lg:w-4/6
        xl:h-5/6 xl:w-5/6
        2xl:h-97 2xl:w-97
      "
    >
      <p
        class="
          text-white text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
          2xl:text-5xl
          m-12
          text-center
          font-bold
        "
      >
        ویژگی سوم
      </p>
      <p
        class="
          text-s2
          sm:text-s3
          md:text-s4
          lg:text-s5
          xl:text-sm
          2xl:text-lg
          mx-12
          mb-24
          mt-12
          text-white text-right
          font-normal
          p-defined
          sm:large
        "
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>
    </div>
  </div>

</template>

<style scoped>
.redCube {
  background: #fd3d39;
  transition: all 0.4s ease-in-out;
}
.redCube:hover {
  transform: scale(1.1);
}
.blueCube {
  background: #16a8fc;
  border-radius: 2.8125rem;
  transition: all 0.4s ease-in-out;
}
.blueCube:hover {
  transform: scale(1.1);
}
.w-defined {
  font-family: "Vazir";
  box-shadow: 0px 0.25rem 1rem rgba(34, 34, 34, 0.16);
  border-radius: 2.8125rem;
}
.p-defined {
  font-family: "Vazir";
  font-style: normal;
  font-weight: normal;
  line-height: 35px;
  /* or 194% */
  text-align: right;
}


.large {
  text-decoration: underline;
}
</style>
