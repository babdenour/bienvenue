/* eslint-disable */
<script>
import NavItems from '../components/NavItems.vue';

export default {
  name: 'studio',
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
    <div class="studio">
      <h1>STUDIO</h1>
      <div class="text">
        <p>CREATIVE & IMAGE DIRECTION</p>
        <p>PHOTOGRAPHY</p>
        <p>FILMS & VIDEOS</p>
        <p>ADVERTISING</p>
        <p>BRANDING & IDENTITY</p>
        <p>MODELS & TALENTS CASTING</p>
        <p>PRESS RELATION</p>
        <p>TALENTS & ARTISTS MANAGEMENT</p>
        <p>CURATION</p>
        <p>EVENTS</p>
        <p>DESIGN RESEARCH</p>
        <p>CREATIVE CONSULTANCY</p>
        <p>COLLECTION DEVELOPMENT</p>
        <p>MOODBOARDS</p>
        <p>SUPPORT TO CREATIVE DIRECTOR</p>
        <p>SET DESIGN</p>
        <p>PRODUCTION</p>
        <p>LOCATIONS SCOUTING</p>
        <p>COMMUNITY SOCIAL STRATEGY</p>
        <p>WEB DESIGN</p>
        <br />
        <p>** UPON REQUEST, A MORE DETAILED</p>
        <p>PORTFOLIO IS AVAILABLE.</p>
      </div>
      <nav-items class="nav-items" msg="" msg2="" />
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
.studio {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & p {
    margin: 0;
  }
}
</style>
