<template>
  <div>
    加载中，请稍后
  </div>
</template>

<script>
export default {
  name: "Portal",
  created() {
    setTimeout(() => {
      this.$router.push('/login');
    }, 3000);
  }
};
</script>

<style scoped>

</style>
