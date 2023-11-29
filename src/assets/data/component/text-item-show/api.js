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
                attribute: 'type',
                explain: '显示的类型。basic 基础 title 带标题 classify 分类。',
                type: 'String',
                default: 'basic'
            },
            {
                attribute: 'tooltip',
                explain:
                    '鼠标悬浮时需要展示的文本内容。默认不展示，仅只有在 basic 基础类型时有效。',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'twoLineDisplay',
                explain: '双行显示。',
                type: '双行显示',
                default: 'false'
            },
            {
                attribute: 'data',
                explain: '显示的数据项。',
                type: 'Object',
                default: '-'
            },
            {
                attribute: 'btnGroup',
                explain: '按钮 Slot',
                type: 'Slot',
                default: '-'
            }
        ]
    },
    {
        title: 'basic基础类型。data字段参数',
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
                attribute: 'text',
                explain: '显示的文本',
                type: 'String'
            }
        ]
    },
    {
        title: 'title带标题的类型。data字段参数',
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
                attribute: 'title',
                explain: '标题',
                type: 'String'
            },
            {
                attribute: 'subTitle',
                explain: '子标题',
                type: 'String'
            },
            {
                attribute: 'thumbnailInfo',
                explain: '缩略图信息',
                type: 'Object'
            },
            {
                attribute: '——thumbnailInfo 字段拆解——',
                explain: '-',
                type: '-'
            },
            {
                attribute: 'thumbnailInfo.style',
                explain: '图片的样式设置。同Vue Style属性一致',
                type: 'Object'
            },
            {
                attribute: 'thumbnailInfo.src',
                explain: '图片的地址',
                type: 'String'
            }
        ]
    },
    {
        title: 'classify带图文和标题的类型。data字段参数',
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
                attribute: 'classify',
                explain: '主要分类',
                type: 'Object'
            },
            {
                attribute: '——classify 字段拆解——',
                explain: '-',
                type: '-'
            },
            {
                attribute: 'classify.name',
                explain: '主要分类名称',
                type: 'String'
            },
            {
                attribute: 'classify.id',
                explain: '主要分类id',
                type: 'String | Number'
            },
            {
                attribute: 'info',
                explain: '次要信息',
                type: 'Object'
            },
            {
                attribute: '——info 字段拆解——',
                explain: '-',
                type: '-'
            },
            {
                attribute: 'info.name',
                explain: '次要信息名称',
                type: 'String'
            },
            {
                attribute: 'info.id',
                explain: '次要信息id',
                type: 'String | Number'
            },
            {
                attribute: 'thumbnail',
                explain: '图片显示的链接地址',
                type: 'String'
            }
        ]
    }
]
