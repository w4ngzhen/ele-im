<template>
  <div class="chat-title">
    <div class="main-title">
      <p :title="title">{{ title }}</p>
    </div>
    <div class="sub-title">
      <p :title="subTitle">{{ subTitle }}</p>
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
  height: 60px;
  width: 100%;
}

.main-title {
  float: left;
  width: 200px;
  height: 100%;

  display: flex;
  align-items: center;
}

.main-title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 18px;
  margin-left: 10px;
}

.sub-title {
  float: left;
  width: calc(100% - 264px); /* 右侧预留一点border宽度 */
  height: 100%;

  display: flex;
  align-items: center;
}

.sub-title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
}

.right-option {
  float: left;
  width: 60px;
  height: 100%;

  border-left: 1px #EEEEEE solid;
  text-align: center;
}

.right-option i {
  line-height: 60px;
}
.right-option i:hover {
  cursor: pointer;
}
</style>
