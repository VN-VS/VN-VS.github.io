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
                attribute: 'visible',
                explain: '控制展示出下拉内容',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'is-empty',
                explain: '当前是否为空的转态',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'empty-text',
                explain: '数据为空时的提示文案',
                type: 'String',
                default: '暂无数据'
            },
            {
                attribute: 'width',
                explain: '组件宽度',
                type: 'Number',
                default: '360'
            },
            {
                attribute: 'placeholder',
                explain: '搜索框的占位内容',
                type: 'String',
                default: '请输入'
            },
            {
                attribute: 'is-real-time',
                explain: '是否实时触发搜索',
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
                eventName: 'on-search',
                explain: '执行搜索的方法',
                returnValue: '输入的搜索词'
            },
            {
                eventName: 'on-visible-change',
                explain: '下拉区域面板展示和取消时触发',
                returnValue: '<code>visible</code> 的状态值'
            },
            {
                eventName: 'on-clickoutside',
                explain: '点击弹出框的其他区域时触发',
                returnValue: 'event'
            }
        ]
    }
]
