<template>
    <main class="assembly">
        <container
            :anchor-link="anchorLink"
            attribute-name
            :loffset="80"
            :class-name="'.' + codeClassName"
            :update="$route.params.id">
            <!-- 概述 -->
            <h2 class="assembly-component">{{ code.title }}</h2>
            <h2 class="assembly-title">{{ code.summary.name }}</h2>
            <code-summary :data="code.summary"></code-summary>
            <!-- 代码示例 -->
            <h2 class="assembly-title" style="margin-bottom: 0">代码示例</h2>
            <code-example
                :code="code.example"
                @dom-loaded="anchorLink = $event"></code-example>
            <!-- API -->
            <h2
                id="API"
                class="assembly-title"
                :class="codeClassName"
                name="API">
                API
            </h2>
            <code-api :data="code.api"></code-api>
        </container>
    </main>
</template>
<script>
import container from '@/components/container/index.vue'
import codeExample from './code/index.vue'
import codeSummary from './summary/index.vue'
import codeApi from './code-api'
import { getComponentInfo } from './data'
import { codeClassName } from '@/assets/config/data.js'
export default {
    components: { codeSummary, container, codeExample, codeApi },
    data() {
        return {
            code: {},
            anchorLink: false,
            codeClassName
        }
    },
    watch: {
        /**
         * 监听params.id
         */
        '$route.params.id': {
            handler() {
                this.updateData()
            }
            // deep: true 这里不能设置deep为true
        }
    },
    created() {
        this.updateData()
    },
    methods: {
        /**
         * 获取数据
         */
        updateData() {
            let { id: componentId } = this.$route.params
            this.code = getComponentInfo(componentId)
        }
    }
}
</script>
