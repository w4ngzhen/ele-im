<template>
  <div class="ele-im__chat-panel">
    <div class="ele-im__chat-panel-title">
      <chat-title :title="title" :sub-title="subTitle"/>
    </div>
    <div class="ele-im__chat-panel-content">
      content
    </div>
    <div class="ele-im__chat-panel-send">
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
.ele-im__chat-panel {
  height: 100%;
  width: 100%;
}

.ele-im__chat-panel .ele-im__chat-panel-title {
  height: 60px;
  border-top: 1px #EEEEEE solid;
  width: 100%;
}

.ele-im__chat-panel .ele-im__chat-panel-content {
  height: calc(100% - 210px);
  border-top: 1px #EEEEEE solid;
}

.ele-im__chat-panel .ele-im__chat-panel-send {
  height: 150px;
  border-top: 1px #EEEEEE solid;
}

</style>
