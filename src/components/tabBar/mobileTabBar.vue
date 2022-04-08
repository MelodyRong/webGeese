<template>
  <div class="tabBarWrap">
    <div class="goMobilePage" v-for="(item ,index) in tabBarList" :key="index" @click="goPath(item, index)">
      <img class="iconStyle" :src="tabBarIndex === index ? item.selIcon : item.icon" alt="">
      <h6 :class="tabBarIndex === index ? 'selTabBatTextStyle' : 'tabBatTextStyle'">{{item.title}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobileTabBar',
  data () {
    return {
      tabBarIndex: 0, // 初始值
      tabBarList: [
        {
          icon: require('@/assets/tabBar/homePage.png'), // 默认展示图标
          selIcon: require('@/assets/tabBar/selHomePage.png'), // 选中展示图标
          title: '首页', // tab文字
          path: '/mobileIndexView' // 路径
        },
        {
          icon: require('@/assets/tabBar/classificationIcon.png'),
          selIcon: require('@/assets/tabBar/selClassificationIcon.png'),
          title: '分类',
          path: '/mobileClassifyView'
        }
        // {
        //   icon: require('@/assets/tabBar/message.png'),
        //   selIcon: require('@/assets/tabBar/selMessage.png'),
        //   title: '消息',
        //   path: '/mobileMesView'
        // },
        // {
        //   icon: require('@/assets/tabBar/myHome.png'),
        //   selIcon: require('@/assets/tabBar/selMyHome.png'),
        //   title: '我的',
        //   path: '/mobileMyHomeView'
        // }
      ]
    }
  },
  created () {
  },
  methods: {
    goPath (item, index) {
      this.tabBarIndex = index
      this.$router.push({ path: item.path })
    }
  }
}
</script>

<style lang="less" scoped>
.tabBarWrap {
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  color: #777bce;
  font-weight: 500;
  background-color: #fff;
  .goMobilePage {
    flex: 1;
    text-align: center;
    .iconStyle {
      width: 20px;
      height: 20px;
      vertical-align: bottom;
    }
    .selTabBatTextStyle {
      color: #fca104;
      margin: 0;
    }
    .tabBatTextStyle {
      color: #999999;
      margin: 0;
    }
  }
}
</style>
