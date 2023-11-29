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
                attribute: 'show',
                explain: '显示弹出Modal',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'width',
                explain: 'modal宽度',
                type: 'String, Number',
                default: '-'
            },
            {
                attribute: 'title',
                explain: '标题',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'max',
                explain: '最大',
                type: 'Number',
                default: '99999.99'
            },
            {
                attribute: 'min',
                explain: '最小',
                type: 'Number',
                default: '0.01'
            },
            {
                attribute: 'precision',
                explain: '精度',
                type: 'Number',
                default: '2'
            },
            {
                attribute: 'unit',
                explain: '单位',
                type: 'String',
                default: '元'
            },
            {
                attribute: 'isRoiRatio',
                explain: '是否设置为ROI系数',
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
                eventName: 'on-ok',
                explain: '点击确定',
                returnValue: '当前输入的值'
            },
            {
                eventName: 'on-cancel',
                explain: '点击取消',
                returnValue: '-'
            }
        ]
    }
]
