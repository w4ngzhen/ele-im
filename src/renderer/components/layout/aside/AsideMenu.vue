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
           @click="menu.subMenus ? () => {} : menuClick(menu)"
           class="ele-im__aside-menu-item-wrapper"
           :class="isCurrentIndex(menu) ? 'ele-im__aside-menu-item-selected' : ''"
           :title="menu.desc">
        <div v-show="displayMenuPointTip(menu)"
             class="ele-im__menu-point-tip"></div>
        <i :class="menu.icon"/>

        <!-- 底部菜单会有hover时候，右侧弹出的菜单场景 -->
        <ul v-if="menu.subMenus"
            class="ele-im__aside-menu-item-sub-menus">
          <li v-for="subMenu in menu.subMenus"
              :key="subMenu.index" :title="''">
            {{ subMenu.desc }}
          </li>
        </ul>
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
        {index: 'chat', icon: 'fa fa-commenting-o', desc: '聊天'},
        {index: 'address-book', icon: 'fa fa fa-address-book-o', desc: '通讯录'},
      ],
      bottomMenus: [
        {
          index: 'more', icon: 'fa fa-bars', desc: '更多',
          subMenus: [
            {index: 'settings', icon: '', desc: '设置'},
            {index: 'update', icon: '', desc: '更新'},
            {index: 'about', icon: '', desc: '关于'},
          ]
        },
        {
          index: 'function', icon: 'fa fa-codepen', desc: '功能'
        },
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
  border-radius: 5px;
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

  display: flex;
  flex-direction: column-reverse;
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

.ele-im__aside-menu-item-wrapper:hover > .ele-im__aside-menu-item-sub-menus {
  box-shadow: 0 0 10px #ccc;
  display: block;
}

.ele-im__aside-menu-item-sub-menus {
  display: none;
  position: absolute;
  left: 60px;
  bottom: 0;
  z-index: 999;
  background: #fff;
  border: 1px #f7f7f7 solid;
  border-radius: 5px;
  width: 10%;
  margin: 0;
  padding: 0;
  color: #205D67;
  list-style: none;
  font-size: 14px;
}


.ele-im__aside-menu-item-sub-menus li {
  width: 100%;
  height: 35px;

  line-height: 35px;
}

.ele-im__aside-menu-item-sub-menus li:hover {
  background-color: #e8eef7;
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
