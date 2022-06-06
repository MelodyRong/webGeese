<template>
  <div class="putOnRecordsWrap">
    <p @click="goPutOnRecords">京ICP备2022006850号-1</p>
  </div>
</template>

<script>
export default {
  name: 'putOnRecords',
  methods: {
    // 跳转备案系统
    goPutOnRecords () {
      window.open('https://beian.miit.gov.cn/', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.putOnRecordsWrap {
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #666666;
  line-height: 20px;
  p {
    margin: 0;
  }
}
</style>
