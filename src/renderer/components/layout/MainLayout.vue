<template>
  <el-container>
    <el-aside width="60px">
      左侧区域
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>

<style scoped>

</style>
