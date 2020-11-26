<template>
  <div>
    <navbar></navbar>
    <pullrefresh>
      <swipe></swipe>
    </pullrefresh>
    <tabbar :tabbarTittle="tabbarTittle"></tabbar>
  </div>
</template>

<script>
import pullrefresh from '../components/common/PullRefresh'
import tabbar from '../components/common/TabBar'
import navbar from '../components/common/NavBar'
import swipe from '../components/content/Swipe'
export default {
  name: 'Home',
  data () {
    return {
      tabbarTittle: '首页'
    }
  },
  components: {
    tabbar,
    navbar,
    swipe,
    pullrefresh
  }
}
</script>

<style scoped>

</style>
