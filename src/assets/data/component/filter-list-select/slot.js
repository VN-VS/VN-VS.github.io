import slot from './code-example/slot.vuetext'
export default {
    id: 'slot',
    title: '自定义列和搜索操作模版 slot',
    content: slot.content,
    desc: [
        '可以通过slot <code>search-operate</code> 自定义搜索右侧操作列。',
        '可以通过slot <code>select-item</code> 自定义筛选列。',
        '可以通过slot <code>footer</code> 自定义底部。',
        '可以通过slot <code>input-label</code> 自定义label内容。',
        '支持 slot-scope 写法,参数有 2 个：当前行数据 row，当前行序号 index。'
    ]
}
