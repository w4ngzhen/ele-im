<template>
  <div class="chat-panel">
    <div class="chat-panel-title">
      <chat-title :title="title" :sub-title="subTitle"/>
    </div>
    <div class="chat-panel-content">
      content
    </div>
    <div class="chat-panel-send">
      send
    </div>
  </div>
</template>

<script>
import ChatTitle from "./ChatTitle";

export default {
  name: "ChatPanel",
  components: {ChatTitle},
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
    }
  }
};
</script>

<style scoped>
.chat-panel {
  height: 100%;
  width: 100%;
}

.chat-panel .chat-panel-title {
  height: 60px;
  border-top: 1px #EEEEEE solid;
  width: 100%;
}

.chat-panel .chat-panel-content {
  height: calc(100% - 210px);
  border-top: 1px #EEEEEE solid;
}

.chat-panel .chat-panel-send {
  height: 150px;
  border-top: 1px #EEEEEE solid;
}

</style>
