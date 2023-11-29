import deleteExample from './code-example/delete.vuetext'
export default {
    id: 'deleteExample',
    title: '删除',
    content: deleteExample.content,
    desc: [
        '通过设置属性 <code>show-item-delete</code> 可以在下拉框开启删除按钮。',
        ' <code>@on-item-delete</code> 点击删除时的回调函数。'
    ]
}
