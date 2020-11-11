<template>
  <div class="ele-im__main-page">
    <div class="ele-im__left-menu-bar">
      <aside-menu/>
    </div>
    <div class="ele-im__right-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AsideMenu from "./aside/AsideMenu";

export default {
  name: "MainLayout",
  components: {AsideMenu},
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
  background-color: transparent;
  overflow: hidden;
}

.ele-im__left-menu-bar {
  width: 60px;
  height: 100%;
  float: left;
}

.ele-im__right-content {
  height: 100%;
  margin-left: 60px;
  background-color: #FFF;
  position: relative;
}
</style>
