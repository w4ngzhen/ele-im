<template>
  <div v-if="messageType === 'tip'" class="ele-im__chat-message-tip">
    <chat-tip-message :data="content"/>
  </div>
  <div v-else class="ele-im__chat-message-layout-normal"
       :style="{flexDirection : imSender ? 'row-reverse' : 'row' }">
    <!-- 头像区域 -->
    <div class="ele-im__chat-message-layout-avatar">
      <img :src="avatar" alt=""/>
    </div>
    <!-- 内容区域 -->
    <div class="ele-im__chat-message-layout-body">
      <!-- 聊天消息上方显示小字 -->
      <div class="ele-im__chat-message-layout-tiny-text">
        <p :style="{float: imSender ? 'right': 'left'}">
          {{ tinyText }}
        </p>
      </div>
      <!-- 聊天内容区域 -->
      <div class="ele-im__chat-message-layout-content"
           :style="{flexDirection: imSender ? 'row-reverse' : 'row'}">
        <!-- 消息内容 -->
        <chat-text-message v-if="messageType === 'text'"
                           :text="content"
                           :background-color="imSender ? myMsgColor : notMyMsgColor"/>
        <!-- 消息标识（发送失败红色感叹号、已读回执等） -->
        <!-- 失败标志。发送失败，显示重试按钮 -->
        <div v-if="assistTip === 'sendError'"
             @click="sendErrorClick"
             class="ele-im__chat-message-layout-content-send-error">
          <p :title="'重发'">!</p>
        </div>
        <!-- 非失败标志。普通文本，直接显示，通常用于放置已读回执 -->
        <div v-else-if="assistTip !== ''"
             class="ele-im__chat-message-layout-content-assist">
          <p>
            {{ assistTip }}
          </p>
        </div>
        <!-- 否则不进行任何操作 -->
      </div>
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
    assistTip() {
      return this._.get(this.data, 'assistTip', '');
    },
    myMsgColor() {
      return '#7ab6f5';
    },
    notMyMsgColor() {
      return '#efe8b5';
    },
  },
  data() {
    return {};
  },
  methods: {
    sendErrorClick() {
      this.$emit('sendErrorClick');
    }
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

.ele-im__chat-message-layout-avatar {
  width: 55px;
  height: 100%;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
}

.ele-im__chat-message-layout-avatar img {
  width: 45px;
  height: 45px;
  border-radius: 5px;
}

.ele-im__chat-message-layout-body {
  width: calc(100% - 55px);
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

  display: flex;
}

.ele-im__chat-message-layout-content-assist {
  width: 40px;
  height: 20px;
  padding: 2px 5px;

  line-height: 15px;
  text-align: center;
}
.ele-im__chat-message-layout-content-assist p {
  display: block;
  box-sizing: border-box;

  margin: 0;
  color: gray;
  font-size: 12px;
}

.ele-im__chat-message-layout-content-send-error {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: red;
  margin: 2px 5px;

  line-height: 15px;
  text-align: center;
}
.ele-im__chat-message-layout-content-send-error p {
  display: block;
  box-sizing: border-box;

  margin: 0;
  color: #EEEEEE;
  font-size: 12px;
}
.ele-im__chat-message-layout-content-send-error p:hover {
  cursor: pointer;
}

</style>
