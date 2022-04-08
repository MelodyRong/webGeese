<template>
  <div class="classifyViewWrap">
    <div class="leftTab">
      <div class="tabBar" :class="classifyIndex === index ? 'selTabBar' : 'noTabBar'" v-for="(item ,index) in classifyList" :key="index" @click="choiceClassify(item, index)">{{item.title}}</div>
    </div>
    <div class="rightClassifyViewDetails">
      <div class="classifyViewDetailsWrap" v-for="(item, index) in classifyList[classifyIndex].details" :key="index" @click="queryData(item.name)">
        <img :src="require('@/assets/classifyImg/' + item.img)" class="classifyImg" alt="">
        <div class="classifyName">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import classifyList from '@/services/classifyList'
export default {
  name: 'mobileClassifyView',
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
        path: '/mobileSearchResultView',
        query: {
          data: name
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.classifyViewWrap {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,255,255,0.4);
  .leftTab {
    width: 80px;
    height: 100%;
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
  .rightClassifyViewDetails {
    width: 73%;
    height: 120px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .classifyViewDetailsWrap {
    margin-right: 10px;
    text-align: center;
    height: 100%;
    .classifyImg {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-size:cover;
      background-position:center;
    }
    .classifyName {
      font-size: 14px;
      color: #fca104;
    }
  }
}
</style>
