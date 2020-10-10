<template>
  <el-tabs :stretch="true">
    <el-tab-pane label="账号/密码">
      <account-login/>
    </el-tab-pane>
    <el-tab-pane label="指纹">
      <fingerprint-login/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import AccountLogin from "../../components/login/AccountLogin";
import FingerprintLogin from "../../components/login/FingerprintLogin";

export default {
  name: "Login",
  components: {FingerprintLogin, AccountLogin},
  methods: {}
};
</script>

<style scoped>

</style>
