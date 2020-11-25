<template>
  <div class="ele-im__chat-picture-message">
    <img :src="imageSrc" alt=""/>
  </div>
</template>

<script>
export default {
  name: "ChatPictureMessage",
  props: {
    content: {
      type: String,
      default() {
        return undefined;
      }
    },
    backgroundColor: {
      type: String,
    }
  },
  computed: {
    imageSrc() {

    }
  }
};
</script>

<style scoped>

</style>
