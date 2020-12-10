<template>
  <div class="ele-im__client-header">
    <div class="ele-im__client-header-drag-bar"></div>
    <div class="ele-im__client-header-buttons">
      <button class="ele-im__client-header-close-button">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <button class="ele-im__client-header-min-button">
        <i class="fa fa-minus" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientHeader"
};
</script>

<style scoped>
.ele-im__client-header {
  width: 100%;
  display: flex;
  border-bottom: 1px #EEEEEE solid;
}

.ele-im__client-header-drag-bar {
  width: calc(100% - 100px);
  height: 100%;
  -webkit-app-region: drag;
}

.ele-im__client-header-buttons {
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.ele-im__client-header-min-button {
  margin: 5px 5px;
}
.ele-im__client-header-min-button:hover {
  cursor: pointer;
}

.ele-im__client-header-close-button {
  margin: 5px 5px;
}
.ele-im__client-header-close-button:hover {
  cursor: pointer;
}

</style>
