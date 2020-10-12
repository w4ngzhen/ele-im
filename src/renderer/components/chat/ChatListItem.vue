<template>
  <div class="item">
    <div class="avatar-wrapper">
      <img :src="avatar" alt=""/>
    </div>
    <div class="chat-item-info">
      {{ title }}
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
  height: 55px;
}

.avatar-wrapper {
  float: left;
  height: 100%;
  width: 55px;
}

.avatar-wrapper img {
  width: 45px;
  height: 45px;
  margin: 5px;
}

.chat-item-info {
  position: relative;
  height: 100%;
  margin-left: 55px;
}
</style>
