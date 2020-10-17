<template>
  <div :style="textMessageStyle">
    <div class="ele-im__message-left-avatar">
      <img v-show="!myMessage" :src="avatar" alt=""/>
    </div>
    <div class="ele-im__message-text-content">
      <div class="ele-im__message-tiny-text">
        <p :style="tinyTextStyle">{{ tinyText }}</p>
      </div>
      <div class="ele-im__message-content-text">
        <p>{{ contentText }}</p>
      </div>
    </div>
    <div class="ele-im__message-right-avatar">
      <img v-show="myMessage" :src="avatar" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextMessage",
  props: {
    data: {
      type: Object,
      default() {
        return '';
      }
    },
  },
  computed: {
    textMessageStyle() {
      return {
        display: 'flex',
        // 不设置高度让高度被撑起
      };
    },
    tinyTextStyle() {
      return {
        float: this.myMessage ? 'right' : 'left'
      }
    },
    myMessage() {
      return this._.get(this.data, 'myMessage', true);
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
    contentText() {
      return this._.get(this.data, 'contentText', '');
    },
  }
};
</script>

<style scoped>

.ele-im__message-left-avatar {
  box-sizing: border-box;
  width: 55px;
  height: 100%;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
}

.ele-im__message-left-avatar img {
  width: 45px;
  height: 45px;
}

.ele-im__message-right-avatar {
  box-sizing: border-box;
  width: 55px;
  height: 100%;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
}

.ele-im__message-right-avatar img {
  width: 45px;
  height: 45px;
}


.ele-im__message-text-content {
  width: calc(100% - 55px - 55px);
}

.ele-im__message-tiny-text {
  height: 25px;
}

.ele-im__message-tiny-text p {
  font-size: 12px;
  color: #505050;
  line-height: 25px;
  margin: 0;
}

.ele-im__message-content-text {

}

.ele-im__message-content-text p {
  border-radius: 3px;
  background-color: beige;
  padding: 5px;
  margin: 0;

  font-size: 14px;
  word-wrap: break-word;
  word-break: break-all;
}

</style>
