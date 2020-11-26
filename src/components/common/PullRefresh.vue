<template>
<van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
  <slot></slot>
</van-pull-refresh>
</template>

<script>
import {
  Toast
} from 'vant'
export default {
  name: 'PullRefresh',
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
