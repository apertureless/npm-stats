<template>
  <a
    :href="link"
    :download="name + '.png'"
    title="Download as PNG"
    class="Chart__download"
  >
    🖨
  </a>
</template>

<script>
  export default {
    name: 'DownloadButton',
    props: {
      name: {
        type: String,
        default: 'chart'
      },
      link: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/_variables.scss";
  .Chart__download {
    cursor: pointer;
    border: 1px solid #f1f1f1;
    border-radius: rem(5);
    padding: rem(5);
    text-decoration: none;

    &:hover {
      border-color: color(robin-egg-blue);
    }
  }
</style>
