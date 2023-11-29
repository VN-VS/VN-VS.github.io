import base from './code-example/base.vuetext'
export default {
    id: 'base',
    title: '基础用法',
    content: base.content,
    desc: [
        '可以使用 <code>v-model</code> 双向绑定数据，展示了单选和多选的场景。',
        '通过设置属性 <code>multiple</code> 可以开启多选模式，单选时 <code>value</code> 接受字符串和数字类型，多选时，接受数组类型。',
        '通过设置属性 <code>label</code> 自定义标题。',
        '通过设置属性 <code>clearable</code> 可以清空已选项，适用于单选和多选模式。'
    ]
}
