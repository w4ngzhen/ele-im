<template>
  <div>
    <el-row>
      <el-form
          hide-required-asterisk
          ref="loginForm"
          label-width="80px"
          :model="loginModel">
        <el-form-item :rules="{ required: true, message: '请填写用户名', trigger: 'blur' }"
                      label="用户名"
                      prop="userId">
          <el-input v-model="loginModel.userId"/>
        </el-form-item>
        <el-form-item label="密码"
                      :rules="{ required: true, message: '请填写密码', trigger: 'blur' }"
                      prop="password">
          <el-input show-password
                    v-model="loginModel.password"/>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row
        type="flex"
        justify="center">
      <el-button
          @click="login"
          type="primary"
          style="width: 100%">登录
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AccountLogin",
  data() {
    return {
      userInfos: [],
      loginModel: {
        userId: '123',
        password: '123'
      }
    };
  },
  methods: {
    login() {
      let localValidated = false;
      this.$refs['loginForm'].validate(validated => {
        localValidated = validated;
      });
      if (!localValidated) {
        return;
      }
      this.$http.loginCheck(
          this.loginModel.userId,
          this.loginModel.password
      ).then(loginUser => {
        this.$emit('loginSuccess', loginUser);
      }).catch(err => {
        console.log(err);
        this.$message.error(err.message);
      });
    }
  },
};
</script>

<style scoped>

</style>
