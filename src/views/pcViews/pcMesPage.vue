<template>
  <div class="pcMesPageWrap">pc消息</div>
</template>

<script>
export default {
  name: 'mesPage',
  data () {
    return {
      mes: '消息'
    }
  },
  beforeRouteLeave (to, from) {
    // 离开当前的组件，触发
    console.log(to, '消息走了')
    console.log(from, '消息走了')
  },
  created () {
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
