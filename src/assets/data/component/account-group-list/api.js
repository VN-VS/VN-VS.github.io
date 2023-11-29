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
                attribute: 'width',
                explain: '组件宽度',
                type: 'Sring',
                default: '100%'
            },
            {
                attribute: 'height',
                explain: '组件高度',
                type: 'String',
                default: '438px'
            },
            {
                attribute: 'data',
                explain: '左侧列表数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'groupName',
                explain: '左侧列表组名称的key',
                type: 'String',
                default: 'groupName'
            },
            {
                attribute: 'groupId',
                explain: '左侧列表组id的key',
                type: 'String',
                default: 'groupId'
            },
            {
                attribute: 'id',
                explain: '左侧列表每项id',
                type: 'String',
                default: ''
            },
            {
                attribute: 'itemName',
                explain: '左侧列表项名称的key',
                type: 'String',
                default: 'mediaAccountName'
            },
            {
                attribute: 'itemId',
                explain: '左侧列表项唯一标识的key',
                type: 'String',
                default: 'mediaAccountId'
            },
            {
                attribute: 'itemNum',
                explain: '左侧列表项已选提示的key',
                type: 'String | Number',
                default: 'num'
            },
            {
                attribute: 'itemIconCustom',
                explain: '左侧列表项的自定义字体图标的Key',
                type: 'String',
                default: 'iconCustom'
            },
            {
                attribute: 'itemIconIview',
                explain: '左侧列表项的iview字体图标的Key',
                type: 'String',
                default: 'iconIview'
            },
            {
                attribute: 'iconSize',
                explain: '字体图标大小',
                type: 'Number',
                default: '16'
            },
            {
                attribute: 'iconColor',
                explain: '字体图标颜色',
                type: 'String',
                default: '#277ff3'
            },
            {
                attribute: 'maxWidth',
                explain: '气泡最大宽度',
                type: 'number',
                default: '320'
            },
            {
                attribute: 'delay',
                explain: '气泡延迟时间',
                type: 'number',
                default: '1000'
            },
            {
                attribute: 'leftTitle',
                explain: '左侧列顶部标题',
                type: 'String',
                default: '账户'
            },
            {
                attribute: 'defaultActive',
                explain: '默认选择项',
                type: 'String | Number',
                default: 'null'
            },
            {
                attribute: 'rightBoxStyle',
                explain: '右侧盒子样式',
                type: 'String | Object',
                default: 'null'
            }
        ]
    },
    {
        title: 'data 字段参数',
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
            }
        ],
        data: [
            {
                attribute: 'groupName',
                explain: '组名称',
                type: 'Sring'
            },
            {
                attribute: 'groupId',
                explain: '组id',
                type: 'Sring | Number'
            },
            {
                attribute: 'children',
                explain: '组账户',
                type: 'Array'
            }
        ]
    },
    {
        title: 'children 字段参数',
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
            }
        ],
        data: [
            {
                attribute: 'mediaAccountName',
                explain: '每一项的展示名称',
                type: 'Sring'
            },
            {
                attribute: 'mediaAccountId',
                explain: '每一项的唯一标识',
                type: 'Sring | Number'
            },
            {
                attribute: 'num',
                explain: '选中的提示文案',
                type: 'Sring'
            },
            {
                attribute: 'iconCustom',
                explain: '自定义字体图标',
                type: 'Sring'
            },
            {
                attribute: 'iconIview',
                explain: 'iview字体图标',
                type: 'Sring'
            },
            {
                attribute: 'className',
                explain: '每一项的className',
                type: 'Sring'
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
                explain: '在选项状态发生改变时触发, function(child, parent)',
                returnValue: 'child: 选中项id/parent: 组id'
            }
        ]
    }
]
