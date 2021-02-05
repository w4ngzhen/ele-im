<template>
</template>

<script>
import ClientHeader from "../../components/layout/header/ClientHeader";
export default {
  name: "PortalPage",
  components: {ClientHeader},
  created() {
    let $loading = this.$loading({
      text: '加载中，请稍后'
    });
    setTimeout(() => {
      $loading.close();
      this.$router.push('/login');
    }, 1000);
  }
};
</script>

<style scoped>

</style>
