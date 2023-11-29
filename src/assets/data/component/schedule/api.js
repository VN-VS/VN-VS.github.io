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
                attribute: 'v-model/value',
                explain: '数据项',
                type: 'String',
                default: '000(7*24*colspan)'
            },
            {
                attribute: 'weekList',
                explain: '星期天',
                type: 'Array',
                default:
                    '["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]'
            },
            {
                attribute: 'colspan',
                explain: '使用范围[1,2]',
                type: 'Number',
                default: '1'
            },
            {
                attribute: 'whiteData',
                explain: '是否需要白色的块的数据',
                type: 'Boolean',
                default: false
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
                explain: '数据改变时',
                returnValue: '获取时段数据'
            },
            {
                eventName: 'on-white-block',
                explain: '数据改变时',
                returnValue: '返回白色块的数据'
            }
        ]
    }
]
