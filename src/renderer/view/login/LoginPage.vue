<template>
  <div>
    <el-row style="margin: 30px 0 10px 0;text-align: center">
      <span class="ele-im__label-text">
        {{ loginLabel }}
      </span>
    </el-row>
    <el-row>
      <account-login
          class="ele-im__login-component"
      />
    </el-row>
    <el-divider>或</el-divider>
    <el-row>
      <fingerprint-login
          class="ele-im__login-component"/>
    </el-row>
  </div>
</template>

<script>
import AccountLogin from "../../components/login/AccountLogin";
import FingerprintLogin from "../../components/login/FingerprintLogin";

export default {
  name: "LoginPage",
  components: {FingerprintLogin, AccountLogin},
  methods: {},
  data() {
    return {
      loginLabel: 'ELE IM',
    };
  }
};
</script>

<style scoped>
.ele-im__label-text {
  font-size: 60px;
  font-weight: bolder;
  color: #262626;
}

.ele-im__login-component {
  margin: 10px 20px 0 20px;
}
</style>
