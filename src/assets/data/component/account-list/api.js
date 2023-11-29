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
                attribute: 'dataList',
                explain: '左侧列表数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'id',
                explain: '左侧列表项唯一标识的key',
                type: 'String | Number',
                default: 'null'
            },
            {
                attribute: 'itemName',
                explain: '左侧列表项名称的key',
                type: 'String',
                default: 'adsMediaAccountName'
            },
            {
                attribute: 'itemId',
                explain: '左侧列表项唯一标识的key',
                type: 'String',
                default: 'adsMediaAccountId'
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
                default: '12'
            },
            {
                attribute: 'iconColor',
                explain: '字体图标颜色',
                type: 'String',
                default: '#277ff3'
            },
            {
                attribute: 'isEvent',
                explain: '是否点击返回新项',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'leftTitle',
                explain: '左侧列顶部标题',
                type: 'String',
                default: '账户'
            },
            {
                attribute: 'showLeft',
                explain: '是否展示左侧列',
                type: 'Boolean',
                default: 'true'
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
        title: 'dataList 字段参数',
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
                attribute: 'adsMediaAccountName',
                explain: '每一项展示的名称',
                type: 'Sring'
            },
            {
                attribute: 'adsMediaAccountId',
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
                explain: '在选项状态发生改变时触发，返回当前选中的项',
                returnValue: '每一项的itemId'
            }
        ]
    }
]
