<template>
<div>
  <navbar></navbar>
  <tabbar></tabbar>
  <p>我的课程</p>
</div>
</template>

<script>
import tabbar from '../components/common/TabBar'
import navbar from '../components/common/NavBar'
export default {
  name: 'MineCourse',
  data () {
    return {
    }
  },
  components: {
    navbar,
    tabbar
  }
}
</script>

<style scoped>

</style>
