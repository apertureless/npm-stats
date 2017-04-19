<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
        <input
          class="Search__input"
          @keyup.enter="requestData"
          placeholder="npm package name"
          type="search" name="search"
          v-model="package"
        >
        <button class="Search__button" @click="requestData">Find</button>
      </div>
      <div class="error-message" v-if="showError">
       {{ errorMessage }}
      </div>
      <hr>
      <h1 class="title" v-if="loaded">{{ packageName }}</h1>
      <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
          Downloads per Day <span>{{ period }}</span>
          <hr>
        </div>
        <div class="Chart__content">
          <line-chart v-if="loaded" :chart-data="downloads" :chart-labels="labels"></line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import LineChart from '@/components/LineChart'

  export default {
    components: {
      LineChart
    },
    props: {},
    data () {
      return {
        package: null,
        packageName: '',
        period: 'last-month',
        loaded: false,
        downloads: [],
        labels: [],
        showError: false,
        errorMessage: 'Please enter a package name'
      }
    },
    mounted () {
      if (this.$route.params.package) {
        this.package = this.$route.params.package
        this.requestData()
      }
    },
    methods: {
      resetState () {
        this.loaded = false
        this.showError = false
      },
      requestData () {
        if (this.package === null || this.package === '' || this.package === 'undefined') {
          this.showError = true
          return
        }
        this.resetState()
        axios.get(`https://api.npmjs.org/downloads/range/${this.period}/${this.package}`)
          .then(response => {
            this.downloads = response.data.downloads.map(download => download.downloads)
            this.labels = response.data.downloads.map(download => download.day)
            this.packageName = response.data.package
            this.setURL()
            this.loaded = true
          })
          .catch(err => {
            this.errorMessage = err.response.data.error
            this.showError = true
          })
      },
      setURL () {
        history.pushState({ info: `npm-stats ${this.package}` }, this.package, `/#/${this.package}`)
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid color(solitude);
    margin: 1em 0;
    padding: 0;
  }

  .content {
    background: color(ghost-white);
    min-height: calc(100vh - 180px);
  }

  .title {
    text-align: center;
    color: color(fjord);
  }

  .container {
    @include container();
  }

  .error-message {
    text-align: center;
    color: color(robin-egg-blue);
  }

  .Search {
    @include has(container) {
      padding: rem(100) 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    @include has(input) {
      padding: rem(20);
      background-color: #fff;
      border: 1px solid color(solitude);
      font-size: rem(16);
      flex: 0 1 rem(380);
    }

    @include has(button) {
      appearance: none;
      padding: rem(18) rem(45);
      margin-left: rem(20);
      border: 0;
      border-radius: 0;
      cursor: pointer;
      text-align: center;
      font-size: rem(21);
      font-weight: 600;
      color: #fff;
      background: color(robin-egg-blue);

      @include hover-active-states {
        background: darken(color(robin-egg-blue), 10%);
      }
    }
  }

  .Chart__container {
    border-radius: $base-border-radius;
    background-color: #fff;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.30);
    padding: rem(20) rem(40);
    margin: rem(50) 0;
  }

  .Chart__title {
    color: color(fjord);
    margin-bottom: rem(40);
    font-weight: 600;
    font-size: rem(16);

    > span {
      font-weight: 400;
      color: color(robin-egg-blue);
      font-size: rem(16);
      margin-left: rem(25);
    }
  }
</style>
