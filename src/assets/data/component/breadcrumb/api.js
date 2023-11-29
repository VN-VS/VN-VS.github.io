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
                attribute: 'data',
                explain: '组件数据',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'separator',
                explain: '自定义分隔符',
                type: 'String | Element String',
                default: '/'
            }
        ]
    },
    {
        title: 'prop data 参数说明',
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
                attribute: 'to',
                explain: '链接，不传则没有链接，支持 vue-router 对象',
                type: 'String | Object',
                default: '-'
            },
            {
                attribute: 'replace',
                explain: '路由跳转时，开启 replace 将不会向 history 添加新记录',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'target',
                explain: '相当于 a 链接的 target 属性',
                type: 'String',
                default: '_self'
            },
            {
                attribute: 'append',
                explain: '同 vue-router append (iview 3.4.0支持)',
                type: 'Boolean',
                default: 'false'
            }
        ]
    }
]
