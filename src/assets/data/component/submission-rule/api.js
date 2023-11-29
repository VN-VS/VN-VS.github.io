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
                explain: '提交规则数据',
                type: 'Object',
                default: '{ }'
            },
            {
                attribute: 'ruleTipsList',
                explain: '提交规则提示的枚举值',
                type: 'Object',
                default: '{ }'
            }
        ]
    },
    {
        title: 'value props',
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
                attribute: 'submitRule',
                explain:
                    '规则。允许值：NOW 立即提交；DELAY 定时提交；BATCH 分批提交；REPEAT 重复提交',
                type: 'String',
                default: ''
            },
            {
                attribute: 'startTime',
                explain: '开始时间。时间格式： yyyy-MM-dd HH:mm',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'timeInterval',
                explain: '时间间隔。',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'batchAdNum',
                explain: '分批提交-广告数。范围：1-100',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'repeatTimes',
                explain: '重复提交-重复次数。范围：2-10',
                type: 'Number',
                default: '-'
            }
        ]
    }
]
