import base from './text-overflow.vuetext'

export default {
    id: 'text-overflow',
    title: '文本超长截断',
    info: {
        message: '文本超长用省略号替代',
        content: [
            '元素需为<code>block</code>或者<code>inline-block</code>',
            '必须给宽度或最大宽度'
        ]
    },
    content: base.content,
    desc: ['.text-overflow']
}
