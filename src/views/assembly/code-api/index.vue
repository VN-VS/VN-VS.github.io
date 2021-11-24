<!--
 * @Description: 
 * @version: 
 * @Author: pengfei.liu
 * @Date: 2021-11-22 19:57:50
 * @LastEditors: pengfei.liu
 * @LastEditTime: 2021-11-22 20:13:17
 * @FilePath: ~@src~@views~@assembly~@code-api~@index.vue
-->
<template>
  <main class='code-api'>
    <div v-for='(option,i) in data'
         :key='i'>
      <h2 class='code-api-title'>{{ option.title }}</h2>
      <Table border
             :columns="option.columns"
             :data="option.data"
             class='code-api-table'>
      </Table>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
