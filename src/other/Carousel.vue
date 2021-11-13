<template>
<div class="wrap">
    <div class="carousel flex justify-center">
        <slot></slot>
        </div>
        <div class="flex justify-between">
        <button @click="next"><img src="../../../assets/icons/right.png"></button>
        <button @click="prev"><img src="../../../assets/icons/left.png"></button>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        next(){
            this.$emit('next')
        },
        prev(){
            this.$emit('prev')
        }
    },
}
</script>

<style scoped>
button img{
    width: 2.40vw;
    height: 2.40vw;
    margin: auto 2vw;
}
button{
    margin-top: -2vw;
}
</style>