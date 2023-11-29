<template>
    <main class="code">
        <div
            v-for="option in code"
            :id="option.id"
            :key="option.id"
            :class="codeClassName"
            :name="option.title">
            <Card>
                <div class="code-case">
                    <my-display
                        :code="option.content"
                        :component-id="option.id"></my-display>
                </div>
                <header class="code-header">
                    <span>{{ option.title }}</span>
                </header>

                <div class="code-desc">
                    <p
                        v-for="(option, index) in getDescData(option.desc)"
                        :key="index"
                        v-html="option"></p>
                </div>
                <div class="code-body">
                    <div class="code-body-run">
                        <span
                            style="margin-right: 8px"
                            @click="copy(option.content)">
                            <Icon type="md-copy" />
                            复制
                        </span>
                        <span @click="run(option.id)">
                            <Icon type="md-play" />
                            运行
                        </span>
                    </div>
                    <my-transition
                        :key="option.id"
                        :value="option.content"></my-transition>
                </div>
            </Card>
        </div>
    </main>
</template>

<script>
import myDisplay from '@/components/display/index.vue'
import myTransition from '../my-transition'
import Clipboard from 'clipboard'
import { codeClassName } from '@/assets/config/data.js'
export default {
    components: { myDisplay, myTransition },
    props: {
        code: Array
    },
    data() {
        return {
            codeClassName
        }
    },
    watch: {
        code: function () {
            this.setDomLoaded()
        }
    },
    mounted() {
        this.setDomLoaded()
    },
    methods: {
        getDescData(data) {
            if (Array.isArray(data)) {
                return data
            }
            return [data]
        },
        copy(content) {
            const clipboard = new Clipboard('.code-body-run', {
                text() {
                    return content
                }
            })
            clipboard.on('success', e => {
                e.clearSelection()
                clipboard.destroy()
                this.$Message.success('Code copied')
            })
        },
        setDomLoaded() {
            this.$nextTick(() => {
                this.$emit('dom-loaded', true)
            })
        },
        run(exampleId) {
            let { id } = this.$route.params
            let { href } = this.$router.resolve({
                name: 'runComponents',
                params: {
                    id,
                    exampleId
                }
            })
            window.open(href, '_blank')
        }
    }
}
</script>
<style scoped lang="less">
@import 'index.less';
</style>