<template>
    <rd-layout-module-config :slot-list="slotList" :height="782">
        <template #basic>
            <rd-layout-module-view title="基本信息">
                <div slot="header">
                    <a>配置</a>
                </div>
                <basic slot="main"></basic>
            </rd-layout-module-view>
        </template>
        <template #single-text>
            <rd-layout-module-view title="单类文本回显">
                <div slot="header">
                    <a>配置</a>
                </div>
                <single-text slot="main"></single-text>
            </rd-layout-module-view>
        </template>
        <template #multi-text>
            <rd-layout-module-view title="多类文本&图文回显">
                <div slot="header">
                    <a>配置</a>
                </div>
                <multi-text slot="main"></multi-text>
            </rd-layout-module-view>
        </template>
    </rd-layout-module-config>
</template>
<script>
import basic from './basic'
import singleText from './single-text'
import multiText from './multi-text'

export default {
    components: {
        basic,
        singleText,
        multiText
    },
    data() {
        return {
            slotList: [['basic'], ['single-text'], ['multi-text']]
        }
    }
}
</script>
<style lang="less" scoped>
@import 'index.less';
</style>