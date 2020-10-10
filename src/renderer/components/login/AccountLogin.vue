<template>
  <div>
    <el-form
        hide-required-asterisk
        ref="loginForm"
        label-width="80px"
        style="padding-right: 80px"
        :model="loginModel">
      <el-form-item
          :rules="{ required: true, message: '请填写用户名', trigger: 'blur' }"
          label="用户名"
          prop="username">
        <el-select
            v-model="loginModel.username"
            filterable
            allow-create
            clearable
            style="width: 100%">
          <el-option
              v-for="user in userInfos"
              :key="user.username"
              :value="user.username"
              :label="user.username"/>
        </el-select>
      </el-form-item>
      <el-form-item
          label="密码"
          :rules="{ required: true, message: '请填写密码', trigger: 'blur' }"
          prop="password">
        <el-input
            show-password
            v-model="loginModel.password"/>
      </el-form-item>
    </el-form>
    <el-row
        type="flex"
        justify="center"
        style="padding: 0 20px 0 20px">
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
        username: '',
        password: ''
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
      // remote check todo
      this.$ipcRenderer.send('enter-main-page');
    }
  },
};
</script>

<style scoped>

</style>
