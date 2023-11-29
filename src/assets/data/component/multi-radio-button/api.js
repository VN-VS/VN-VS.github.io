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
                key: 'type',
                render: renderInnerHTML
            },
            {
                title: '默认值',
                key: 'default',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                attribute: 'value',
                explain: '可以使用<code>  v-model </code> 双向绑定数据',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'buttonList',
                explain:
                    '多选按钮展示的数据集合；<br/> 设置 <code> isMulti </code> 为<code> true </code> , 为多选项；设置 <code> isMulti </code> 为<code> false </code>，为单选项，和其他选项互斥。<br/> 设置 <code> tip </code>, 展示Tooltip提示 ',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'disabled',
                explain: '通过设置<code> disabled </code>属性来禁用多选框。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'tooltipMaxWidth',
                explain:
                    '通过设置<code> tooltipMaxWidth </code>属性来设置tooltip最大宽度。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'tooltipPlacement',
                explain:
                    '通过设置<code> tooltipPlacement </code>属性来设置tooltip展示位置。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'multiAbleReset',
                explain:
                    '多选是否可以置空，默认不可置空（定向使用场景，多选只剩下最后一个选中的，不可取消）。',
                type: 'Boolean',
                default: 'false'
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
                eventName: 'on-change',
                explain:
                    '在选项状态发生改变时触发，返回当前状态。返回的是一个对象。',
                returnValue:
                    '<li><code>valueArr</code>：返回value集合</li><li><code>selection</code>：返回label和value集合</li>'
            }
        ]
    }
]
