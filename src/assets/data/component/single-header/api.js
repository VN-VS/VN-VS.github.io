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
                attribute: 'is-show-title',
                explain: '是否显示标题',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'title-name',
                explain: '标题文案',
                type: 'String',
                default: '定向包'
            },
            {
                attribute: 'loading',
                explain: '查询loading',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'reset-text',
                explain: '重置文案',
                type: 'String',
                default: '重置'
            },
            {
                attribute: 'query-text',
                explain: '查询文案',
                type: 'String',
                default: '查询'
            },
            {
                attribute: 'show-btn-group',
                explain: '是否显示按钮组',
                type: 'Boolean',
                default: 'true'
            }
        ]
    },
    {
        title: 'events',
        columns: [
            {
                title: '事件名',
                key: 'eventName',
                render: renderInnerHTML
            },
            {
                title: '说明',
                key: 'explain',
                render: renderInnerHTML
            },
            {
                title: '返回值',
                key: 'returnValue',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                eventName: 'on-reset',
                explain: '点击重置按钮触发事件',
                returnValue: '-'
            },
            {
                eventName: 'on-query',
                explain: '点击查询按钮触发事件',
                returnValue: '-'
            }
        ]
    }
]
