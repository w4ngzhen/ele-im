<template>
  <div class="ele-im__main-page">
    <div class="ele-im__left-menu-bar">
      <aside-menu/>
    </div>
    <div class="ele-im__right-content">
      <client-header class="ele-im__right-client-header"/>
      <div class="ele-im__right-page-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import AsideMenu from "./aside/AsideMenu";
import ClientHeader from "./header/ClientHeader";

export default {
  name: "MainLayout",
  components: {ClientHeader, AsideMenu},
  data() {
    return {
      avatar: require('@/assets/avatar.jpg')
    };
  }
};
</script>

<style scoped>

.ele-im__main-page {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: transparent;
  overflow: hidden;
}

.ele-im__left-menu-bar {
  width: 60px;
  height: 100%;
}

.ele-im__right-content {
  width: calc(100% - 60px);
  height: 100%;
  background-color: #FFF;
}

.ele-im__right-client-header {
  width: 100%;
  height: 30px;
}

.ele-im__right-page-content {
  width: 100%;
  height: calc(100% - 30px);
}
</style>
