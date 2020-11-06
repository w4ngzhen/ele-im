<template>
  <p class="ele-im__chat-text-message"
     :style="style"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "ChatTextMessage",
  props: {
    text: {
      type: String,
      default() {
        return '';
      }
    },
    backgroundColor: {
      type: String,
      default() {
        return "";
      }
    },
    float: {
      type: String,
      default() {
        return 'left';
      }
    }
  },
  computed: {
    style() {
      return {
        // float: this.float,
        backgroundColor: this.backgroundColor
      };
    }
  }
};
</script>

<style scoped>
.ele-im__chat-text-message {
  display: block;
  box-sizing: border-box;
  max-width: 80%;

  border-radius: 5px;
  margin: 0;
  padding: 5px 10px;

  font-size: 14px;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
