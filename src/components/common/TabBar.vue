<template>
<van-tabbar v-model = "active" route>
  <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item name="allCourse" icon="tv-o" to="/allCourse">全部课程</van-tabbar-item>
  <van-tabbar-item name="mineCourse" icon="user-o" to="/mineCourse">我的课程</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
  username: 'TabBar',
  data () {
    return {
      active: 'home'
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
