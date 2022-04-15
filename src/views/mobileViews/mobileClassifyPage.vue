<template>
  <div class="classifyViewWrap">
    <div class="classifyView">
      <div class="leftTab">
        <div class="tabBar" :class="classifyIndex === index ? 'selTabBar' : 'noTabBar'" v-for="(item ,index) in classifyList" :key="index" @click="choiceClassify(item, index)">{{item.title}}</div>
      </div>
      <div class="rightClassifyViewDetailsWrap">
        <!-- 提示 -->
        <div class="tipsWrap">资料更新中...（路透，饭拍涉及权限的暂不分享）</div>
        <!-- 分类 -->
        <div class="rightClassifyViewDetails">
          <div class="classifyViewDetailsWrap" v-for="(item, index) in classifyList[classifyIndex].details" :key="index" @click="queryData(item.name)">
            <div class="classifyImg" :style="{backgroundImage:'url(' + require('@/assets/classifyImg/' + item.img) + ')'}"></div>
            <div class="classifyName">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  bottomTabBar  -->
  <tabBar :tabBarIndex="1"></tabBar>
</template>

<script>
import classifyList from '@/services/classifyList'
import tabBar from '@/components/tabBar/mobileTabBar'
export default {
  name: 'mobileClassifyView',
  components: {
    tabBar
  },
  data () {
    return {
      classifyIndex: 0,
      classifyList: []
    }
  },
  created () {
    this.getClassifyListData()
  },
  methods: {
    getClassifyListData () {
      this.classifyList = classifyList.classifyList
    },
    // 切换左侧tab
    choiceClassify (item, index) {
      console.log(index)
      this.classifyIndex = index
    },
    // 查找分类数据
    queryData (name) {
      console.log(name)
      this.$router.push({
        path: '/mobileIndexView',
        query: {
          name: name
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.classifyViewWrap {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('../../assets/bgcImage/mobileMyHomeBgc.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  background-position:center;
  .classifyView {
    display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(255,255,255,0.4);
  }
  .leftTab {
    width: 80px;
    height: 100vh;
    border-right: 1px solid #fca104;
    overflow-y: scroll;
    .tabBar {
      width: 100%;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
    }
    .selTabBar {
      color: #fca104;
      background-color: rgba(255,255,255,.8);
    }
    .noTabBar {
      color: #666666;
    }
  }
  .rightClassifyViewDetailsWrap {
    width: 79%;
    height: 100vh;
    overflow-y: scroll;
    .tipsWrap {
      //width: 100%;
      height: 30px;
      padding-left: 10px;
      font-size: 12px;
      color: #fca104;
      background-color: rgba(255, 255, 255, 0.8);
      line-height: 30px;
    }
    .rightClassifyViewDetails {
      display: flex;
      flex-wrap: wrap;
      padding-top: 10px;
      padding-bottom: 100px;
      .classifyViewDetailsWrap {
        width: 33%;
        min-height: 120px;
        position: relative;
        text-align: center;
        .classifyImg {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          border-radius: 10px;
          background-repeat: no-repeat;
          background-size:cover;
          background-position:center;
        }
        .classifyName {
          font-size: 14px;
          //color: #fca104;
          color: #777bce;
        }
      }
    }
  }
}
</style>
