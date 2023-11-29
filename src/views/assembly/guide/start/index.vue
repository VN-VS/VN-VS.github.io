<template>
    <main class="start">
        <h2 class="start-title">快速上手</h2>
        <p class="start-info">
            本文将介绍如何使用组件库。跟随以下指引，开启愉悦的开发旅程
        </p>
        <h2 class="start-secondary-title">NPM 安装</h2>
        <div class="start-container">
            <render-code code-class="code" :data="npmInstall"></render-code>
        </div>
        <h2 class="start-secondary-title">引入 Ry Design</h2>
        <p class="start-info">
            一般在 webpack 入口页面
            <code>main.js</code>
            中如下配置
        </p>
        <div class="start-container" style="margin-top: 8px">
            <render-code
                code-class="code"
                :data="globalConfiguration"></render-code>
        </div>
    </main>
</template>

<script>
import renderCode from '@/components/render-code/index.vue'
import globalConfiguration from '@/assets/data/guide/start/index.vuetext'

export default {
    components: { renderCode },
    props: {},
    data() {
        return {
            npmInstall: '$ npm install ry-design -save',
            globalConfiguration: globalConfiguration.content
        }
    }
}
</script>
<style lang='less' scoped>
@import 'index.less';
</style>