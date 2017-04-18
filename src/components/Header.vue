<template>
  <div class="Header">
    <span class="Header__logo">npm-stats</span>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .Header {
    background-color: color(fjord);
    color: #fff;
    font-size: rem(16);
    padding: rem(30) rem(40);

    @include has(logo) {
      font-size: rem(16);
      font-weight: 600;
    }
  }
</style>
