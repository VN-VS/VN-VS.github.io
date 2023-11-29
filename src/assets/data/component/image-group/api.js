import { renderInnerHTML } from '@/util/util'
export default [
    {
        title: 'Group props',
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
                attribute: 'data',
                explain: '数据源',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'size',
                explain:
                    '组图长度，包含: <code>1</code>、<code>2</code>、<code>3</code>、<code>4</code>、<code>6</code> 图',
                type: 'Number',
                default: '1'
            },
            {
                attribute: 'width',
                explain: '宽度',
                type: 'String ｜ Number',
                default: '-'
            },
            {
                attribute: 'height',
                explain: '高度',
                type: 'String ｜ Number',
                default: '-'
            },
            {
                attribute: 'position-type',
                explain:
                    '组图类型，包含：<code>horizontal</code> 横版，<code>vertical</code> 竖版，结合<code>size</code> = 3使用',
                type: 'String',
                default: 'horizontal'
            },
            {
                attribute: 'preview-group-tip',
                explain: '显示组图预览图标',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'type',
                explain:
                    '组图类型，结合<code>preview-group-tip</code>使用，包含：<code>image</code>图片图标、<code>video</code>视频图标',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'preview-group-tip-width',
                explain: '显示组图预览图标宽度',
                type: 'String ｜ Number',
                default: '32px'
            },
            {
                attribute: 'open-cover',
                explain: '一个视频一个封面时开启，开启后第二个素材为封面',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'show-delete',
                explain: '删除按钮',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'selected',
                explain: '开启选中状态',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'border-hover',
                explain: 'border增加hover效果',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'background',
                explain: '背景色',
                type: 'String',
                default: '#EEF0F3'
            },
            {
                attribute: 'styles',
                explain: '设置组图样式',
                type: 'Object',
                default: '-'
            }
        ]
    },
    {
        title: 'Image props',
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
                attribute: 'preview',
                explain: '是否图片预览',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'preview-tip',
                explain: '是否显示预览提示图标',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'preview-tip-width',
                explain: '预览提示图标宽度',
                type: 'String | Number',
                default: '32px'
            },
            {
                attribute: 'video-sign',
                explain: '角标',
                type: 'Boolean',
                default: 'false'
            }
        ]
    },
    {
        title: 'Group Events',
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
                title: '默认值',
                key: 'default',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                attribute: 'on-preview-click',
                explain: '图片点击预览',
                default: 'ItemData、initialIndex'
            },
            {
                attribute: 'on-preview-group-click',
                explain:
                    '组图点击预览,结合 <code>preview-group-tip</code> 使用',
                default: '数据源Data'
            },
            {
                attribute: 'on-delete',
                explain: '删除组',
                default: '-'
            }
        ]
    }
]
