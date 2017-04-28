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
        <span class="Search__icon" @click="toggleSettings()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" enable-background="new 0 0 54 54"><path d="M51.22 21h-5.052c-.812 0-1.481-.447-1.792-1.197s-.153-1.54.42-2.114l3.572-3.571c.525-.525.814-1.224.814-1.966 0-.743-.289-1.441-.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933 0l-3.571 3.571c-.574.573-1.366.733-2.114.421-.75-.311-1.197-.98-1.197-1.792v-5.052c0-1.533-1.247-2.78-2.78-2.78h-6.44c-1.533 0-2.78 1.247-2.78 2.78v5.052c0 .812-.447 1.481-1.197 1.792-.748.313-1.54.152-2.114-.421l-3.571-3.571c-1.052-1.052-2.883-1.05-3.933 0l-4.553 4.553c-.525.525-.814 1.224-.814 1.967 0 .742.289 1.44.814 1.966l3.572 3.571c.573.574.73 1.364.42 2.114s-.98 1.197-1.792 1.197h-5.052c-1.533 0-2.78 1.247-2.78 2.78v6.439c0 1.534 1.247 2.781 2.78 2.781h5.052c.812 0 1.481.447 1.792 1.197s.153 1.54-.42 2.114l-3.572 3.571c-.525.525-.814 1.224-.814 1.966 0 .743.289 1.441.814 1.967l4.553 4.553c1.051 1.051 2.881 1.053 3.933 0l3.571-3.572c.574-.573 1.363-.731 2.114-.42.75.311 1.197.98 1.197 1.792v5.052c0 1.533 1.247 2.78 2.78 2.78h6.439c1.533 0 2.78-1.247 2.78-2.78v-5.052c0-.812.447-1.481 1.197-1.792.751-.312 1.54-.153 2.114.42l3.571 3.572c1.052 1.052 2.883 1.05 3.933 0l4.553-4.553c.525-.525.814-1.224.814-1.967 0-.742-.289-1.44-.814-1.966l-3.572-3.571c-.573-.574-.73-1.364-.42-2.114s.981-1.197 1.793-1.197h5.052c1.533 0 2.78-1.247 2.78-2.78v-6.44c0-1.533-1.247-2.78-2.78-2.78zm.78 9.22c0 .43-.35.78-.78.78h-5.052c-1.624 0-3.019.932-3.64 2.432-.622 1.5-.295 3.146.854 4.294l3.572 3.571c.305.305.305.8 0 1.104l-4.553 4.553c-.304.304-.799.306-1.104 0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-.854-1.5.621-2.432 2.016-2.432 3.64v5.052c0 .43-.35.78-.78.78h-6.44c-.43 0-.78-.35-.78-.78v-5.052c0-1.624-.932-3.019-2.432-3.64-.503-.209-1.021-.311-1.533-.311-1.014 0-1.997.4-2.761 1.164l-3.571 3.572c-.306.306-.801.304-1.104 0l-4.553-4.553c-.305-.305-.305-.8 0-1.104l3.572-3.571c1.148-1.148 1.476-2.794.854-4.294-.621-1.499-2.016-2.431-3.64-2.431h-5.052c-.43 0-.78-.35-.78-.78v-6.44c0-.43.35-.78.78-.78h5.052c1.624 0 3.019-.932 3.64-2.432.622-1.5.295-3.146-.854-4.294l-3.572-3.571c-.305-.305-.305-.8 0-1.104l4.553-4.553c.304-.305.799-.305 1.104 0l3.571 3.571c1.147 1.147 2.792 1.476 4.294.854 1.5-.62 2.432-2.015 2.432-3.639v-5.052c0-.43.35-.78.78-.78h6.439c.431 0 .781.35.781.78v5.052c0 1.624.932 3.019 2.432 3.64 1.502.622 3.146.294 4.294-.854l3.571-3.571c.306-.305.801-.305 1.104 0l4.553 4.553c.305.305.305.8 0 1.104l-3.572 3.571c-1.148 1.148-1.476 2.794-.854 4.294.621 1.5 2.016 2.432 3.64 2.432h5.052c.43-.001.78.349.78.779v6.44zM27 18c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z"/></svg>
        </span>
      </div>
      <div class="Search__settings" v-if="showSettings">
        <datepicker input-class="Search__input" placeholder="Start Date" v-model="periodStart" name="start-date"></datepicker>
        <datepicker input-class="Search__input" placeholder="End Date" v-model="periodEnd" name="end-date"></datepicker>
      </div>

      <div class="error-message" v-if="showError">
       {{ errorMessage }}
      </div>
      <hr>
      <package-info :package-name="packageName" :total-downloads="totalDownloads" :period="formattedPeriod" v-if="loaded"></package-info>
      <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
          Downloads per Day <span>{{ formattedPeriod }}</span>
          <hr>
        </div>
        <div class="Chart__content">
          <line-chart v-if="loaded" :chart-data="downloads" :chart-labels="labels"></line-chart>
        </div>
      </div>

      <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
          Downloads per Year <span>{{ formattedPeriod }}</span>
          <hr>
        </div>
        <div class="Chart__content">
          <line-chart v-if="loaded" :chart-data="downloadsYear" :chart-labels="labelsYear"></line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Datepicker from 'vuejs-datepicker'

  import LineChart from '@/components/LineChart'
  import PackageInfo from '@/components/PackageInfo'

  import { dateToYear, dateToDay, dateBeautify } from '../utils/dateFormatter'
  import { removeDuplicate, getDownloadsPerYear } from '../utils/downloadFormatter.js'

  export default {
    components: {
      LineChart,
      PackageInfo,
      Datepicker
    },
    data () {
      return {
        package: null,
        packageName: '',
        loaded: false,
        downloads: [],
        downloadsYear: [],
        labels: [],
        labelsYear: [],
        showError: false,
        showSettings: false,
        errorMessage: 'Please enter a package name',
        periodStart: '',
        periodEnd: new Date(),
        rawData: '',
        totalDownloads: ''
      }
    },
    mounted () {
      if (this.$route.params.package) {
        this.package = this.$route.params.package
        this.requestData()
      }
    },
    computed: {
      _endDate () {
        return dateToDay(this.periodEnd)
      },
      _startDate () {
        return dateToDay(this.periodStart)
      },
      period () {
        return this.periodStart ? `${this._startDate}:${this._endDate}` : 'last-month'
      },
      formattedPeriod () {
        return this.periodStart ? `${dateBeautify(this._startDate)} - ${dateBeautify(this._endDate)}` : 'last-month'
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
            this.rawData = response.data.downloads
            this.downloads = response.data.downloads.map(entry => entry.downloads)
            this.labels = response.data.downloads.map(entry => entry.day)
            this.packageName = response.data.package
            this.totalDownloads = this.downloads.reduce((total, download) => total + download)
            this.setURL()
            this.loaded = true
            this.formatYear()
          })
          .catch(err => {
            this.errorMessage = err.response.data.error
            this.showError = true
          })
      },
      formatYear () {
        this.labelsYear = this.rawData
          .map(entry => dateToYear(entry.day))
          .reduce(removeDuplicate, [])
        this.downloadsYear = getDownloadsPerYear(this.rawData)
      },
      setURL () {
        history.pushState({ info: `npm-stats ${this.package}` }, this.package, `/#/${this.package}`)
        this.$ga.page({
          page: `/#/${this.package}`,
          title: this.package,
          location: window.location.href
        })
      },
      toggleSettings () {
        this.showSettings = !this.showSettings
        this.$ga.event({
          eventCategory: 'Settings',
          eventAction: 'toggle'
        })
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
      max-width: rem(640);
      padding: rem(100) 0 rem(20) 0;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    @include has(input) {
      padding: rem(20);
      background-color: #fff;
      border: 1px solid color(solitude);
      font-size: rem(16);
      flex: 1;
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

    @include has(icon) {
      width: rem(40);
      height: rem(40);
      margin-left: rem(15);
      cursor: pointer;
      color: color(fjord);

      @include hover-active-states {
        color: color(robin-egg-blue);
      }

      > svg {
        fill: currentColor;
      }
    }

    @include has(settings) {
      max-width: rem(640);
      margin: 0 auto;
      padding: rem(20) 0;
      display: flex;
      flex-direction: row;
      justify-content: center;

        .vdp-datepicker + .vdp-datepicker {
          margin-left: 1.25rem;
          flex: 1;
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
