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
                attribute: 'avatar',
                explain: '标题栏旁的头像',
                type: 'Sring | Slot',
                default: '-'
            },
            {
                attribute: 'backIcon',
                explain: '自定义 back icon ，如果为 false 不渲染 back icon',
                type: 'Sring | Slot',
                default: '-'
            },
            {
                attribute: 'breadcrumb',
                explain:
                    '面包屑组件的数据配置。同 <code> Breadcrumb </code> 组件的 <code> data </code> 属性',
                type: 'Sring | Slot',
                default: '-'
            },
            {
                attribute: 'extra',
                explain: '操作区，位于 title 行的行尾',
                type: 'Slot',
                default: '-'
            },
            {
                attribute: 'footer',
                explain: 'PageHeader 的页脚，一般用于渲染 TabBar',
                type: 'Slot',
                default: '-'
            },
            {
                attribute: 'subTitle',
                explain: '自定义的二级标题文字',
                type: 'String | Slot',
                default: '-'
            },
            {
                attribute: 'title',
                explain: '自定义标题文字',
                type: 'String | Slot',
                default: '-'
            },
            {
                attribute: 'tags',
                explain: 'title 旁的 Tag 列表',
                type: 'Slot',
                default: '-'
            },
            {
                attribute: 'ghost',
                explain: 'PageHeader 的类型，将会改变背景颜色',
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
                eventName: 'back',
                explain: '返回按钮的点击事件',
                returnValue: '-'
            }
        ]
    }
]
