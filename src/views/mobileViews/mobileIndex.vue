<template>
  <div class="mobileIndexWrap">
    <div class="mobileWrap">
      <!--  搜索  -->
      <div class="searchWrap">
        <div class="searchInpWrap">
          <img src="@/assets/search.png" alt="" class="searchImg">
          <input type="text" class="searchInp" v-model="searchInpData" @input="searchData">
        </div>
        <div class="searchButWrap" @click="searchData">搜索</div>
      </div>
      <!--  内容展示  -->
      <div class="homePageDetails" v-for="(item, mobileIndex) in dataList" v-bind:key="mobileIndex">
        <!-- title -->
        <div class="titleWrap">
          <div class="headerImg">雁</div>
          <div class="nameAndTime"><p class="name">{{item.name}}</p><p class="dateTime">{{item.dateTime}}</p></div>
        </div>
        <!-- 文案 -->
        <div class="paste">{{item.paste}}<p class="contentSource" v-if="item.source===1">来自公众号投稿 @ <span class="sourceName">{{item.sourceName}}</span></p></div>
        <!-- 小图 -->
        <div class="imageDetailsWrap" v-if="item.type === 1">
          <div class="imgWrap" v-for="(items, mobileIndex) in item.contentCollection" :key="mobileIndex" @click="amplification(item,items)">
            <img class="imageDetails" :src="require('@/assets/imgDetails/' + items.imgUrl)" alt="">
            <span class="imageTypeLogo">{{items.imgType}}</span>
          </div>
        </div>
        <!-- 视频 -->
        <div class="videoDetailsWrap" v-if="item.type === 2">
          <div v-for="(items, mobileIndex) in item.contentCollection" :key="mobileIndex">
            <video :preload="preload" :poster="require('@/assets/imgDetails/' + item.videoCover)" :height="height" :width="width" align="center" :controls="controls"  :autoplay="autoplay">
              <source :src="require('@/assets/imgDetails/' + items.imgUrl)" type="video/mp4">
            </video>
          </div>
        </div>
        <!-- 文字帖 -->
        <div class="textDetailsWrap" v-if="item.type === 3">
          <div v-for="(items, mobileIndex) in item.contentCollection" :key="mobileIndex">
            {{items}}
          </div>
        </div>
      </div>
      <div class="noDataList" v-if="dataList.length === 0">暂无数据，换个关键词搜索吧！！！</div>
      <!-- 大图展示 -->
      <div class="bigImageWrap" v-if="isShowBigImage" @click="narrow()">
        <img :src="require('@/assets/imgDetails/' + amplificationImg)" alt="" :width="bigImgWidth" :height="bigImgHeight">
      </div>
    </div>
    <!--  bottomTabBar  -->
    <tabBar :tabBarIndex="0"></tabBar>
  </div>
</template>

<script>
import homeDataList from '@/services/homeDataList.json'
import tabBar from '@/components/tabBar/mobileTabBar'
import { toRaw } from 'vue'

