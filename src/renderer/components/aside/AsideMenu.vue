<template>
  <el-menu default-active="1-4-1"
           style="width: 100%;text-align: center"
           class="aside"
           :collapse="true">
    <el-menu-item v-for="menu in menus"
                  :index="menu.index">
      <div class="aside-menu-style">
        <el-tooltip :content="menu.tip" >
          <i :class="menu.icon"></i>
        </el-tooltip>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "AsideMenu",
  data() {
    return {
      menus: [
        {index: '1', icon: 'fa fa-commenting-o', tip: '聊天'},
        {index: '2', icon: 'fa fa fa-address-book-o', tip: '通讯录'},
        {index: '3', icon: 'fa fa-cog', tip: '设置'},
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.aside-menu-style {
  font-size: 20px;
  color: #262626;
}
</style>
