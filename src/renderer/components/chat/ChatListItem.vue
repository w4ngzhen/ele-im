<template>
  <div class="item">
    <div class="chat-item-avatar-wrapper">
      <img :src="avatar" alt=""/>
    </div>
    <div class="chat-item-info">
      <div class="chat-title-line">
        <div class="title-div"><p class="hidden-p">{{ title }}</p></div>
        <div class="datetime-div"><p class="hidden-p">{{ datetime }}</p></div>
      </div>
      <div class="chat-abstract-line">
        <div class="abstract-div"><p class="hidden-p">{{ abstract }}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatListItem",
  props: {
    data: {
      type: Object,
    }
  },
  computed: {
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
      return datetime;
    }
  }
};
</script>

<style scoped>

.item {
  display: flex; /* flex 布局 */
  width: 235px;
  height: 55px;
  overflow: hidden;
}

div * {
  box-sizing: border-box; /* 以Border作为盒子模型尺寸计算 */
}

.hidden-p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}

.chat-item-avatar-wrapper {
  width: 55px;
  height: 55px;
  padding: 5px;
}

.chat-item-avatar-wrapper img {
  width: 45px;
  height: 45px;
}

.chat-item-info {
  width: 180px;
  height: 55px;
}

.chat-item-info .chat-title-line {
  display: flex;

  width: 180px;
  height: 30px;

  line-height: 30px;
}

.chat-item-info .chat-title-line .title-div p {
  width: 135px;
  height: 30px;
}

.chat-item-info .chat-title-line .datetime-div p {
  width: 45px;
  height: 30px;
  font-size: 14px;
}


.chat-item-info .chat-abstract-line {
  width: 180px;
  height: 25px;
  font-size: 14px;
  color: #8d8c8c;
}

</style>
