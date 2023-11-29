<template>
    <main>
        <pre :style="{ height: height + 'px' }">
      <code
      ref="code"
      class='hljs'
        autodetect
        :class="codeClass">{{data}}</code>
    </pre>
    </main>
</template>

<script>
import hljs from 'highlightjs/highlight.pack.js'
export default {
    props: {
        data: {
            type: String,
            default: ''
        },
        codeClass: {
            type: String,
            default: 'html',
            validator(value) {
                // 这个值必须与下列字符串中的其中一个相匹配
                return [
                    'html',
                    'code',
                    'language-plaintext',
                    'nohighlight'
                ].includes(value)
            }
        }
    },
    data() {
        return {
            height: null
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            hljs.highlightBlock(this.$refs.code)

            this.$nextTick(() => {
                this.height = this.$refs.code.clientHeight
                this.$emit('height', this.$refs.code.clientHeight)
            })
        }
    }
}
</script>
<style lang='less' scoped>
@import 'index.less';
</style>
