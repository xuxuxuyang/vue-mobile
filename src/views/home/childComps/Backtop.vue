<template>
  <div class='backtop'>
    <img src="~assets/img/common/top.png"
         alt="">
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
.backtop {
  position: fixed;
  z-index: 99;
  top: 550px;
  bottom: 60px;
  right: 20px;
}
.backtop img {
  width: 43px;
  height: 43px;
}
</style>