<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
      <router-link :to="'/home/newsInfo/' + item.id">
        <img class="mui-media-object mui-pull-right" :src="item.img_url" />
        <div class="mui-media-body">
          <h2>{{item.title}}</h2>
          <p class="mui-ellipsis">
            <span>发表时间: {{item.add_time | dateFormat}}</span>
            <span>点击:{{item.click}}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$axios
        .get("api/getnewslist", {})
        .then(res => {
          console.log(res.data.message);
          this.newsList = res.data.message;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  h2 {
    font-size: 14px;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: cadetblue;
    display: flex;
    justify-content: space-between;
  }
}
</style>