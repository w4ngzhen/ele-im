<template>
  <div class="ele-im__client-header">
    <div class="ele-im__client-header-bar-head"
         :style="headStyle"></div>
    <div class="ele-im__client-header-bar-tail"
         :style="tailStyle">
      <div class="ele-im__client-header-bar-buttons-drag">
      </div>
      <div class="ele-im__client-header-bar-buttons">
        <button class="ele-im__client-header-button">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <button class="ele-im__client-header-button">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientHeader",
  props: {
    barHeadBackgroundColor: {
      type: String,
      default() {
        return '#FFF';
      }
    },
    barTailBackgroundColor: {
      type: String,
      default() {
        return '#FFF';
      }
    },
    barTailWidth: {
      type: String,
      default() {
        return '400px';
      }
    },
    borderBottom: {
      type: String,
      default() {
        return '1px solid #EEE';
      }
    }
  },
  computed: {
    headStyle() {
      return {
        width: `calc(100% - ${this.barTailWidth})`,
        backgroundColor: this.barHeadBackgroundColor,
        borderBottom: this.borderBottom,
      };
    },
    tailStyle() {
      return {
        width: this.barTailWidth,
        backgroundColor: this.barTailBackgroundColor,
        borderBottom: this.borderBottom,
      };
    }
  }
};
</script>

<style scoped>
.ele-im__client-header {
  width: 100%;
  /* 高度由外部定义 */
  display: flex;
}

.ele-im__client-header-bar-head {
  width: calc(100% - 400px); /* 减去下面tail宽度 */
  height: 100%;
  -webkit-app-region: drag;
}

.ele-im__client-header-bar-tail {
  width: 400px;
  height: 100%;

  display: flex;
}

.ele-im__client-header-bar-buttons-drag {
  width: calc(100% - 100px);
  height: 100%;
  -webkit-app-region: drag;
}

.ele-im__client-header-bar-buttons {
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.ele-im__client-header-button {
  display: inline-block;
  box-sizing: border-box;

  width: 45px;
  height: 100%;

  border: none;
  background: none;
}

.ele-im__client-header-button:hover {
  cursor: pointer;
  background-color: #EEE;
}

</style>
