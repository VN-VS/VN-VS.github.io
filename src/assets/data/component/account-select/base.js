import base from './code-example/base.vuetext'
export default {
    id: 'base',
    title: '基础用法',
    content: base.content,
    desc: '可以使用 <code>v-model</code> 双向绑定数据。<br>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据 <code>value</code> 来返回选中的数据。'
}
