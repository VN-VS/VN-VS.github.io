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
                key: 'type',
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
                attribute: 'type',
                explain: '页面类型，可选值为 404、403、500',
                type: 'String, Number	',
                default: '404'
            },
            {
                attribute: 'title',
                explain: '标题，不填写会自动根据 type 获取',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'desc',
                explain: '补充描述，不填写会自动根据 type 获取',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'img',
                explain: '背景图片地址，不填写会自动根据 type 获取',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'back-text',
                explain: '默认的返回按钮文本',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'redirect',
                explain: '返回按钮的跳转地址',
                type: 'String',
                default: '-'
            }
        ]
    },
    {
        title: 'slots',
        columns: [
            {
                title: '名称',
                key: 'slotsName',
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
                slotsName: 'title',
                explain: '自定义标题'
            },
            {
                slotsName: 'desc',
                explain: '自定义补充描述'
            },
            {
                slotsName: 'actions',
                explain: '自定义操作区'
            }
        ]
    }
]
