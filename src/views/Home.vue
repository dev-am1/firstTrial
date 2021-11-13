<template>
  <the-head></the-head>
  <menu-one></menu-one>
  <Card/>
  <menu-two></menu-two>
  <menu-three></menu-three>
  <menu-four></menu-four>
  <menu-five></menu-five>
  <the-footer></the-footer>
  <foot-alert></foot-alert>
  <the-social-icons></the-social-icons>
</template>

<script>
// @ is an alias to /src
import TheHead from "@/components/pageSections/TheHead.vue";
import MenuOne from '@/components/pageSections/MenuOne.vue';
import Card from '@/components/pageSections/MenuOneCard.vue';
import TheSocialIcons from '@/components/ui/TheSocialIcons.vue';
import MenuTwo from '../components/pageSections/MenuTwo.vue';
import MenuThree from '../components/pageSections/MenuThree.vue';
import MenuFour from '../components/pageSections/MenuFour.vue'
import MenuFive from '../components/pageSections/MenuFive.vue';
import TheFooter from '../components/pageSections/TheFooter.vue';
import FootAlert from '../components/pageSections/FootAlert.vue';
export default {
  name: "Home",
  components: {
    TheHead,
    MenuOne,
    Card,
    TheSocialIcons,
    MenuTwo,
    MenuThree,
    MenuFour,
    MenuFive,
    TheFooter,
    FootAlert
  },
};
</script>
