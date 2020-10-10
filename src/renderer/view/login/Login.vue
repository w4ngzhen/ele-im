<template>
  <div>
    <el-row style="margin: 30px 0 10px 0;text-align: center">
      <span class="label-text">
        {{ loginLabel }}
      </span>
    </el-row>
    <el-row>
      <account-login
          class="login-component"
      />
    </el-row>
    <el-divider>或</el-divider>
    <el-row>
      <fingerprint-login
          class="login-component"/>
    </el-row>
  </div>
</template>

<script>
import AccountLogin from "../../components/login/AccountLogin";
import FingerprintLogin from "../../components/login/FingerprintLogin";

export default {
  name: "Login",
  components: {FingerprintLogin, AccountLogin},
  methods: {},
  data() {
    return {
      loginLabel: 'ELE IM',
    }
  }
};
</script>

<style scoped>
.label-text {
  font-size: 60px;
  font-weight: bolder;
  color: #262626;
}
.login-component {
  margin: 10px 20px 0 20px;
}
</style>
