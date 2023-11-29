import base from './code-example/base.vuetext'
export default {
    id: 'base',
    title: '基础用法',
    content: base.content,
    desc: '最简单的用法。 注意 Tooltip 内的文本使用了 <code> white-space: nowrap;</code>，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 <code> white-space: normal;</code>。'
}
