<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import { ajax } from "@/util/ajax";
// import cookie from "js-cookie";

export default {
  provide() {
    return {
      app: this
    };
  },
  components: {
  },
  // watch: {
  //   $route() {
  //     console.log("app:", this.$route.path);
  //     if (this.$route.path !== "/home") this.isHome = false;
  //     else this.isHome = true;
  //   }
  // },
  data() {
    return {
      componentMenu: [],
      userInfo: {},
      token: ""
    };
  },
  methods: {
    getUserInfo() {
      // const token = cookie.get("token");
      // ajax({
      //   urlKey: "/api/user/get",
      //   methods: "POST",
      //   data: {
      //     token: token
      //   }
      // }).then(res => {
      //   this.userInfo = res.data;
      // });
    }
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>
<style lang="less">
#app {
  color: #2c3e50;
}
</style>
