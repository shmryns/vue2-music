<template>
  <div class="footer-bar">
    <keep-alive>
      <Player />
    </keep-alive>
  </div>
</template>

<script>
import Player from '../player/Player.vue'
export default {
  components: {
    Player,
  },
}
</script>
<style lang="less" scoped>
.footer-bar {
  height: 100%;
}
</style>
