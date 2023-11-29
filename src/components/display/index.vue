<template>
    <div class="my-display">
        <div v-if="errorMsg" class="errorMsg">
            {{ errorMsg }}
        </div>
        <div
            v-if="!openExhibition"
            ref="display"
            class="display"
            style="width: 100%"></div>
        <iframe
            v-else
            :src="'/#/examples/' + componentId"
            style="width: 100%; height: 360px; border: none"></iframe>
    </div>
</template>
<script>
import Vue from 'vue'
import { randomStr } from '@/util/util.js'
import { classNames } from '@/config/config.js'
export default {
    // mixins: [mixin],
    props: {
        code: {
            type: String,
            default: ''
        },
        componentId: {
            type: [String, Number],
            default: ''
        },
        openDisplay: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            errorMsg: '',
            html: '',
            js: '',
            css: '',
            component: null,
            id: randomStr(),
            openExhibition: false
        }
    },
    watch: {
        code() {
            this.renderCode()
        }
    },
    mounted() {
        if (this.code) {
            this.renderCode()
        }
    },
    beforeDestroy() {
        this.destroyCode()
    },
    methods: {
        init() {
            this.destroyCode()
            this.renderCode()
        },
        getSource(source, type) {
            const regex = new RegExp(`<${type}[^>]*>`)
            let openingTag = source.match(regex)

            if (!openingTag) {
                return ''
            } else {
                openingTag = openingTag[0]
            }

            return source.slice(
                source.indexOf(openingTag) + openingTag.length,
                source.lastIndexOf(`</${type}>`)
            )
        },
        splitCode() {
            if (this.code.indexOf(classNames) !== -1 && !this.openDisplay) {
                this.openExhibition = true
            }
            const script = this.getSource(this.code, 'script').replace(
                /export default/,
                'return '
            )
            const style = this.getSource(this.code, 'style')
            const template =
                '<div id="appCode">' +
                this.getSource(this.code, 'template') +
                '</div>'

            this.js = script
            this.css = style
            this.html = template
        },
        renderCode() {
            try {
                this.errorMsg = ''
                this.destroyCode()
                this.splitCode()
                if (
                    this.html !== '' &&
                    this.js !== '' &&
                    !this.openExhibition
                ) {
                    const parseStrToFunc = new Function(this.js)()
                    parseStrToFunc.template = this.html
                    const Component = Vue.extend(parseStrToFunc)
                    this.component = new Component().$mount()
                    this.$refs.display.appendChild(this.component.$el)
                    if (this.css !== '') {
                        const style = document.createElement('style')
                        style.type = 'text/css'
                        style.id = this.id
                        style.innerHTML = this.css
                        document
                            .getElementsByTagName('head')[0]
                            .appendChild(style)
                    }
                }
            } catch (error) {
                this.errorMsg = error
            }
        },
        destroyCode() {
            const $target = document.getElementById(this.id)
            if ($target) {
                $target.parentNode.removeChild($target)
            }

            if (this.component && this.$refs.display) {
                this.$refs.display.removeChild(this.component.$el)
                this.component.$destroy()
                this.component = null
            }
        }
    }
}
</script>
