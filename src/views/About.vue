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
      <div class="text">
        <p>bienvenueprojects PARIS CREATIVE STUDIO</p>
        <p>
          HAS BEEN FOUNDED IN 2020 FOLLOWING YEARS WORKING INDIVIDUALLY AS CREATIVE FOR BRANDS AND
          FASHION HOUSES.
        </p>
        <br />
        <p>
          ALWAYS LOOKING FOR INNOVATIVE PROPOSALS EACH MEMBER OF THE STUDIO PAYS VERY SPECIAL
          ATTENTION TO DETAIL, DELIVERING VERY HIGH QUALITY ASSETS AND CREATING
        </p>
        <p>
          A STRONG + ORIGINAL IMAGE FROM THE INITIAL CREATIVE STRATEGY TO FINAL EXECUTION OF
        </p>
        <p>A PROJECT.</p>
      </div>
      <nav-items />
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

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    margin: 0;
  }
}
</style>
