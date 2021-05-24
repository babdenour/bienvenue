<script>
export default {
  name: 'NavItems',
  props: {
    msg: String,
    msg2: String,
    msg3: String,
  },
};
</script>

<template>
  <div class="nav-items">
    <div class="nav-items__text">
      <p>{{ msg }}</p>
      <p>{{ msg2 }}</p>
      <p>{{ msg3 }}</p>
    </div>
    <div class="nav-items__info-contact">
      <a href="https://www.instagram.com/bienvenueprojects/? igshid=a3gc4g3rk7oa"
        >@bienvenueprojects</a
      >
      <a href="tel:+33963640723">(+33) 9 63 64 07 23 </a>
      <a href="mailto:bonjour@bienvenueprojects.com">bonjour@bienvenueprojects.com</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-items {
  display: flex;
  flex-direction: column;

  &__text {
    margin: 1rem;
    text-align: start;
  }

  &__info-contact {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
