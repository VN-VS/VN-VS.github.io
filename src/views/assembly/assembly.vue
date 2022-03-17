<template>
  <main class="assembly">
    <container :anchorLink="anchorLink"
               attributeName
               :loffset="80"
               className=".myCode-content"
               :update='$route.params.id'>
      <!-- 概述 -->
      <h2 class='assembly-title'>概述</h2>
      <code-summary :data="code.summary"></code-summary>
      <!-- 代码示例 -->
      <h2 class='assembly-title'
          style='margin-bottom:0'>代码示例</h2>
      <code-example :code="code.example"
                    @dom-loaded="anchorLink = $event"></code-example>
      <!-- API -->
      <h2 class='assembly-title myCode-content'
          id="API"
          name="API">API</h2>
      <code-api :data='
          code.api'>
      </code-api>
    </container>
  </main>
</template>
<script>
import container from "./container";
import codeExample from "./code/index.vue";
import codeSummary from "./summary/index.vue";
import codeApi from "./code-api";
import { getComponentInfo } from "./data";
export default {
  inject: ["app"],
  components: { codeSummary, container, codeExample, codeApi },
  data() {
    return {
      code: {},
      anchorLink: false,
    };
  },
  methods: {
    /**
     * 获取数据
     */
    updateData() {
      let { id: componentId } = this.$route.params;
      this.code = getComponentInfo(componentId);
    },
  },
  created() {
    this.updateData();
  },
  watch: {
    /**
     * 监听params.id
     */
    "$route.params.id": {
      handler() {
        this.updateData();
      },
      // deep: true 这里不能设置deep为true
    },
  },
};
</script>
