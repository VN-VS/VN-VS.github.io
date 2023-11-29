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
                attribute: 'count',
                explain: '显示个数。传值才显示',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'disabled',
                explain: '禁用',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'type',
                explain:
                    '展示类型。枚举值：list 列表展示； table 表格展示。对应的数据字段会不同',
                type: 'String',
                default: 'list'
            },
            {
                attribute: 'data',
                explain: '列表展示数据',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'tableDetailData',
                explain: '表格展示数据',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'columns',
                explain: '列信息。使用表格类型展示时必填并生效',
                type: 'Array',
                default: '[ ]'
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
                attribute: 'showTitle',
                explain: '是否显示头部标题',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'showOrder',
                explain: '是否显示。文本列的序号，由1开始',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'title',
                explain: '头部标题内容',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'children',
                explain: '展示文本列的集合',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'children[n].title',
                explain: '文本内容',
                type: 'String',
                default: '-'
            }
        ]
    },
    {
        title: 'columns 字段参数',
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
                attribute: 'key',
                explain: '对应列内容的字段名',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'title',
                explain: '列头显示文字',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'width',
                explain: '列宽',
                type: 'Number | String',
                default: '-'
            }
        ]
    },
    {
        title: 'DigitalDetailsTooltip Slots',
        columns: [
            {
                title: '名称',
                key: 'slotName',
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
                slotName: 'default',
                explain: '自定义展示图标或其他的内容'
            }
        ]
    }
]
