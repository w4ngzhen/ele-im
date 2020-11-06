<template>
  <div class="ele-im__chat-message-send-tool-bar">
    <div v-for="tool in theTools"
         :key="tool.id"
         @click="toolClick(tool)"
         class="ele-im__chat-message-send-tool-item"
         :title="tool.desc"
    ><i :class="tool.icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessageSendToolBar",
  props: {
    tools: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    theTools() {
      // return this.tools;
      return this.demoTools;
    }
  },
  created() {

  },
  data() {
    return {
      // Demo
      demoTools: [
        {id: 'Emoji', icon: 'fa fa-smile-o', desc: '表情'},
        {id: 'File', icon: 'fa fa-file-text-o', desc: '文件'},
        {id: 'Image', icon: 'fa fa-picture-o', desc: '图片'},
        {id: 'ScreenShot', icon: 'fa fa-scissors', desc: '截图'},
        {id: 'HistoryMessage', icon: 'fa fa-history', desc: '历史消息'},
      ]
    };
  },
  methods: {
    toolClick(tool) {
      this.$emit('toolClick', tool);
    }
  }
};
</script>

<style scoped>
.ele-im__chat-message-send-tool-bar {
  display: flex;
  width: 100%;
  height: 35px;
  padding: 2px 10px;
}

.ele-im__chat-message-send-tool-item {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.ele-im__chat-message-send-tool-item:hover {
  cursor: pointer;
}

.ele-im__chat-message-send-tool-item i {
  display: block;
  box-sizing: border-box;

  font-size: 20px;
  color: #505050;
  line-height: 30px;
  margin: 0;
}
</style>
