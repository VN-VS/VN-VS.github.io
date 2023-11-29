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
                attribute: 'value/v-model',
                explain: 'v-model 双向绑定数据',
                type: 'Object',
                default: '-'
            },
            {
                attribute: 'transfer',
                explain: '是否将弹出层放置于 body 内',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'placement',
                explain:
                    '下拉菜单出现的位置(top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end)',
                type: 'String',
                default: 'bottom-start'
            },
            {
                attribute: 'placeholder',
                explain: '占位文本',
                type: 'String',
                default: '请选择'
            },
            {
                attribute: 'width',
                explain: '宽度',
                type: 'Number | String',
                default: '184'
            },
            {
                attribute: 'step',
                explain: '步长',
                type: 'Number',
                default: 1
            },
            {
                attribute: 'unit',
                explain: '单位',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'precision',
                explain: '数值精度',
                type: 'Number',
                default: 2
            },
            {
                attribute: 'min',
                explain: '输入框最小值',
                type: 'Number',
                default: 0
            },
            {
                attribute: 'max',
                explain: '输入框最大值',
                type: 'Number',
                default: 999999999999.99
            },
            {
                attribute: 'indicatorRule',
                explain: '指标规则（必填）',
                type: 'Array',
                default: '[]'
            }
        ]
    },
    {
        title: 'value 返回值说明',
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
                attribute: 'symbol',
                explain: '符号(eg: "BETWEEN、=、!==、<、>、>=、<= ...")',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'symbolLabel',
                explain:
                    '符号文字描述(ed: "介于、等于、不等于、小于、大于、大于等于、小于等于 ...")',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'value',
                explain: '输入的值',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'startValue',
                explain: '最小值',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'endValue',
                explain: '最大值',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'ruleType',
                explain:
                    '输入框的类型，一个输入框返回undefiend，两个输入框返回"number-input-between"',
                type: 'String',
                default: '-'
            }
        ]
    },
    {
        title: 'indicatorRule 字段参数',
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
                explain: '符号(eg: "BETWEEN、=、!==、<、>、>=、<= ...")',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'label',
                explain:
                    '符号文字描述(ed: "介于、等于、不等于、小于、大于、大于等于、小于等于 ...")',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'ruleType',
                explain:
                    '输入框的类型，一个输入框可不传该值，两个输入框需传"number-input-between"',
                type: 'String',
                default: '-'
            }
        ]
    }
]
