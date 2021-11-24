<template>
  <main class="myCode">
    <div v-for="(option, index) in code"
         :key="index"
         class="myCode-content"
         :id="option.id"
         :name="option.title">
      <Card>
        <div class="myCode-case">

          <my-display :code="option.content"
                      :componentId="option.id"></my-display>
        </div>
        <header class="myCode-header">
          <span>{{ option.title }}</span>
        </header>

        <div class="myCode-desc">
          <p v-html='option.desc'></p>
        </div>
        <div class='myCode-body'>
          <div class='myCode-body-run'>
            <span @click='copy(option.content)'
                  style='margin-right:8px'>
              <Icon type="md-copy" />复制
            </span>
            <span @click='run(option.id)'>
              <Icon type="md-play" />运行
            </span>
          </div>
          <my-transition :value="option.content"></my-transition>
        </div>

      </Card>
    </div>
  </main>
</template>

<script>
import myDisplay from "../display";
import myTransition from "../my-transition";
import Clipboard from "clipboard";

export default {
  components: { myDisplay, myTransition },
  props: {
    code: Array,
  },
  methods: {
    copy(content) {
      const clipboard = new Clipboard(".myCode-body-run", {
        text() {
          return content;
        },
      });
      clipboard.on("success", (e) => {
        e.clearSelection();
        clipboard.destroy();
        this.$Message.success("Code copied");
      });
    },
    setDomLoaded() {
      this.$nextTick(() => {
        this.$emit("dom-loaded", true);
      });
    },
    run(exampleId) {
      let { id } = this.$route.params;
      let { href } = this.$router.resolve({
        name: "runComponents",
        params: {
          id,
          exampleId,
        },
      });
      window.open(href, "_blank");
    },
  },
  watch: {
    code: function () {
      this.setDomLoaded();
    },
  },
  mounted() {
    this.setDomLoaded();
  },
};
</script>
