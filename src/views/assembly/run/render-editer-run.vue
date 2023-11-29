<template>
    <main class="ry-run">
        <Split v-model="split1" min="350">
            <div slot="left" class="left">
                <div class="tool-bar">
                    <Button @click="autoFormatRange">格式化</Button>
                    <Button @click="searchCode">查找</Button>
                    <Button @click="run">运行</Button>
                    <Button @click="handleReset">重置</Button>
                </div>
                <codemirror
                    ref="codemirror"
                    v-model="formCustom.html"
                    :options="cmOption"
                    @cursorActivity="onCmCursorActivity"
                    @ready="onCmReady"
                    @focus="onCmFocus"
                    @blur="onCmBlur"/>
            </div>
            <div slot="right" class="right">
                <my-display
                    ref="refDisplay"
                    :code="formCustom.html"></my-display>
            </div>
        </Split>
    </main>
</template>

<script>
import codemirror from './codemirror'
// 基础样式
import 'codemirror/lib/codemirror.css'
// 主题样式
import 'codemirror/theme/base16-dark.css'
// vue language 语言包
import 'codemirror/mode/vue/vue.js'
// 高亮行
import 'codemirror/addon/selection/active-line.js'
// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'
import 'codemirror/addon/search/searchcursor.js'
// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/match-highlighter.js'
// keyMap
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/sublime.js'
// 代码折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'
// 错误校验
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/lint.css'
// autoRefresh
import 'codemirror/addon/display/autorefresh.js'

// code display
import myDisplay from '@/components/display/index.vue'
import { getRunTemplate } from '../data'
export default {
    name: 'CodemirrorRunCode',
    components: { myDisplay, codemirror },
    data() {
        return {
            split1: 0.5,
            formCustom: {
                name: '',
                details: '',
                html: ''
            },
            cmOption: {
                autoRefresh: true,
                // 缩进配置（默认为2）
                indentUnit: 2,
                // tab大小
                tabSize: 2,
                // 自动换行
                lineWrapping: true,
                // 折叠
                foldGutter: true,
                gutters: [
                    'CodeMirror-linenumbers',
                    'CodeMirror-foldgutter',
                    'CodeMirror-lint-markers'
                ],
                // 选中行高亮
                styleActiveLine: true,
                // 显示行号
                lineNumbers: true,
                line: true,
                // 匹配括号
                matchBrackets: true,
                // 代码出错提醒
                lint: true,
                keyMap: 'sublime',
                // 语言模式
                mode: 'text/x-vue',
                // 主题
                // theme: 'base16-dark',
                // 配置按键
                extraKeys: {
                    Alt: 'autocomplete'
                }
            }
        }
    },
    created() {
        let { id: componentId, exampleId } = this.$route.params
        this.formCustom.html = getRunTemplate(componentId, exampleId)
    },
    methods: {
        // 重置
        handleReset() {
            this.formCustom.html = ''
            this.$refs.refDisplay.destroyCode()
        },
        // 运行
        run() {
            this.$refs.refDisplay.renderCode()
        },
        // 查找
        searchCode() {
            this.$refs.codemirror.searchCode()
        },
        // 格式化
        autoFormatRange() {
            this.$refs.codemirror.autoFormatRange()
        },
        // 刷新
        refresh() {
            this.$refs.codemirror.refresh()
        },
        // codemirror
        onCmCursorActivity() {
            // console.debug('onCmCursorActivity', codemirror)
        },
        // codemirror
        onCmReady() {
            // console.debug('onCmReady', codemirror)
        },
        // codemirror
        onCmFocus() {
            // console.debug('onCmFocus', codemirror)
        },
        //codemirror
        onCmBlur() {
            // console.debug('onCmBlur', codemirror)
        }
    }
}
</script>

<style lang="less" scoped>
.example {
    display: flex;
    height: 100%;

    .codemirror,
    .pre {
        font-size: 14px;
        width: 50%;
        height: 100%;
        margin: 0;
        overflow: auto;
    }

    .pre {
        display: block;
        padding: 1rem;
        line-height: 1.6;
        word-break: break-all;
        word-wrap: break-word;
    }
}
</style>
