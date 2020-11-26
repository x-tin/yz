<template>
<div>
  <navbar></navbar>
  <tabbar></tabbar>
  <p>全部课程</p>
</div>
</template>

<script>
import tabbar from '../components/common/TabBar'
import navbar from '../components/common/NavBar'
export default {
  name: 'AllCourse',
  data () {
    return {

    }
  },
  components: {
    tabbar,
    navbar
  }
}
</script>

<style scoped>

</style>
