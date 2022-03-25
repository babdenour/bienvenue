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
        <p>Bienvenueprojects PARIS CREATIVE STUDIO</p>
        <p>
          BIENVENUE IS AN INDEPENDENT CREATIVE STUDIO WORKING ON VISUAL
          STRATEGIES, GRAPHIC DESIGN, ADVERTISING CAMPAIGNS AND BRAND
          CONTENT FOR FASHION AND LUXURY BRANDS.
        </p>
        <br />
        <p>
          BIENVENUE ALSO CAPITALIZES ON A EXTERNAL NETWORK OF TALENTS,
          CONSULTANTS, CREATIVES, ADVISORS, & TECHNICAL OPERATORS.
        </p>
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
