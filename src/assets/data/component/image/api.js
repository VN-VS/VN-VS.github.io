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
                attribute: 'src',
                explain: '图片地址',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'alt',
                explain: '图片描述',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'referrer-policy',
                explain: '原生属性，用于过滤Referrer 报头内容',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'width',
                explain: '宽度',
                type: 'String | Numbe',
                default: '-'
            },
            {
                attribute: 'height',
                explain: '高度',
                type: 'String | Number',
                default: '-'
            },
            {
                attribute: 'fit',
                explain:
                    '图片适配容器模式包含：<code>fill</code>，<code>contain</code>，<code>cover</code>，<code>none</code>，<code>scale-down</code>',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'lazy',
                explain: '是否懒加载',
                type: 'Boolean',
                default: '-'
            },
            {
                attribute: 'scroll-container',
                explain: '加载容器',
                type: 'String | HTMLElement',
                default: '-'
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
                attribute: 'type',
                explain:
                    '结合<code>preview-tip</code>使用，包含：<code>image</code>图片图标、<code>video</code>视频图标',
                type: 'String',
                default: 'image'
            },
            {
                attribute: 'preview',
                explain: '是否图片预览',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'preview-src',
                explain: '预览的图片地址，默认<code>src</code>',
                type: 'String | Number',
                default: '-'
            },
            {
                attribute: 'video-sign',
                explain: '角标',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'video-sign-width',
                explain: '角标宽度',
                type: 'String | Number',
                default: '12px'
            }
        ]
    },
    {
        title: 'Image Events',
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
                attribute: 'on-load',
                explain: '图片加载成功',
                default: '-'
            },
            {
                attribute: 'on-error',
                explain: '图片加载失败',
                default: '-'
            },
            {
                attribute: 'on-preview-click',
                explain: '图片点击预览',
                default: '-'
            }
        ]
    },
    {
        title: 'Image Slots',
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
                attribute: 'placeholder',
                explain: '自定义图片加载中',
                default: 'loading图标'
            },
            {
                attribute: 'error',
                explain: '自定义图片加载失败',
                default: '失败图标'
            },
            {
                attribute: 'preview',
                explain: '自定义图片预览',
                default: '图片图标'
            }
        ]
    }
]
