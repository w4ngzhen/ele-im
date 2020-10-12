<template>
  <div class="chat-title">
    <div class="main-title">
      {{ title }}
    </div>
    <div class="sub-title">
      {{ subTitle }}
    </div>
    <div class="right-option">
      <i class="fa fa-bars"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatTitle",
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    },
    subTitle: {
      type: String,
      default() {
        return '';
      }
    }
  }
};
</script>

<style scoped>
.chat-title {
  height: 100%;
  width: 100%;
}

.main-title {
  float: left;
  width: 200px;
  height: 100%;
}

.sub-title {
  float: left;
  width: calc(100% - 262px); /*  */
  height: 100%;
}

.right-option {
  width: 60px;
  height: 100%;
  float: left;
}
</style>
