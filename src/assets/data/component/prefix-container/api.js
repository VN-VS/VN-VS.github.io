import { renderInnerHTML } from '@/util/util'
export default [
    {
        title: 'Input slot',
        columns: [
            {
                title: '名称',
                key: 'name',
                render: renderInnerHTML
            },
            {
                title: '说明',
                key: 'explain',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                name: 'prepend',
                explain: '前置内容，仅在 text 类型下有效'
            },
            {
                name: 'append',
                explain: '后置内容，仅在 text 类型下有效'
            }
        ]
    }
]
