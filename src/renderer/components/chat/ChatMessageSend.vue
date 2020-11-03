<template>
  <div class="ele-im__chat-message-send">
    <div class="ele-im__chat-message-send-tool-bar">
      Tool Bar
    </div>
    <div class="ele-im__chat-message-send-content">
      <textarea v-model="content"></textarea>
    </div>
    <div class="ele-im__chat-message-send-bottom">
      <el-button type="primary"
                 size="mini"
                 plain
                 class="ele-im__chat-message-send-bottom-button"
                 @click="send"
      >发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessageSend",
  props: {
    tools: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      content: '',
    };
  },
  methods: {
    send() {
      this.$emit('sendMessage', this.content);
    }
  }
};
</script>

<style scoped>
.ele-im__chat-message-send {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
}

.ele-im__chat-message-send-tool-bar {
  width: 100%;
  height: 35px;

  background-color: #EEEEEE;
}

.ele-im__chat-message-send-content {
  width: 100%;
  height: calc(100% - 35px - 40px);
}

.ele-im__chat-message-send-content textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  padding: 10px 20px;
  border: none;
  outline: none;

  font-size: 14px;
  resize: none;

}

.ele-im__chat-message-send-bottom {
  width: 100%;
  height: 40px;
}

.ele-im__chat-message-send-bottom-button {
  float: right;
  margin: 5px 20px 5px 0;
  width: 80px;
}

</style>
