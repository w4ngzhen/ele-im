<template>
  <div class="main-page">
    <div class="left-menu-bar">
      <el-row>
        <img :src="avatar"
             width="50px"
             height="50px"
             style="margin: 5px"
             alt=""/>
      </el-row>
      <el-row>
        <aside-menu/>
      </el-row>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AsideMenu from "../aside/AsideMenu";

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
.main-page {
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
}

.left-menu-bar {
  width: 60px;
  height: 100%;
  float: left;
  box-shadow: 1px 0 1px #cccccc;
}

.right-content {
  height: 100%;
  margin-left: 60px;
  background-color: #FFF;
  position: relative;
}
</style>
