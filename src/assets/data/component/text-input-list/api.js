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
                attribute: 'v-model/value',
                explain: '绑定值',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'placeholder',
                explain: '占位符',
                type: 'String',
                default: '请输入或粘贴创意标题，每行一标题，敲击回车换行'
            },
            {
                attribute: 'minLength',
                explain: '文本字符最小长度',
                type: 'Number',
                default: '6'
            },
            {
                attribute: 'maxLength',
                explain: '文本字符最大长度',
                type: 'Number',
                default: '30'
            },
            {
                attribute: 'maxLine',
                explain: '最大行数',
                type: 'Number',
                default: '10'
            },
            {
                attribute: 'maxEnter',
                explain: '单行文本编辑中最大换行数',
                type: 'Number',
                default: '3'
            },
            {
                attribute: 'useEmoj',
                explain: '是否可使用emoji图片',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'useEnter',
                explain: '是否可以使用换行',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'emojiList',
                explain: '是否可以使用换行',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'calcTextFn',
                explain: '文本计算方法, 默认每个文字算2个字符',
                type: 'Function',
                default: '() => {}'
            }
        ]
    }
]
