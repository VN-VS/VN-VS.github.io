<style>
.addAssembly {
  padding: 20px;
  display: flex;
}
</style>
<template>
  <main class="addAssembly">
        <Input
        style='width:600px'
          v-model="formCustom.html"
          type="textarea"
          :autosize="{ minRows: 15, maxRows: 30 }"
          placeholder="请输入..."
        ></Input>
      <my-display :code="formCustom.html" ref="refDisplay" style='margin-left:16px'></my-display>
  </main>
</template>
<script>
import myDisplay from "./display";
// import defaultCode from "./default-code.js";
import transferCode from "@/assets/data/component/transfer/code.js";

export default {
  components: { myDisplay },
  data() {
    return {
      formCustom: {
        name: "",
        details: "",
        html: transferCode[0].content
      },
      ruleCustom: {
        name: [
          {
            required: true,
            message: "请填写名称",
            trigger: "blur"
          }
        ],
        details: [
          {
            required: true,
            message: "请填写详情",
            trigger: "blur"
          }
        ],
        html: [
          {
            required: true,
            message: "请填写代码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created(){
    console.log(this.$route.params.id)
    transferCode.find(item=>item.id===transferCode)
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
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
    }
  }
};
</script>
