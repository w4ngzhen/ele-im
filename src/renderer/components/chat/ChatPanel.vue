<template>
  <div class="ele-im__chat-panel">
    <div class="ele-im__chat-panel-title">
      <chat-title :title="title" :sub-title="subTitle"/>
    </div>
    <div class="ele-im__chat-panel-message-list">
      <chat-message-layout v-for="data in messages"
                           class="ele-im__chat-panel-message-layout"
                           :data="data"/>
    </div>
    <div class="ele-im__chat-panel-send">
      <chat-message-send @sendMessage="sendMessage"/>
    </div>
  </div>
</template>

<script>
import ChatTitle from "./ChatTitle";
import ChatMessageLayout from "./ChatMessageLayout";
import ChatMessageSend from "./ChatMessageSend";

export default {
  name: "ChatPanel",
  components: {ChatMessageLayout, ChatMessageSend, ChatTitle},
  props: {
    chatInfo: {
      type: Object,
    }
  },
  computed: {
    title() {
      return this._.get(this.chatInfo, 'title', '');
    },
    subTitle() {
      return this._.get(this.chatInfo, 'subTitle', '');
    },
    messages() {
      return this._.get(this.chatInfo, 'messages', []);
    }
  },
  methods: {
    sendMessage(msg) {
      this.$emit('sendMessage', msg);
    }
  }
};
</script>

<style scoped>
.ele-im__chat-panel {
  height: 100%;
  width: 100%;
}

.ele-im__chat-panel .ele-im__chat-panel-title {
  height: 60px;
  border-top: 1px #EEEEEE solid;
  width: 100%;
}

.ele-im__chat-panel .ele-im__chat-panel-message-list {
  height: calc(100% - 210px);
  border-top: 1px #EEEEEE solid;
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.ele-im__chat-panel-message-layout {
  margin: 10px 0;
}

.ele-im__chat-panel .ele-im__chat-panel-send {
  height: 150px;
  border-top: 1px #EEEEEE solid;
}

</style>
