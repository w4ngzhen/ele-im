<template>
  <div class="chat-page">
    <div class="chat-list-side">
      <div class="info-search">
        <el-input class="search-input"
                  placeholder="搜索联系人"
                  prefix-icon="el-icon-search"
                  size="mini"/>
      </div>
      <div class="chat-list">
        <div class="chat-list-item-wrapper"
             v-for="item in chatListItems"
             @click="chatListItemClick(item)">
          <chat-list-item :data="item"/>
        </div>
      </div>
    </div>
    <div class="chat-panel-div">
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
        abstract: '',
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

.chat-page {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.chat-list-side {
  width: 250px;
  height: 100%;
  float: left;
  border: 1px #EEEEEE solid;
}

.info-search {
  height: 60px;
  border-bottom: 1px #EEEEEE solid;
}

.info-search .search-input {
  width: 230px;
  margin: 10px;
}

.chat-list {
  height: calc(100% - 60px);
  width: 100%;
  overflow-y: scroll;
}

.chat-list-item-wrapper {
  padding: 5px;
  border-bottom: 1px #EEEEEE solid;
}

.chat-list-item-wrapper:hover {
  cursor: pointer;
  background-color: #EEEEEE;
}

.chat-panel-div {
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
