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
                attribute: 'isTabs',
                explain: '开启Tabs组件',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'isRoute',
                explain: '开启 Tabs组件的路由关联。开启时必须开启”isTabs“	',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'tabsList',
                explain: 'Tabs组件的配置。支持”label name disabled“三个字段',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'activeValue',
                explain: '当前选中的”tab“页的值',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'singleTitle',
                explain: '单个标题。关闭 isTabs 时有效',
                type: 'String | Slot',
                default: '-'
            },
            {
                attribute: 'subTitle',
                explain: '单个标题的副标题。关闭 isTabs 时有效',
                type: 'String | Slot',
                default: '-'
            },
            {
                attribute: 'extra',
                explain: '右侧区域',
                type: 'Slot',
                default: '-'
            }
        ]
    },
    {
        title: 'tabsList 字段参数	',
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
                attribute: 'label',
                explain: '选项卡头显示文字，支持 Render 函数',
                type: 'String | Function',
                default: '-'
            },
            {
                attribute: 'name',
                explain: '用于标识当前面板，对应 value，默认为其索引值',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'disabled',
                explain: '是否禁用该选项卡。默认不禁用',
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
                eventName: 'on-tab-click',
                explain: '开启Tabs组件时，切换tab页',
                returnValue: '-'
            }
        ]
    }
]
