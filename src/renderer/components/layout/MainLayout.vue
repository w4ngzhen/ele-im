<template>
  <el-container>
    <el-aside width="60px" class="aside">
      <el-row>
        avatar
      </el-row>
      <el-row>
        <aside-menu/>
      </el-row>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import AsideMenu from "../aside/AsideMenu";
export default {
  name: "MainLayout",
  components: {AsideMenu}
};
</script>

<style scoped>
.el-aside {
  height: 100vh;
}
</style>
