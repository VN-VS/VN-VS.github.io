<template>
    <main class="stylelib-detail">
        <Card>
            <template v-if="!renderError">
                <div id="render-mounted"></div>
            </template>
            <div v-else class="error">
                {{ renderError }}
            </div>
        </Card>
    </main>
</template>
<script>
import Vue from 'vue'
import { getComponentInfo } from '@/assets/data/stylelib'
export default {
    name: 'StylelibDetail',
    data() {
        return {
            renderError: ''
        }
    },
    watch: {
        // 监听params.id
        '$route.params.id'() {
            this.render()
        }
    },
    mounted() {
        this.render()
    },
    methods: {
        // 渲染
        render() {
            try {
                let { id: styleId } = this.$route.params
                const com = getComponentInfo(styleId)
                const ComConstructor = Vue.extend(com)
                const instance = new ComConstructor()
                instance.$mount('#render-mounted')
            } catch (error) {
                this.renderError = error.message
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import 'index.less';
</style>
