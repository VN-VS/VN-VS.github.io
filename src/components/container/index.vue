<template>
    <div class="doc-box clearfix">
        <!-- v-magnifier -->
        <div class="magnBox doc-box-content">
            <slot></slot>
        </div>
        <div class="doc-box-anchor">
            <my-anchor-link
                v-if="showAnchor && data.length"
                :data="data"
                :loffset="loffset"></my-anchor-link>
        </div>
    </div>
</template>
<script>
import myAnchorLink from './anchor-link/index.vue'
export default {
    components: {
        myAnchorLink
    },
    props: {
        anchorLink: {
            type: Boolean,
            default: false
        },
        tabName: {
            type: String
        },
        className: {
            type: String
        },
        attributeName: {
            type: Boolean,
            default: false
        },
        loffset: {
            type: Number
        },
        update: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            data: [],
            showAnchor: false
        }
    },
    watch: {
        anchorLink: function () {
            this.getDocumentList()
        },
        update() {
            this.$nextTick(() => {
                this.getDocumentList()
            })
        }
    },
    mounted() {
        this.getDocumentList()
    },
    methods: {
        /**
         * 获取指定class名的节点
         * 节点属性id以及内容
         */
        getDocumentList() {
            if (!this.anchorLink) {
                return false
            }
            let allEles = document.querySelectorAll(this.className)
            let accumulator = []
            allEles.forEach(item => {
                accumulator.push({
                    title: this.attributeName
                        ? item.getAttribute('name')
                        : item.innerText,
                    href: '#' + item.id
                })
            })
            this.data = accumulator
            // 渲染锚点anchor
            this.showAnchor = true
        }
    }
}
</script>
<style scoped lang="less">
@import './index';
</style>