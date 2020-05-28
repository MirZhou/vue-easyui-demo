<template>
  <nav class="menu">
    <router-link :to="{name:'home'}" exact>Home</router-link>
    <router-link :to="{name:'faq'}">FAQ</router-link>
    <router-link :to="{name:'systemMenu'}">菜单管理</router-link>
    <router-link :to="{name:'systemRoleAuthorizate'}">角色授权</router-link>
  </nav>
</template>

<style lang="stylus" scoped>
@import '../style/imports';

.menu {
  a {
    text-decoration: none;

    &:hover {
      border-bottom-color: $primary-color;
    }

    &.router-link-active {
      border-bottom-color: $primary-color;
    }
  }
}
</style>