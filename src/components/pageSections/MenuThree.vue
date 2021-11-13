<template>
<div class="wrap">
    <div class="flex justify-evenly">
        <div class="text-right">
      <p class="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl title">منو شماره 3</p>
            <p class="title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            <button class="btn border-2 border-gray-500">بیشتر بدانیم</button>
        </div>
        <img src="../../assets/icons/cube.png" class="cbe absolute right-0">
        <div>
            <img class="back" src="../../assets/img/slide4.png">
        </div>    
    </div>
</div>
</template>

<style scoped>
.cbe{
    top: 130vw;
}
.wrap{
    width: 90vw;
    height: 35vw;
    margin: 0 auto;
}
.title{
    font-family: 'Vazir';
}
.btn{
Width:11vw;
Height: 3vw;
background: #FFFFFF;
/* Gray I */
border: 1px solid #797877;
box-sizing: border-box;
border-radius: 10px;
}
.btn:hover{
    background: #019CD5;
    color:white;
    transition: all .4s ease;
}
.back{
    border-radius: 2vw;
}
</style>