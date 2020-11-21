<template>
  <div class="ele-im__chat-page">
    <div class="ele-im__recent-chat-list-side">
      <div class="ele-im__info-search">
        <el-input class="ele-im__search-input"
                  placeholder="搜索联系人"
                  prefix-icon="el-icon-search"
                  size="mini"/>
      </div>
      <div class="ele-im__recent-chat-list">
        <div class="ele-im__recent-chat-wrapper"
             v-for="(recentChatItem, index) in recentChatList"
             @click="recentChatItemClick({recentChatItem, index})">
          <recent-chat :data="recentChatItem"/>
        </div>
      </div>
    </div>
    <div class="ele-im__chat-panel-div">
      <chat-panel v-if="currentChatInfo" :chat-info="currentChatInfo"/>
    </div>
  </div>
</template>

<script>
import RecentChat from "../../components/chat/RecentChat";
import ChatPanel from "../../components/chat/ChatPanel";

export default {
  name: "ChatPage",
  components: {ChatPanel, RecentChat},
  computed: {
    recentChatList() {
      return this.$store.state.recentChatListState.recentChatList;
    }
  },
  watch: {},
  created() {
    this.$store.commit('clearRecentChatList');
    let count = 5;
    for (let idx = 0; idx < count; idx++) {
      let item = {
        id: '' + idx,
        avatar: '',
        title: '' + idx + '-Title这是一个很长很长的标题很长很长的标题',
        abstract: '这是一个段比较长的数据，很长很长',
        datetime: '2020-10-10 23:23:23',
        unreadNumber: 8
      };
      this.$store.commit('addRecentChat', item);
    }
  },
  data() {
    return {
      currentChatInfo: undefined
    };
  },
  methods: {
    recentChatItemClick({recentChatItem, index}) {
      this.removeUnreadChatMessageNumber(index);
      this.currentChatInfo = {
        title: recentChatItem.title,
        subTitle: "subtitle",
        messages: [
          {messageType: 'text', avatar: '', tinyText: 'zhen', imSender: true, content: '这是一些文字'},
          {
            messageType: 'text',
            avatar: '',
            tinyText: 'zhen',
            imSender: false,
            content: '这是一些sdfsafsfsaf很sdfsdfsafsfasdfsdfsdfs的文字'
          },
          {
            messageType: 'text',
            avatar: '',
            tinyText: 'zhen',
            imSender: true,
            content: '这是一些sdfsafsfsaf很sdfsdfsafsfasdfsdfsdfs的文字',
            assistTip: 'sendError',
          },
          {messageType: 'tip', avatar: '', tinyText: 'zhen', imSender: true, content: '这是一段提示文字'},
          {
            messageType: 'text',
            avatar: '',
            tinyText: 'zhen',
            imSender: false,
            content: '这是一些sdfsafsfsaf很sdfsdfsafsfasdfsdfsdfs的文字'
          },
          {
            messageType: 'text',
            avatar: '',
            tinyText: 'zhen',
            imSender: false,
            content: '这是一些sdfsafsfsaf很sdfsdfsafsfasdfsdfsdfs的文字'
          },
          {
            messageType: 'text',
            avatar: '',
            tinyText: 'zhen',
            imSender: true,
            content: '这是一些sdfsafsfsaf很sdfsdfsafsfasdfsdfsdfs的文字',
            assistTip: '已读',
          },
        ]
      };
    },
    removeUnreadChatMessageNumber(index) {
      this.$store.commit('setRecentChatUnreadNumber', {unreadNumber: 0, index});
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

.ele-im__recent-chat-list-side {
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

.ele-im__recent-chat-list {
  height: calc(100% - 60px);
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.ele-im__recent-chat-wrapper {
  padding: 5px;
  border-bottom: 1px #EEEEEE solid;
}

.ele-im__recent-chat-wrapper:hover {
  cursor: pointer;
  background-color: #EEEEEE;
}

.ele-im__chat-panel-div {
  width: calc(100% - 250px);
  height: 100%;
  position: relative;
  margin-left: 250px;
}

</style>
