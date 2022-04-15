<template>
  <!--    web端-->
  <div class="pcHome" v-if="isWeb">
    <div class="tabBarWrap">
      <div class="tabBar">
        <div class="goPcIndexPage" @click="goPcIndexPage">首页</div>
      </div>
    </div>
    <router-view/>
  </div>
  <!--    移动端-->
  <div class="mobileHome" v-else>
    <router-view/>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar/mobileTabBar'

export default {
  name: 'homePage',
  components: {
    tabBar
  },
  data () {
    return {
      isWeb: true
    }
  },
  created () {
    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (flag) {
      // 如果flag不为空，说明可以匹配到，是手机端
      this.isWeb = false
    }
  },
  methods: {
    goPcIndexPage () {
      this.$router.push({
        path: '/pcHomePage'
      })
    }
  }
}
</script>

<style lang="less" scoped>
// web端tabBar
.tabBarWrap {
  height: 40px;
  .tabBar {
    width: 100vw;
    height: 40px;
    display: flex;
    background-color: rgba(255, 255, 255, .4);
    justify-content: center;
    align-items: center;
    color: #777bce;
    font-weight: 500;
    .goPcIndexPage, .goPcMesViewPage{
      margin: 0 20px;
    }
  }
}
// pc端背景
.pcHome{
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-image: url('../assets/bgcImage/pcMyHomeBgc.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  background-position:center;
}

</style>
