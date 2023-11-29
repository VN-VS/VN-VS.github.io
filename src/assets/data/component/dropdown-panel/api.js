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
                attribute: '*',
                explain: '支持iview-dropdown所有API',
                type: '*',
                default: '*'
            },
            {
                attribute: 'type',
                explain: '展示方式。list列表方式、group分组方式',
                type: 'string',
                default: 'list'
            },
            {
                attribute: 'placement',
                explain: '下拉菜单出现的位置',
                type: 'string',
                default: 'bottom-start'
            },
            {
                attribute: 'content',
                explain: '按钮内容',
                type: 'string',
                default: '批量操作'
            },
            {
                attribute: 'label-value',
                explain: '定制返回结果，默认仅返回value',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'data',
                explain: '数据源',
                type: 'Array',
                default: '[]'
            }
        ]
    },
    {
        title: 'type=list => data',
        columns: [
            {
                title: '名称',
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
            }
        ],
        data: [
            {
                attribute: 'label',
                explain: '选项名称',
                type: 'String'
            },
            {
                attribute: 'value',
                explain: '选项值',
                type: 'String'
            },
            {
                attribute: 'disabled',
                explain: '是否禁用',
                type: 'Boolean'
            },
            {
                attribute: 'tooltip',
                explain: '提示内容',
                type: 'String'
            }
        ]
    },
    {
        title: 'type=group => data',
        columns: [
            {
                title: '名称',
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
            }
        ],
        data: [
            {
                attribute: 'title',
                explain: '组标题',
                type: 'String'
            },
            {
                attribute: 'icon',
                explain: '自定义icon',
                type: 'String'
            },
            {
                attribute: 'tooltip',
                explain: '提示内容',
                type: 'String'
            },
            {
                attribute: 'items',
                explain: '分组下的数据',
                type: 'Array'
            }
        ]
    },
    {
        title: 'slots',
        columns: [
            {
                title: '名称',
                key: 'attribute',
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
                attribute: 'content',
                explain: '自定义按钮内容'
            },
            {
                attribute: 'item',
                explain: '自定义选项数据'
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
                eventName: 'on-click',
                explain: '点击菜单项时触发',
                returnValue: 'DropdownItem 的 value 值'
            },
            {
                eventName: 'on-visible-change',
                explain: '菜单显示状态改变时调用',
                returnValue: 'visible'
            },
            {
                eventName: 'on-clickoutside',
                explain: '点击外部关闭下拉菜单时触发',
                returnValue: 'event'
            }
        ]
    }
]
