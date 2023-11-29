import { renderInnerHTML } from '@/util/util'
export default [
    {
        title: 'props',
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
                attribute: 'size',
                explain: '占位置大小, 可选值为small、default 或者不设置',
                type: 'string',
                default: 'default'
            },
            {
                attribute: 'not-found-image',
                explain:
                    '设置显示图片地址，支持simpleImage，选择另一种风格的图片',
                type: 'string',
                default: '-'
            },
            {
                attribute: 'not-found-image-style',
                explain: '图片样式',
                type: 'CSSProperties',
                default: '{}'
            },
            {
                attribute: 'not-found-content',
                explain: '自定义描述内容，使用not-found-content=null无描述',
                type: 'string',
                default: '暂无数据'
            }
        ]
    },
    {
        title: 'slots',
        columns: [
            {
                title: '名称',
                key: 'attribute',
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
                attribute: 'notFoundContent',
                explain: '自定义描述内容'
            },
            {
                attribute: 'notFoundFooter',
                explain: '自定义附属内容'
            }
        ]
    }
]
