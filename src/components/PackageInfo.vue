<template>
  <div class="Package">
    <h1 class="Package__title">{{ packageName }}</h1>
    <div class="Package__info">
      <div class="Package__info-item">
        <span>{{ totalDownloads }}</span><span class="info-label">Total Downloads</span>
      </div>
      <div class="Package__info-item">
        <span>{{ period }}</span><span class="info-label">Period</span>
      </div>
      <div class="Package__info-item">
        <span><a :href="packageLink">{{ packageName }} on npm</a></span><span class="info-label">Link</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      packageName: {
        type: String
      },
      totalDownloads: {
        type: Number
      },
      period: {
        type: String
      }
    },
    computed: {
      packageLink () {
        return `https://www.npmjs.com/package/${this.packageName}`
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .Package {
    padding: rem(20);
    background-color: color(fjord);
    border-radius: $base-border-radius;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.30);
    color: #fff;
    text-align: center;
    max-width: rem(400);

    @include has(title) {
      margin-top: 0;
      font-size: rem(29);
    }

    @include has(info) {
      display: flex;
      flex-direction: column;
    }

    @include has(info-item) {
      display: flex;
      flex-direction: column;
      margin: rem(5) 0;

      > span:not(.info-label) {
        font-size: rem(20);
        font-weight: bold;
        margin-bottom: rem(5);
        color: color(robin-egg-blue);
        > a {
          color: currentColor;
        }
      }

      .info-label {
        text-transform: uppercase;
        font-size: rem(12);
        color: color(solitude);
      }
    }
  }
</style>
