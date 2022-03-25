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
        <p>WE LEADS INITIATIVES TO TAKE CONCRETE ACTIONS.</p>
        <p>
          OUR CULTURAL PROGRAMS WAS CREATED TO GIVE AN EMERGING NETWORK OF
          CREATIVES ACCESS TO RESSOURCES THAT ALLOW THEM TO DEVELOP AMBITIOUS NEW
          PROJECTS.
        </p>
        <p>
          IN 2020, WE PRODUCED A LIMITED RUN OF THE “CENT-POUR-CENT ” T-SHIRT.
          DESIGNED AND MADE IN PARIS.
          PROCEEDS WERE DONATED TO RAISE FUND AND PROVIDE RESSOURCES TO SUPPORT
          OUR CULTURAL PROGRAMS.
        </p>
        <p>
          IN 2021, WE TEAMED UP WITH A FRENCH LUXURY HOUSE AS CREATIVE PARTNER OF A NEW
          INTERNATIONAL PRIZE CREATED TO PROMOTE INNOVATION IN ARTS AND CULTURE.
          THIS INITIATIVE IS ON A GLOBAL SCALE AND AIMS TO PROMOTE FLUIDITY BETWEEN
          DIFFERERENT ART FORMS.
        </p>
        <p>** UPON REQUEST, A MORE DETAILED</p>
        <p>PORTFOLIO IS AVAILABLE.</p>
      </div>

      <div class="img-div">
        <div class="img-item tee">
          <img src="../../public/ai-white-back-100.png" alt="tshirt" />
        </div>
        <div class="img-item flyer">
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
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 20vh;
  margin-top: 2vh;

  & img {
    width: 100%;
    height: 100%;
  }

  &.tee {
    width: 40%;
    height: 40%;
  }

  &.flyer {
    width: 30%;
    height: 50%;
  }
}
</style>
