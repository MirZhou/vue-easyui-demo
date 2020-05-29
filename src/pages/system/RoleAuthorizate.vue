<template>
  <div class="tree-grid">
    <TreeGrid :data="data" idField="id" treeField="menuName" :fit="true" :checkbox="true">
      <GridColumn field="menuName" title="菜单名称"></GridColumn>
      <GridColumn field="menuCode" title="菜单代码"></GridColumn>
      <GridColumn field="dataPermission" title="数据权限">
        <template slot="cell" slot-scope="{row}" v-if="row.id != 0">
          <label>
            <input
              v-bind:name="'dataPermission' + row.id"
              type="radio"
              value="1"
              v-model="row.dataPermission"
            />可见本人
          </label>
          <label>
            <input
              v-bind:name="'dataPermission' + row.id"
              type="radio"
              value="2"
              v-model="row.dataPermission"
            />可见本部门
          </label>
          <label>
            <input
              v-bind:name="'dataPermission' + row.id"
              type="radio"
              value="3"
              v-model="row.dataPermission"
            />可见所有人
          </label>
        </template>
      </GridColumn>
    </TreeGrid>
  </div>
</template>
 
<script>
// 导入菜单JSON数据
import menuData from "../../assets/json/menu.json";

export default {
  data() {
    return {
      data: [
        {
          id: 0,
          menuName: "全部",
          menuCode: "--",
          children: menuData
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.tree-grid {
  margin-top: 6em;

  input {
    &[type=radio] {
      width: unset;
      display: inline;
    }
  }
}
</style>