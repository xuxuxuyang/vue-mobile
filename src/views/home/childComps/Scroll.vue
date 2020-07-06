<template>
  <div class="wrapper"
       ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      probeType: 2
    })
  },
  components: {
  },
  props: {},
  data () {
    return {
      scroll: null
    }
  },
  computed: {},
  methods: {},
}
</script>

<style>
.wrapper {
  height: 100vh;
}
</style>

