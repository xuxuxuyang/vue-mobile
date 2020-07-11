// mixins混入可以混入各种数据代码 data、methods、声明周期什么的都可以
export const mixinsdata = {
  data () {
    return {
      num: 0
    }
  },
  mounted () {
    console.log('mixins混入的内容');
  }
}