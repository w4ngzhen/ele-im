<template>
  <div class="ele-im__base-button">

  </div>
</template>

<script>
export default {
  name: "EleImButton",
  props: {
    content: {
      type: String,
      default() {
        return '';
      }
    },
    icon: {
      type: String,
      default() {
        return '';
      }
    }
  }
};
</script>

<style scoped>
.ele-im__base-button {
  border: 1px cornflowerblue solid;
  border-radius: 5px;

  text-align: center;
  font-size: 14px;
}


</style>
