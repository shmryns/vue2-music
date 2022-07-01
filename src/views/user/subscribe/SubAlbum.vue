<template>
  <!-- 收藏的专辑 -->
  <div class="sub-album">
    <div class="subalbum-head">
      <div>
        <span class="font-bold">收藏的专辑</span
        ><span class="font-12" style="color: #cfcfcf">({{ count }})</span>
      </div>
      <div class="detail-search">
        <el-input
          placeholder="搜索收藏专辑"
          clearable
          suffix-icon="el-icon-search"
          v-model="key"
        ></el-input>
      </div>
    </div>
    <div class="mtop-20">
      <InfoList
        :list="subAlbumList"
        @clickitem="toAlbumDetail"
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
        <template #item1="{ item }">
          <span v-for="(ar, index) in item.artists" :key="index"
            >{{ ar.name }}
          </span>
        </template>
        <template #item2="{ item }"> {{ item.size }} 首 </template>
      </InfoList>
      <div v-else>
        <div class="text-center">
          <img
            src="@/assets/img/not.png"
            alt="暂无数据"
            style="width: 100px; height: 100px"
          />
          <p class="font-14">暂无收藏专辑</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoList from '@/components/list/InfoList.vue'
import { getSubAlbum } from '@/api/api_album'
export default {
  components: { InfoList },
  data() {
    return {
      list: [],
      offset: 0,
      count: 0,
      key: '',
    }
  },
  computed: {
    subAlbumList() {
      return this.list.filter((item) => item.name.match(this.key))
    },
  },
  created() {
    this.getSubAlbum()
  },
  methods: {
    async getSubAlbum() {
      const res = await getSubAlbum()
      if (res.code !== 200) return
      this.list = Object.freeze(res.data)
      this.count = res.count
    },
    toAlbumDetail(row) {
      this.$router.push('/albumdetail/' + row.id)
    },
  },
}
</script>

<style lang="less" scoped>
.subalbum-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-center {
  text-align: center;
  margin-top: 10vh;
}
</style>
