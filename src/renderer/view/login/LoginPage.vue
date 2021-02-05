<template>
  <div class="ele-im__login-page">
    <client-header class="ele-im__login-page-header"
                   :border-bottom="'none'"
                   :bar-head-background-color="'#1E90FF'"
                   :bar-tail-background-color="'#FFF'"
    />
    <div class="ele-im__login-page-content">
      <div class="ele-im__login-page-content-left">
        <img :src="backgroundImage" alt="" width="300px" height="300px">
      </div>
      <div class="ele-im__login-page-content-right">
        <account-login class="ele-im__login-component"
                       @loginSuccess="accountLoginSuccess"/>
      </div>
    </div>
  </div>
</template>

<script>
import AccountLogin from "../../components/login/AccountLogin";
import FingerprintLogin from "../../components/login/FingerprintLogin";
import ClientHeader from "../../components/layout/header/ClientHeader";

export default {
  name: "LoginPage",
  components: {ClientHeader, FingerprintLogin, AccountLogin},
  computed: {
    backgroundImage() {
      return require('@/assets/img/login-page-center.png');
    }
  },
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
          d;
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
.ele-im__login-page {
  width: 100%;
  height: 100%;
}

.ele-im__login-page-header {
  width: 100%;
  height: 30px;
}

.ele-im__login-page-content {
  width: 100%;
  height: calc(100% - 30px); /* 整体高度 减去 header高度 */
  display: flex;
}

.ele-im__login-page-content-left {
  width: calc(100% - 400px);
  height: 100%;
  background-color: #1E90FF;

  display: flex;
  justify-content: center;
  align-items: center;
}

.ele-im__login-page-content-right {
  width: 400px;
  height: 100%;
}

.ele-im__login-component {
  margin: 10px 20px 0 20px;
}

</style>
