/* eslint-disable max-len */
<script>
import NavItems from '../components/NavItems.vue';

export default {
  name: 'about',
  components: {
    NavItems,
  },
};
</script>

<template>
  <div>
    <div id="nav">
      <router-link to="/home" v-if="!$route.path.includes('/home')">←</router-link>
    </div>
    <div class="about">
      <h1>ABOUT</h1>

      <nav-items
        msg="bienvenueprojects PARIS CREATIVE STUDIO HAS BEEN FOUNDED IN 2020 FOLLOWING
      YEARS WORKING INDIVIDUALLY AS CREATIVE FOR BRANDS AND FASHION HOUSES."
        msg2="ALWAYS LOOKING FOR INNOVATIVE PROPOSALS, EACH MEMBER OF
      THE STUDIO PAYS VERY SPECIAL ATTENTION TO DETAIL, DELIVERING VERY HIGH QUALITY ASSETS AND
      CREATING A STRONG + ORIGINAL IMAGE FROM THE INITIAL CREATIVE STRATEGY TO FINAL EXECUTION OF A
      PROJECT."
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
#nav {
  position: fixed;
  top: 1rem;
  left: 1rem;
  margin-bottom: 1rem;
  a {
    font-weight: bold;
    color: white;
  }
}
.about {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}
</style>