export default {
  name: 'mobileIndex',
  components: {
    tabBar
  },
  data () {
    return {
      playStatus: '',
      muteStatus: '',
      isMute: true,
      isPlay: false,
      width: '200', // 设置视频播放器的显示宽度（以像素为单位）
      height: '300', // 设置视频播放器的显示高度（以像素为单位）
      preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      autoplay: false,
      isShowBigImage: false, // 大图显示标识
      amplificationImg: '', // 大图路径
      clientHeight: '', // 屏幕高度
      bigImgWidth: '', // 大图默认宽度
      bigImgHeight: '', // 大图默认高度
      searchInpData: '', // 搜索
      homeDataList: [],
      dataList: []
    }
  },
  created () {
    console.log(this.$route.query)
    if (this.$route.query && this.$route.query.name) {
      this.getHomeDataList()
      this.searchInpData = this.$route.query.name
      this.searchData(this.$route.query)
    } else {
      this.clientHeight = document.body.clientHeight
      this.getHomeDataList()
    }
  },
  methods: {
    // get数据
    getHomeDataList () {
      this.homeDataList = homeDataList.homeDataList.reverse()
      this.homeDataList.forEach((e, index) => {
        if (e.type === 1) {
          e.contentCollection.forEach((t, index) => {
            // 先判断动图，再判断长图
            if (t.imgUrl.split('.')[1] === 'gif') {
              t.imgType = '动图'
            }
          })
        }
      })
      this.dataList = this.homeDataList
    },
    // 搜索
    searchData (e) {
      const searchHomeDataList = this.homeDataList.filter(t => (t.paste.indexOf(this.searchInpData) !== -1))
      this.dataList = toRaw(searchHomeDataList)
    },
    // 查看大图
    amplification (item, items) {
      console.log(items, 'items')
      // const img = new Image()
      // img.src = items.imgUrl
      // console.log(img.src, 'src')
      // console.log('width:' + img.width + ',height:' + img.height)
      // 如果高度大于屏幕高度，那么高度100%显示，宽度自适应
      // if (img.height >= document.body.clientHeight) {
      //   this.bigImgHeight = document.body.clientHeight
      //   this.bigImgWidth = ''
      // } else {
      //   this.bigImgWidth = document.body.clientWidth
      //   this.bigImgHeight = ''
      // }
      // 如果宽度大于屏幕宽度，那么宽度100%显示，高度自适应
      // 如果宽高都大于屏幕宽高，那么宽度100%显示，高度自适应，超出屏幕部分滑动
      this.amplificationImg = items.imgUrl
      this.isShowBigImage = true
    },
    // 关闭大图
    narrow (item) {
      this.isShowBigImage = false
      this.amplificationImg = ''
    }
  }
}
</script>

<style lang="less" scoped>
.mobileIndexWrap {
  //padding: 10px 10px 40px;
  //position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-image: url('../../assets/bgcImage/mobileMyHomeBgc.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  background-position:center;
  .mobileWrap {
    padding: 10px 10px 40px;
  }
  .searchWrap {
    margin: 0 0 2vh;
    display: flex;
    align-items: center;
    .searchInpWrap {
      width: 280px;
      min-width: 200px;
      height: 30px;
      border-radius: 30px;
      border: 1px solid #777bce;
      display: flex;
      align-items: center;
      padding-left: 10px;
      overflow: hidden;
      .searchImg {
        width: 20px;
      }
      .searchInp {
        border:none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        outline: none;
      }
    }
    .searchButWrap {
      margin-left: 10px;
      width: 50px;
      height: 30px;
      background-color: #777bce;
      color: #ffffff;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      border-radius: 30px;
      cursor: pointer;
    }
  }
  .homePageDetails {
    padding: 10px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    .titleWrap {
      display: flex;
      .headerImg {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        background-color: #777bce;
        color: #fff;
      }
      .nameAndTime {
        color: #777bce;
        margin-left: 10px;
        .name {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
        }
        .dateTime {
          margin: 0;
          font-size: 12px;
          color: #666666;
        }
      }
    }
    .paste {
      display: flex;
      padding-left: 50px;
      color: #777bce;
      font-size: 14px;
      .contentSource {
        margin: 0;
        .sourceName {
          color: red;
        }
      }
    }
    .imageDetailsWrap {
      display: flex;
      flex-wrap: wrap;
      padding-left: 50px;
      margin-top: 10px;
      .imgWrap {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        margin-right: 10px;
        overflow: hidden;
        position: relative;
        cursor: zoom-in;
        .imageDetails {
          width: 100px;
          position: absolute;
          top: 0;
          left: 0;
        }
        .imageTypeLogo {
          position: absolute;
          bottom: 0;
          right: 0;
          border-radius: 10px 0 10px 0;
          padding: 0px 5px;
          background-color: #fca104;
          color: #ffffff;
          font-size: 12px;
        }
      }
    }
    video {
      background-color: #000000;
      border-radius: 5px;
    }
    .videoDetailsWrap {
      padding-left: 50px;
      margin-top: 5px;
    }
    .textDetailsWrap {
      padding-left: 50px;
      font-size: 14px;
      color: #777bce;
    }
  }
  .bigImageWrap {
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: zoom-out;
    img {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .noDataList {
    margin: 0 10vw 2vh;
  }
}
</style>
