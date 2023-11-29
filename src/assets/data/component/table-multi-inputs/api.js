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
                attribute: 'columns',
                explain:
                    '表格列的配置描述。 第一项为<code> type=index </code>，展示行数；最后一项为删除按钮，其title为空字符串；',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'data',
                explain: '用于数据回显',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'add-new-data',
                explain: '回车换行，默认给data里push一条默认数据。',
                type: 'Object',
                default: '-'
            },
            {
                attribute: 'max',
                explain: '通过设置<code> max </code>属性来设置最大条数。',
                type: 'Number',
                default: '默认最大值为500'
            },
            {
                attribute: 'isCanPaste',
                explain: '是否能使用粘贴事件。',
                type: 'Boolean',
                default: 'false'
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
                explain: '在输入值发生改变时触发。',
                returnValue:
                    '<li>参数一：返回表格所有数据</li><li>参数二：返回错误提示信息</li>'
            },
            {
                eventName: 'on-paste',
                explain: '输入框粘贴事件。',
                returnValue:
                    '{pastedText【复制的内容】, key【编辑的字段】, index【第几行】, row【当前行数据】, event【事件对象】}'
            },
            {
                eventName: 'on-row-change',
                explain: '单个输入框变化。',
                returnValue:
                    '{ row【当前行数据】, index【第几行】, value【当前值】, key【编辑的字段】 }'
            },
            {
                eventName: 'on-validate-error',
                explain: '验证失败。',
                returnValue:
                    '错误的信息。{errorTip【提示信息】, errorRow【第几行】}'
            },
            {
                eventName: 'on-delete',
                explain: '删除行时触发。',
                returnValue:
                    '<li>参数一：当前行数据</li><li>参数二：第几行</li>'
            }
        ]
    }
]
