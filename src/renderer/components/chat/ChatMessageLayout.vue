<template>
  <div v-if="messageType === 'tip'" class="ele-im__chat-message-tip">
    <chat-tip-message :data="content"/>
  </div>
  <div v-else class="ele-im__chat-message-layout-normal">
    <div class="ele-im__chat-message-layout-left-avatar">
      <img v-if="!imSender"
           :src="avatar" alt=""/>
    </div>
    <div class="ele-im__chat-message-layout-middle">
      <div class="ele-im__chat-message-layout-tiny-text">
        <p :style="{float: imSender ? 'right': 'left'}">
          {{ tinyText }}
        </p>
      </div>
      <div class="ele-im__chat-message-layout-content">
        <chat-text-message v-if="messageType === 'text'"
                           :text="content"
                           :background-color="imSender ? myMsgColor : notMyMsgColor"
                           :float="imSender ? 'right' : 'left'"/>
      </div>
    </div>
    <div class="ele-im__chat-message-layout-right-avatar">
      <img v-if="imSender"
           :src="avatar" alt=""/>
    </div>
  </div>
</template>

<script>
import ChatTextMessage from "./message/ChatTextMessage";
import ChatTipMessage from "./message/ChatTipMessage";

export default {
  name: "ChatMessageLayout",
  components: {ChatTipMessage, ChatTextMessage},
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    messageType() {
      return this._.get(this.data, 'messageType', 'text');
    },
    imSender() {
      return this._.get(this.data, 'imSender', false);
    },
    avatar() {
      let avatar = this._.get(this.data, 'avatar', '');
      if (avatar === '') {
        return require('@/assets/avatar.jpg');
      }
      return avatar;
    },
    tinyText() {
      return this._.get(this.data, 'tinyText', '');
    },
    content() {
      return this._.get(this.data, 'content', '');
    },
    myMsgColor() {
      return '#7ab6f5';
    },
    notMyMsgColor() {
      return '#efe8b5';
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.ele-im__chat-message-tip {
  width: 100%;
  height: 25px;
}

.ele-im__chat-message-layout-normal {
  display: flex;
}

.ele-im__chat-message-layout-left-avatar {
  width: 55px;
  height: 100%;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
}

.ele-im__chat-message-layout-left-avatar img {
  width: 45px;
  height: 45px;
}

.ele-im__chat-message-layout-right-avatar {
  width: 55px;
  height: 100%;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
}

.ele-im__chat-message-layout-right-avatar img {
  width: 45px;
  height: 45px;
}

.ele-im__chat-message-layout-middle {
  width: calc(100% - 55px - 55px);
  height: 100%;
}

.ele-im__chat-message-layout-tiny-text {
  height: 25px;
}

.ele-im__chat-message-layout-tiny-text p {
  font-size: 12px;
  color: #505050;
  line-height: 25px;
  margin: 0;
}

.ele-im__chat-message-layout-content {
  width: 100%;
  height: 100%;
}
</style>
