<template>
  <div class="ele-im__chat-picture-message">
    <img :src="pictureSrc" alt=""/>
  </div>
</template>

<script>
export default {
  name: "ChatPictureMessage",
  props: {
    content: {
      type: String,
    },
    backgroundColor: {
      type: String,
    }
  },
  computed: {
    pictureSrc() {
      let msgBody = this.pictureMessageBody;
      if (msgBody.subType === 'id') {
        return `http://localhost:9090/public/images/${msgBody.data}`;
      } else {
        return msgBody.data;
      }
    },
    /**
     * 解析模块
     * */
    pictureMessageBody() {
      let strArr = this.content.split('|');
      let subType = strArr[0];
      let data = strArr[1];
      return {
        subType,
        data,
      }
    }
  }
};
</script>

<style scoped>
.ele-im__chat-picture-message {
  max-width: 80%;
  max-height: 300px;

  overflow: scroll;
}

.ele-im__chat-picture-message:hover {
  cursor: pointer;
}

</style>
