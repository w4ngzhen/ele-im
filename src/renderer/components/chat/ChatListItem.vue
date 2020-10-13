<template>
  <div class="item">
    <div class="avatar-wrapper">
      <img :src="avatar" alt=""/>
    </div>
    <div class="chat-item-info">
      <div class="title-div">
        <p :title="title">{{ title }}</p>
      </div>
      <div class="datetime-div">

      </div>
      <div class="abstract-div"></div>
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
  width: 250px;
  height: 55px;
}

.avatar-wrapper {
  float: left;
  width: 55px;
  height: 55px;
}

.avatar-wrapper img {
  width: 45px;
  height: 45px;
  margin: 5px;
}

.chat-item-info {
  height: 55px;
  width: 195%;
  margin-left: 55px;
}

.chat-item-info .title-div {
  width: 180px;
  overflow: hidden;
}

.chat-item-info .title-div p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
