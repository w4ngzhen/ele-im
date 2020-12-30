<template>
  <div class="ele-im__recent-chat">
    <div v-if="unreadNumber > 0" class="ele-im__recent-chat-unread-number">
      {{ unreadNumber > 99 ? '99.' : unreadNumber }}
    </div>
    <div class="ele-im__recent-chat-avatar-wrapper">
      <img :src="avatar" alt=""/>
    </div>
    <div class="ele-im__recent-chat-info">
      <div class="chat-title-line">
        <p class="ele-im__overflow-p ele-im__chat-title-name">{{ title }}</p>
        <p class="ele-im__overflow-p ele-im__chat-message-time">{{ messageTime }}</p>
      </div>
      <div class="chat-abstract-line">
        <p class="ele-im__overflow-p ele-im__chat-abstract-content">{{ abstract }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentChat",
  props: {
    data: {
      type: Object,
    }
  },
  computed: {
    unreadNumber() {
      return this._.get(this.data, 'unreadNumber', 0);
    },
    avatar() {
      let avatar = this._.get(this.data, 'avatar', '');
      if (avatar === '') {
        return require('@/assets/avatar.jpg');
      }
      return avatar;
    },
    title() {
      return this._.get(this.data, 'title', '');
    },
    abstract() {
      return this._.get(this.data, 'abstract', '');
    },
    messageTime() {
      let messageTime = this._.get(this.data, 'messageTime', '');
      return this.$dateHelper.chatListItemTimeFormatter(messageTime);
    }
  }
};
</script>

<style scoped>

.ele-im__overflow-p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}

.ele-im__recent-chat-unread-number {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: red;

  color: white;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
}

.ele-im__recent-chat {
  display: flex; /* flex 布局 */
  width: 100%;
  height: 55px;
  overflow: hidden;
  transform: translate(0, 0); /* 修复提示消息定位问题 */
}

.ele-im__recent-chat-avatar-wrapper {
  width: 55px;
  height: 55px;
  padding: 5px;
}

.ele-im__recent-chat-avatar-wrapper img {
  width: 45px;
  height: 45px;
  border-radius: 5px;
}

.ele-im__recent-chat-info {
  width: calc(100% - 55px); /* 100%指该组件宽度，55px指头像Wrapper宽度 */
  height: 55px;
}

.ele-im__recent-chat-info .chat-title-line {
  display: flex;

  width: 100%; /* 100%指ele-im__recent-chat-info宽度 */
  height: 30px;

  line-height: 30px;
}

.chat-title-line .ele-im__chat-title-name {
  width: calc(100% - 45px); /* 100%指chat-title-line宽度，45px指message-time宽度 */
  font-size: 14px;
}

.chat-title-line .ele-im__chat-message-time {
  width: 45px;
  font-size: 12px;
}

.ele-im__recent-chat-info .chat-abstract-line {
  width: 100%; /* 100%指ele-im__recent-chat-info */
  height: 25px;

  line-height: 25px;

}

.chat-abstract-line .ele-im__chat-abstract-content {
  font-size: 14px;
  color: #8d8c8c;
}

</style>
