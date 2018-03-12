export default {
  methods: {
    download () {
      let image = this.$refs.canvas.toDataURL('image/png')
      this.$emit('generate', image)
    }
  }
}
