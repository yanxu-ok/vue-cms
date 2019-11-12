<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间:</span>
      <span>点击:0次</span>
    </p>
    <hr />
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo:{}
    };
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      console.log(this.id)
      this.$axios
        .get("api/getnew", {
          newid:this.id
        })
        .then(res => {
          console.log(res.data);
       
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss">
.newsinfo-container {
  background-color: white;
  padding: 0 4px;
  .title {
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
    color: red
  }
  .subtitle{
    font-size: 14px;
    color: cadetblue;
    display: flex;
    justify-content: space-between;
  }
}
</style>