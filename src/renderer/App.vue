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
  created() {
    this.$ipcRenderer.on('LoginComplete', () => {
      this.$router.push('/chat');
    });
  }
};
</script>

<style>

/* CSS */
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
