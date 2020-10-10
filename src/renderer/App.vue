<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
export default {
  name: 'ele-im',
  data() {
    return {
      defaultLayout: 'main-layout',
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || this.defaultLayout);
    }
  },
};
</script>

<style>
/* CSS */
</style>
