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
                attribute: 'text',
                explain: '文本',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'height',
                explain: '限制的高度',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'lines',
                explain:
                    '限制行数，将换算为 height。如果设置了 height，则直接使用 height 计算',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'length',
                explain: '按照指定长度截取',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'full-width-recognition',
                explain:
                    '是否将全角字符的长度视为2来计算字符串长度，适用于 length',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'disabled',
                explain: '是否禁用',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'tooltip',
                explain: '是否开启 tooltip',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'transfer',
                explain: 'tooltip 的 transfer 属性',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'theme',
                explain: 'tooltip 的 theme 属性，可选值为 light 或 dark',
                type: 'String',
                default: 'dark'
            },
            {
                attribute: 'max-width',
                explain: 'tooltip 的 max-width 属性',
                type: 'Number | String',
                default: '250'
            },
            {
                attribute: 'placement',
                explain: 'tooltip 的 placement 属性',
                type: 'String',
                default: 'bottom'
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
                eventName: 'on-show',
                explain: '文本全部展示的时候触发',
                returnValue: '-'
            },
            {
                eventName: 'on-hide',
                explain: '文本省略的时候触发',
                returnValue: '-'
            }
        ]
    },
    {
        title: 'slots',
        columns: [
            {
                title: '名称',
                key: 'slotName',
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
                slotName: 'prefix',
                explain: '前缀'
            },
            {
                slotName: 'more',
                explain: '自定义结尾，默认 <code>...</code>'
            },
            {
                slotName: 'suffix',
                explain: '后缀'
            }
        ]
    }
]
