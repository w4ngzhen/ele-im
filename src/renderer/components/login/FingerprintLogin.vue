<template>
  <div>
    <el-row
        type="flex"
        justify="center">
      <el-button
          icon="fa fa-hand-pointer-o"
          type="primary"
          style="width: 100%"
          @click="fingerprintLogin"
      >指纹登录
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "FingerprintLogin",
  mounted() {
    document.addEventListener('keydown', e => {
      let keyCode = e.code;
      if (keyCode === 'Escape') {
        clearTimeout(this.currentTimeoutId);
        this.cancelLoading();
      }
    });
  },
  data() {
    return {
      loadingService: undefined,
      currentTimeoutId: '',
    };
  },
  methods: {
    fingerprintLogin() {
      this.loadingService = this.$loading({
        text: '正在读取指纹设备，按ESC键取消'
      });
      this.currentTimeoutId = setTimeout(() => {
        this.cancelLoading();
        this.$message.warning('指纹读取失败，请重试');
      }, 5000);
    },
    cancelLoading() {
      if (this.loadingService) {
        this.loadingService.close();
        this.loadingService = undefined;
      }
    }
  }
};
</script>

<style scoped>

</style>
