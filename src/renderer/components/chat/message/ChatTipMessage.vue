<template>
  <p class="ele-im__chat-tip-message">
    {{ data }}
  </p>
</template>

<script>
export default {
  name: "ChatTipMessage",
  props: {
    data: {
      type: String,
      default() {
        return '';
      }
    }
  }
};
</script>

<style scoped>
.ele-im__chat-tip-message {
  width: 100%;
  height: 25px;

  text-align: center;
  color: #505050;
  font-size: 12px;
  line-height: 25px;
}
</style>
