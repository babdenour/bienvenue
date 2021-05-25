<script>
import NavItems from '../components/NavItems.vue';

export default {
  name: 'cultural',
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
    <div class="cultural">
      <h1>CULTURAL PROGRAMS</h1>

      <div class="text">
        <p>bienvenueprojects LEADS INITIATIVES</p>
        <p>TO TAKE CONCRETE ACTIONS</p>
        <p>TO SUPPORT COMMUNITIES.</p>
        <p>RAISE FUNDS AND PROVIDE</p>
        <p>RESSOURCES FOR ORGANIZATIONS,</p>
        <p>TO SUPPORT OUR CULTURAL PROGRAMS,</p>
        <p>TO ENCOURAGE YOUNG TALENTS,</p>
        <p>TO HELP YOUNG CREATIVES.</p>
      </div>

      <div class="img-div">
        <div class="img-item">
          <img src="../../public/ai-white-back-100.png" alt="tshirt" />
        </div>
        <div class="img-item">
          <img src="../../public/flyer-all.png" alt="flyer" />
        </div>
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
.cultural {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & .img-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.text {
  display: flex;
  flex-direction: column;
  margin: 1vh 0;
  & p {
    margin: 0;
  }
}

.img-item {
  width: 20vw;
  height: 20vh;
  margin: 2vh;

  & img {
    width: 100%;
    height: 100%;
  }
}
</style>
