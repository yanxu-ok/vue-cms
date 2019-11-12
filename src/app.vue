<template>
  <!-- 这个为根页面 -->
  <div class="app-contains">
    <!-- header区域 -->
    <mt-header fixed title="黑马程序员"></mt-header>

    <!-- router-view区域 -->
    <transition name="fade">
      <div style="margin-top:40px">
        <router-view></router-view>
      </div>
    </transition>

    <!-- Tabber区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-contains{
  padding-bottom: 50px;
  overflow-x: hidden;
}
.fade-enter{
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position:absolute;
}
.fade-enter-active,
.fade-leave-active{
  transition: all 0.5s ease;
}

</style>