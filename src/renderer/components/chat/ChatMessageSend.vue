<template>
  <div class="ele-im__chat-message-send">
    <div class="ele-im__chat-message-send-tool-bar-wrapper">
      <chat-message-send-tool-bar
          @toolClick="tool => $message.success(JSON.stringify(tool))"/>
    </div>
    <div class="ele-im__chat-message-send-content">
      <textarea v-model="content"
                @keypress="inputKeyPress"
      />
    </div>
    <div class="ele-im__chat-message-send-bottom">
      <div class="ele-im__chat-message-send-bottom-left">
        <p>{{ 'alt+enter 换行' }}</p>
      </div>
      <div class="ele-im__chat-message-send-bottom-right">
        <el-button type="primary"
                   size="mini"
                   plain
                   class="ele-im__chat-message-send-bottom-button"
                   @click="send"
        >发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ChatMessageSendToolBar from "./ChatMessageSendToolBar";

export default {
  name: "ChatMessageSend",
  components: {ChatMessageSendToolBar},
  props: {
    tools: {
      type: Array,
      default() {
        return [];
      }
    },
    reverseSendKey: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      content: '',
    };
  },
  methods: {
    inputKeyPress(e) {
      let keyCode = e.keyCode;
      if (keyCode !== 10 && keyCode !== 13) { // 非[alt + enter]和[enter]
        return;
      }
      if (keyCode === 10) { // alt + enter
        if (this.reverseSendKey) {
          this.send();
        } else {
          this.content += '\n';
        }
      } else if (keyCode === 13) { // enter
        if (this.reverseSendKey) {
          this.content += '\n';
        } else {
          this.send();
        }
      }
      e.preventDefault();
    },
    send() {
      this.$emit('sendMessage', {type: 'text', data: this.content});
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

.ele-im__chat-message-send-tool-bar-wrapper {
  width: 100%;
  height: 35px;
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

  padding: 5px 20px 10px 20px;
  border: none;
  outline: none;

  font-size: 14px;
  resize: none;

}

.ele-im__chat-message-send-bottom {
  display: flex;

  width: 100%;
  height: 40px;
}

.ele-im__chat-message-send-bottom-left {
  width: calc(100% - 100px);
  height: 40px;

  padding: 10px;
}

.ele-im__chat-message-send-bottom-left p {
  display: block;
  box-sizing: border-box;
  height: 20px;

  margin: 0;

  line-height: 20px;
  font-size: 12px;
  float: right;
  color: #8d8c8c;
}

.ele-im__chat-message-send-bottom-right {
  width: 100px;
  height: 40px;
  text-align: center;
  padding: 5px 10px;
}

.ele-im__chat-message-send-bottom-button {
  width: 100%;
  height: 30px;
}

</style>
