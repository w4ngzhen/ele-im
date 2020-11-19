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
        <div class="title-div"><p class="ele-im__overflow-p">{{ title }}</p></div>
        <div class="datetime-div"><p class="ele-im__overflow-p">{{ datetime }}</p></div>
      </div>
      <div class="chat-abstract-line">
        <div class="abstract-div"><p class="ele-im__overflow-p">{{ abstract }}</p></div>
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
    datetime() {
      let datetime = this._.get(this.data, 'datetime', '');
      return this.$dateHelper.chatListItemTimeFormatter(datetime);
    }
  }
};
</script>

<style scoped>

.ele-im__recent-chat {
  display: flex; /* flex 布局 */
  width: 235px;
  height: 55px;
  overflow: hidden;
  transform: translate(0, 0); /* 修复提示消息定位问题 */
}

.ele-im__overflow-p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
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

.ele-im__recent-chat-info {
  width: 180px;
  height: 55px;
}

.ele-im__recent-chat-info .chat-title-line {
  display: flex;

  width: 180px;
  height: 30px;

  line-height: 30px;
}

.ele-im__recent-chat-info .chat-title-line .title-div p {
  width: 135px;
  height: 30px;
}

.ele-im__recent-chat-info .chat-title-line .datetime-div p {
  width: 45px;
  height: 30px;
  font-size: 14px;
}


.ele-im__recent-chat-info .chat-abstract-line {
  width: 180px;
  height: 25px;
  font-size: 14px;
  color: #8d8c8c;
}

</style>
