<template>
  <footer>
    Build with <a href="https://vuejs.org/">Vue.js</a> and <a href="http://vue-chartjs.org/#/">vue-chartjs</a>
  </footer>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  footer {
    background-color: color(fjord);
    color: #fff;
    font-size: rem(16);
    padding: rem(30) rem(40);

    a {
      color: color(robin-egg-blue);

      @include hover-active-states {
        background: darken(color(robin-egg-blue), 20%);
      }
    }
  }
</style>

