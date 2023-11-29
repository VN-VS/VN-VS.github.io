<template>
    <div class="my-transition">
        <div class="my-transition-split"></div>
        <div class="my-transition-content" :style="{ height: height + 'px' }">
            <render-code
                v-if="toggleCode"
                ref="code"
                :data="data"
                @height="oCodeHeight"></render-code>
        </div>
        <div class="my-transition-code">
            <p
                v-if="!open"
                class="my-transition-code-more"
                type="text"
                @click="
                    open = !open
                    iconChange()
                ">
                <Icon type="ios-arrow-up" />
            </p>
            <p
                v-if="open"
                class="my-transition-code-more"
                type="text"
                @click="
                    open = !open
                    iconChange()
                ">
                <Icon type="ios-arrow-down" />
                Code
            </p>
        </div>
    </div>
</template>

<script>
import renderCode from '@/components/render-code/index.vue'
import { classNames } from '@/config/config.js'

export default {
    components: { renderCode },
    props: {
        value: {
            type: String
        }
    },
    data() {
        return {
            height: 0,
            codeHeight: 0,
            open: true,
            toggleCode: true
        }
    },
    computed: {
        data() {
            let currentValue = JSON.parse(JSON.stringify(this.value))
            let index = currentValue.indexOf(classNames)
            let startIndex = currentValue.lastIndexOf('class', index)
            let name = currentValue.slice(
                startIndex - 1,
                index + classNames.length + 1
            )
            let n = currentValue.replace(name, '')
            return n
        }
    },
    watch: {
        value() {
            this.toggleCode = false
            this.$nextTick(() => {
                this.toggleCode = true
            })
        }
    },
    methods: {
        oCodeHeight(data) {
            this.codeHeight = data
        },
        iconChange() {
            if (this.open) {
                this.height = 0
                return false
            }
            this.height = this.codeHeight
        }
    }
}
</script>
<style lang="less" scoped>
.my-transition {
    &-content {
        overflow: hidden;
        transition: all 0.4s ease;
    }
    &-split {
        width: 100%;
        margin-top: 20px;
        border: 1px dashed #eee;
    }
    &-code {
        height: 35px;
        line-height: 35px;
        &-more {
            width: 80px;
            margin: 0 auto;
            color: #515a6e;
            font-size: 12px;
            cursor: pointer;
            & > i {
                padding-right: 2px;
            }
            &:hover {
                color: #2d8cf0;
            }
        }
    }
}
</style>
