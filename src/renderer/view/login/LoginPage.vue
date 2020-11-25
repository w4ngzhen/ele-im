<template>
  <div>
    <el-row style="margin: 30px 0 10px 0;text-align: center">
      <span class="ele-im__label-text">
        {{ loginLabel }}
      </span>
    </el-row>
    <el-row>
      <account-login class="ele-im__login-component"
                     @loginSuccess="accountLoginSuccess"/>
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
  data() {
    return {
      loginLabel: 'ELE IM',
    };
  },
  methods: {
    accountLoginSuccess(loginUser) { // 短链接登陆校验成功
      this.initDb().then(_ => { // 数据库加载成功
        this.$store.commit('setLoginUser', loginUser);
        return this.$ipcRenderer.invoke('LoginCheckSuccess', loginUser);
      }).then(data => { // 长连接建立成功，准备跳转
        console.log(data);
        if (data.code === 0) {
          this.$router.push('/chat');
        } else {
          this.$message.error(data.message);
        }
      }).catch(err => {
        console.error(err);
        this.$message.error(err.message);
      });
    },
    initDb() {
      return Promise.resolve();
    }
  },
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
