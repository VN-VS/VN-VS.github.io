<template>
  <div id="footerBox">
    <div class="header">RY Design 标准化小组</div>
    <div class="content clearfix">
      <ul>
        <li class="clearfix" v-for="(tm, i) in team" :key="i">
          <div class="teamer" v-for="(tr, j) in tm" :key="j">
            <i
              :style="{
                background: 'url(' + tr.photo + ') no-repeat',
                backgroundSize: 'cover'
              }"
            ></i>
            <span class="name">{{ tr.name }}</span>
            <span class="email">{{ tr.info }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        [
          {
            name: "刘鹏飞",
            info: "pengfei.liu ( 前端工程师 )",
            photo: require("../../assets/img/lpf.png")
          }
        ]
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#footerBox {
  width: 1155px;
  margin: 50px auto 60px;
  text-align: left;
  .header {
    font-family: PingFangSC-Medium;
    color: #17233d 100%;
    font-size: 20px;
    padding-bottom: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #dcdee2;
  }
  ul {
    float: left;
    li {
      .teamer {
        float: left;
        min-width: 360px;
        margin-right: 50px;
        height: 34px;
        line-height: 34px;
        font-family: PingFangSC-Regular;
        color: #17233d;
        font-size: 14px;
        i {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 24px;
          position: relative;
          top: 8px;
        }
        .name {
          display: inline-block;
          min-width: 78px;
          padding: 0 18px;
        }
        .email {
          color: #17233dbd;
        }
      }
    }
  }
}
</style>
