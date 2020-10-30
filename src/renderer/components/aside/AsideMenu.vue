<template>
  <div class="ele-im__aside-menu">
    <div class="ele-im__aside-avatar">
      <img :src="avatar" alt=""/>
    </div>
    <div class="ele-im__aside-top-menu">
      <div v-for="menu in topMenus"
           :key="menu.index"
           @click="menuClick(menu)"
           class="ele-im__aside-menu-item-wrapper"
           :class="isCurrentIndex(menu) ? 'ele-im__aside-menu-item-selected' : ''">
        <div v-show="displayMenuPointTip(menu)"
             class="ele-im__menu-point-tip"></div>
        <i :class="menu.icon"/>
      </div>
    </div>
    <div class="ele-im__aside-bottom-menu">
      <div v-for="menu in bottomMenus"
           :key="menu.index"
           @click="menuClick(menu)"
           class="ele-im__aside-menu-item-wrapper"
           :class="isCurrentIndex(menu) ? 'ele-im__aside-menu-item-selected' : ''">
        <div v-show="displayMenuPointTip(menu)"
             class="ele-im__menu-point-tip"></div>
        <i :class="menu.icon"/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AsideMenu",
  computed: {
    avatar() {
      return require('@/assets/avatar.jpg');
    },
    allUnreadChatMessageNumber() {
      return this.$store.state.allUnreadChatMessageNumber;
    }
  },
  data() {
    return {
      topMenus: [
        {index: 'chat', icon: 'fa fa-commenting-o', tip: '聊天'},
        {index: 'address-book', icon: 'fa fa fa-address-book-o', tip: '通讯录'},
      ],
      bottomMenus: [
        {index: 'settings', icon: 'fa fa-cog', tip: '设置'},
      ],
    };
  },
  methods: {
    isCurrentIndex(menuItem) {
      return this.$route.path.indexOf(menuItem.index) >= 0;
    },
    menuClick(menuItem) {
      this.$router.push('/' + menuItem.index);
    },
    displayMenuPointTip(menu) {
      return menu.index === 'chat' && this.allUnreadChatMessageNumber > 0;
    }
  }
};
</script>

<style scoped>
.ele-im__aside-menu {
  width: 60px;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: dodgerblue;

}

.ele-im__aside-avatar {
  width: 100%;
  height: 60px;
}

.ele-im__aside-avatar img {
  width: 45px;
  height: 45px;
  margin: 7px;
}

.ele-im__aside-top-menu {
  width: 100%;
  height: calc(100% - 300px - 60px);
  background-color: transparent;
}

.ele-im__aside-bottom-menu {
  width: 100%;
  height: 300px;
  background-color: transparent;
}

.ele-im__aside-menu-item-wrapper {
  width: 100%;
  height: 50px;
  color: white;
  font-size: 22px;
  text-align: center;
  line-height: 50px;
  opacity: 0.7;
}

.ele-im__aside-menu-item-wrapper:hover {
  cursor: pointer;
  opacity: 1;
}

.ele-im__aside-menu-item-selected {
  opacity: 1;
  background-color: #145ea5;
}

.ele-im__menu-point-tip {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: red;
}
</style>
