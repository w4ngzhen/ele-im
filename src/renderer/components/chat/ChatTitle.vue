<template>
  <div class="chat-title">
    <div class="main-title">
      <p :title="title">{{ title }}</p>
    </div>
    <div class="sub-title">
      <p :title="subTitle">{{ subTitle }}</p>
    </div>
    <div class="right-option">
      <i @click="optionClick" class="fa fa-bars"></i>
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
  },
  methods: {
    optionClick() {
      this.$emit('option-click');
    }
  }
};
</script>

<style scoped>

.chat-title {
  display: flex;
  height: 60px;
  width: calc(100% - 2px);
}

.main-title {
  width: 200px;
  height: 60px;
  margin-left: 10px;
}

.main-title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 18px;
  line-height: 60px;
  margin: 0 auto;
}

.sub-title {
  width: calc(100% - 260px);
  height: 60px;
}

.sub-title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
  color: #505050;
  line-height: 60px;
  margin: 0 auto;
}

.right-option {
  float: left;
  width: 60px;
  height: 60px;

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
