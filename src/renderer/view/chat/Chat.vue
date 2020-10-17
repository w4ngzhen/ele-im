<template>
  <div class="ele-im__chat-page">
    <div class="ele-im__chat-list-side">
      <div class="ele-im__info-search">
        <el-input class="ele-im__search-input"
                  placeholder="搜索联系人"
                  prefix-icon="el-icon-search"
                  size="mini"/>
      </div>
      <div class="ele-im__chat-list">
        <div class="ele-im__chat-list-item-wrapper"
             v-for="item in chatListItems"
             @click="chatListItemClick(item)">
          <chat-list-item :data="item"/>
        </div>
      </div>
    </div>
    <div class="ele-im__chat-panel-div">
      <chat-panel v-if="currentChatInfo" :chat-info="currentChatInfo"/>
    </div>
  </div>
</template>

<script>
import ChatListItem from "../../components/chat/ChatListItem";
import ChatPanel from "../../components/chat/ChatPanel";

export default {
  name: "Chat",
  components: {ChatPanel, ChatListItem},
  created() {
    let count = 20;
    for (let idx = 0; idx < count; idx++) {
      this.chatListItems.push({
        id: '' + idx,
        avatar: '',
        title: '' + idx + '-Title这是一个很长很长的标题很长很长的标题',
        abstract: '这是一个段比较长的数据，很长很长',
        datetime: '2020-10-10 23:23:23'
      });
    }
  },
  data() {
    return {
      chatListItems: [],
      currentChatInfo: undefined
    };
  },
  methods: {
    chatListItemClick(item) {
      this.currentChatInfo = {
        title: item.title,
        subTitle: "subtitle",
      };
    }
  }
};
</script>

<style scoped>

.ele-im__chat-page {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.ele-im__chat-list-side {
  width: 250px;
  height: 100%;
  float: left;
  border: 1px #EEEEEE solid;
}

.ele-im__info-search {
  height: 60px;
  border-bottom: 1px #EEEEEE solid;
}

.ele-im__info-search .ele-im__search-input {
  width: 230px;
  margin: 10px;
}

.ele-im__chat-list {
  height: calc(100% - 60px);
  width: 100%;
  overflow-y: scroll;
}

.ele-im__chat-list-item-wrapper {
  padding: 5px;
  border-bottom: 1px #EEEEEE solid;
}

.ele-im__chat-list-item-wrapper:hover {
  cursor: pointer;
  background-color: #EEEEEE;
}

.ele-im__chat-panel-div {
  width: calc(100% - 250px);
  height: 100%;
  position: relative;
  margin-left: 250px;
}

/* 滚动条 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #EEEEEE;
}
</style>
