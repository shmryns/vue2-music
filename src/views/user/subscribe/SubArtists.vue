<template>
  <!-- 收藏的歌手 -->
  <div class="sub-artists">
    <div class="subartists-head">
      <div>
        <span class="font-bold">收藏的歌手</span
        ><span class="font-12" style="color: #cfcfcf">({{ count }})</span>
      </div>
      <div class="detail-search">
        <el-input
          placeholder="搜索我收藏的歌手"
          clearable
          suffix-icon="el-icon-search"
          v-model="key"
        ></el-input>
      </div>
    </div>
    <div class="mtop-20">
      <InfoList
        :list="subList"
        @clickitem="toArtistDetail"
        v-if="list.length > 0"
      >
        <template #img="{ item }">
          <img
            class="sub-img mleft-10"
            v-lazy="item.picUrl + '?param=100y100'"
          />
        </template>
        <template #title="{ item }">
          {{ item.name }}
        </template>
        <template #item1="{ item }"> 专辑： {{ item.albumSize }} </template>
        <template #item2="{ item }"> MV：{{ item.mvSize }} </template>
      </InfoList>
      <div v-else>
        <div class="text-center">
          <img
            src="@/assets/img/not.png"
            alt="暂无数据"
            style="width: 100px; height: 100px"
          />
          <p class="font-14">暂无收藏歌手</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoList from '@/components/list/InfoList.vue'
import { getSubArtists } from '@/api/api_artist'
export default {
  components: {
    InfoList,
  },
  data() {
    return {
      list: [],
      offset: 0,
      count: 0,
      key: '',
    }
  },
  computed: {
    subList() {
      return this.list.filter((item) => item.name.match(this.key))
    },
  },
  created() {
    this.getSubArt()
  },
  methods: {
    async getSubArt() {
      const res = await getSubArtists()
      if (res.code !== 200) return
      this.list = Object.freeze(res.data)
      this.count = res.count
    },
    toArtistDetail(row) {
      this.$router.push('/artistdetail/' + row.id)
    },
  },
}
</script>

<style lang="less" scoped>
.subartists-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-center {
  text-align: center;
  margin-top: 10vh;
}
</style>
