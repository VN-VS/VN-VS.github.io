import { renderInnerHTML } from '@/util/util'
export default [
    {
        title: 'props。其他属性同 iView Tooltip。',
        columns: [
            {
                title: '属性',
                key: 'attribute',
                render: renderInnerHTML
            },
            {
                title: '说明',
                key: 'explain',
                render: renderInnerHTML
            },
            {
                title: '类型',
                key: 'type'
            },
            {
                title: '默认值',
                key: 'default',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                attribute: 'contentRender',
                explain: '自定义内容渲染',
                type: 'Function',
                default: ''
            }
        ]
    }
]
