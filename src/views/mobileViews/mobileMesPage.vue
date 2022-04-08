<template>
  <div class="mobileMesWrap">
    <!-- 水印-->
    <div class="mesList" v-for="(item, index) in  mesList" :key="index">
      {{item.mesName}}
    </div>
    <!-- 消息列表-->
  </div>
</template>

<script>
export default {
  name: 'mobileMesPage',
  data () {
    return {
      mesList: [
        {
          mesName: '龚俊Simon'
        },
        {
          mesName: '张哲瀚疯子'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .mobileMesWrap {
    width: 95vw;
    height: 91vh;
    background: rgba(255,255,255,0.4);
    margin: 10px auto;
    border-radius: 5px;
    .mesList {

    }
  }
</style>
