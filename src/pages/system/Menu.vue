<template>
  <div class="tree-grid">
    <TreeGrid :fit="true" :data="data" idField="id" treeField="menuName">
      <GridColumn field="menuName" title="菜单名称"></GridColumn>
      <GridColumn field="menuCode" title="菜单代码"></GridColumn>
      <GridColumn field="sortValue" title="排序值"></GridColumn>
    </TreeGrid>
  </div>
</template>
 
<script>
// 导入菜单JSON数据
import menuData from "../../assets/json/menu.json";

export default {
  data() {
    return {
      data: menuData
    };
  }
};
</script>

<style lang="stylus">
.tree-grid {
  margin-top: 6em;
}
</style>