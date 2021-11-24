<style>
.run {
  padding: 20px;
  display: flex;
}
</style>
<template>
  <main class="run">
    <Input style='width:600px'
           v-model="formCustom.html"
           type="textarea"
           :autosize="{ minRows: 15, maxRows: 30 }"
           placeholder="请输入..."></Input>
    <my-display :code="formCustom.html"
                ref="refDisplay"
                style='margin-left:16px'></my-display>
  </main>
</template>
<script>
import myDisplay from "../display";
import { getRunTemplate } from "../data";
export default {
  components: { myDisplay },
  data() {
    return {
      formCustom: {
        name: "",
        details: "",
        html: "",
      },
      ruleCustom: {
        name: [
          {
            required: true,
            message: "请填写名称",
            trigger: "blur",
          },
        ],
        details: [
          {
            required: true,
            message: "请填写详情",
            trigger: "blur",
          },
        ],
        html: [
          {
            required: true,
            message: "请填写代码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    let { id: componentId, exampleId } = this.$route.params;
    this.formCustom.html = getRunTemplate(componentId, exampleId);
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
      this.$refs.refDisplay.destroyCode();
    },
    run() {
      this.$refs.refDisplay.renderCode();
    },
  },
};
</script>
