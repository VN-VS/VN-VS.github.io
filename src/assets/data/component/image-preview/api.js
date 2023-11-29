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
                attribute: 'value',
                explain: '是否显示弹出层',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'transfer',
                explain: '是否将弹层放置于 body 内',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'poster',
                explain: '视频封面图',
                type: 'String',
                default: ''
            },
            {
                attribute: 'src',
                explain: '图或视频的地址',
                type: 'String',
                default: ''
            },
            {
                attribute: 'placeholder',
                explain: '搜索框的占位内容',
                type: 'String',
                default: '请输入'
            },
            {
                attribute: 'type',
                explain: '文件类型。图片 IMAGE; 视频 VIDEO',
                type: 'String',
                default: 'IMAGE'
            }
        ]
    }
]
