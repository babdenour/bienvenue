<script>
export default {
  name: 'notFound',
  mounted() {
    // this.$router.push('/home');
    window.location.href = 'https://bienvenueprojects.com/#/home';
  },
};
</script>

<template>
  <h1>Oops, it looks like the page you're looking for doesn't exist or you don't have acces.</h1>
</template>
