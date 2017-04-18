<template>
  <div id="app">
    <j-header></j-header>
    <router-view></router-view>
    <j-footer></j-footer>
  </div>
</template>

<script>
import JHeader from '@/components/Header'
import JFooter from '@/components/Footer'

export default {
  components: { JHeader, JFooter },
  name: 'app'
}
</script>

<style lang="scss">
  @import "/assets/styles/_variables.scss";
</style>
