<script>
export default {
  name: 'bienvenue',
  data: () => ({
    time: '',
    logo: ',',
  }),
  mounted() {
    setTimeout(() => {
      this.logo = 'logo time3';
      this.time = 'time';
      setTimeout(() => {
        this.time = 'time time2';
        this.logo = 'logo time3 time2';
      }, 985);
    }, 1000);
    setTimeout(() => {
      this.$router.push('/home');
    }, 2000);
  },
};
</script>

<template>
  <div :class="logo">
    <img :class="time" src="../assets/logo.png" alt="bienvenue" />
  </div>
</template>

<style lang="scss" scoped>
.logo,
img {
  width: 100vw;
  transition-duration: 1s;
  transition-property: transform;
  overflow: hidden;
}

.time {
  -webkit-transform: translateY(-100%) rotate(90deg); /* Safari */
  -moz-transform: translateY(-100%) rotate(90deg); /* Firefox 3.6 Firefox 4 */
  /*-moz-transform-origin: right top; */
  -ms-transform: translateY(-100%) rotate(90deg); /* IE9 */
  -o-transform: translateY(-100%) rotate(90deg); /* Opera */
  transform: translateY(-100%) rotate(90deg); /* W3C */
  -webkit-transform-origin: left bottom;
  -moz-transform-origin: left bottom;
  -ms-transform-origin: left bottom;
  -o-transform-origin: left bottom;
  transform-origin: left bottom;
}

.time2 {
  -webkit-transition: width 0.8s ease-in-out;
  -moz-transition: width 0.8s ease-in-out;
  -o-transition: width 0.8s ease-in-out;
  transition: width 0.8s ease-in-out;
  width: 100vh;
}
.time3 {
  height: 100vh;
  width: 100vw;
}
</style>
