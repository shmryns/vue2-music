<template>
  <div class="not-found">
    <el-empty
      description="很抱歉，你要查找的网页找不到"
      :image-size="400"
      image="https://cdn.jsdelivr.net/gh/crazybox521/blogImg/404.svg"
    >
      <el-button @click="$router.back()">返回上一页</el-button>
    </el-empty>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.not-found {
  height: 100vh;
}
</style>
