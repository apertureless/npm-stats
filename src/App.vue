<template>
  <div id="app">
    <j-header></j-header>
    <router-view></router-view>
    <j-footer></j-footer>
    <cookie-law theme="dark-lime"></cookie-law>
  </div>
</template>

<script>
import JHeader from '@/components/Header'
import JFooter from '@/components/Footer'
import CookieLaw from 'vue-cookie-law'

export default {
  components: { JHeader, JFooter, CookieLaw },
  name: 'app'
}
</script>

<style lang="scss">
  @import "/assets/styles/_variables.scss";

  .Cookie__button {
    background: color(robin-egg-blue)!important;

    @include hover-active-states() {
      background: darken(color(robin-egg-blue), 10%)!important;
    }

  }
</style>
