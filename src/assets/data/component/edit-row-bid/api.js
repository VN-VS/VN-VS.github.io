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
                attribute: 'type',
                explain:
                    '输入类型。text 输入文本、 number 输入数字、radio 单选选择、custom 自定义内容。',
                type: 'String',
                default: 'text'
            },
            {
                attribute: 'value',
                explain: '需要编辑的数据(必填)。',
                type: 'Number | String',
                default: '-'
            },
            {
                attribute: 'iconType',
                explain:
                    '显示的按钮类型。显示的按钮类型同Icon的type属性，可见 http://v1.iviewui.com/components/icon。',
                type: 'Slot | String',
                default: 'md-create'
            },
            {
                attribute: 'title',
                explain: '显示标题',
                type: 'String | Slot',
                default: '-'
            },
            {
                attribute: 'rules',
                explain:
                    '校验规则（数据同 iview Form Rules）,校验字段只有 value。',
                type: 'Array',
                default: '-'
            },
            {
                attribute: 'placement',
                explain:
                    '提示框出现的位置。可选值：`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`left`、`left-start`、`left-end`、`right`、`right-start`、`right-end`。',
                type: 'String',
                default: 'bottom'
            },
            {
                attribute: 'poptipDisabled',
                explain: '浮层是否禁用。',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'poptipWidth',
                explain: '浮层宽度。',
                type: 'String | Number',
                default: '320'
            },
            {
                attribute: 'showFooter',
                explain: '是否显示尾部按钮区域。',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'showTextLimit',
                explain: '显示文本的长度。',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'maxTextNum',
                explain: '最大的文本长度。',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'calcTextNumFunc',
                explain:
                    '文本长度的计算函数(回调传入，当前的文本内容，返回计算后的文本长度)。当使用了显示文本长度时，必须传入。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'precision',
                explain: '数字精度。',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'numberMin',
                explain: '数字最小值，设置了最小值，失去校验规则的最小值校验。',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'numberMax',
                explain: '数字最大值，设置了最大值，失去校验规则的最大值校验。',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'numberStep',
                explain: '数字步长。',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'radioList',
                explain:
                    'radio 类型时（必填），枚举项。数据只有 name 描述文本、 value 数值、disabled 禁用。',
                type: 'Array',
                default: '-'
            },
            {
                attribute: 'confirmFunc',
                explain:
                    '点击确定后调用的函数，在没有是用footer slot时，点击确定按钮会触发。返回值为 Promise。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'beforeShowFunc',
                explain: '显示浮层之前触发的函数。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'poptipShowFunc',
                explain: '显示浮层触发。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'poptipHideFunc',
                explain: '隐藏浮层触发。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'custom',
                explain: '自定义类型的渲染内容的插槽名称。',
                type: 'Slot',
                default: '-'
            }
        ]
    },
    {
        title: 'radioList 字段参数',
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
                attribute: 'value',
                explain: '数值。',
                type: 'String | Number',
                default: '-'
            },
            {
                attribute: 'name',
                explain: '描述文本。支持渲染函数。',
                type: 'String | Render Function',
                default: '-'
            },
            {
                attribute: 'disabled',
                explain: '禁用。',
                type: 'Boolean',
                default: '-'
            }
        ]
    }
]
