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
                attribute: 'value',
                explain: '可以使用<code>  v-model </code> 双向绑定数据',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'datas',
                explain: '待选列表数据集合；',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'labelName',
                explain: 'datas数据对象的名称的key名',
                type: 'String',
                default: 'label'
            },
            {
                attribute: 'valueName',
                explain: 'datas数据对象的值的key名',
                type: 'String',
                default: 'value'
            },
            {
                attribute: 'title',
                explain: '左侧标题',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'isShowCheckAll',
                explain: '是否有全选按钮。',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'onlyBottom',
                explain:
                    '通过设置<code> onlyBottom </code>属性来设置仅最后一级选择。（设置该属性后没有全选功能）',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'max',
                explain: '已选最大限制。',
                type: 'Number',
                default: '0'
            },
            {
                attribute: 'isShowMuitCascader',
                explain:
                    '通过设置<code> isShowMuitCascader </code>属性来设置是否展示右侧已选。',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'isQuery',
                explain: '是否有搜索（目前只支持第一级搜索）。',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'selectedLabelName',
                explain:
                    '通过设置<code> selectedLabelName </code>属性展示已选部分层级关系。datas中必须有字段返回当前的层级关系。',
                type: 'String',
                default: '-'
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
                explain: '已选数据发生改变时触发。',
                returnValue: '返回当前已选全部数据集合。包含名称和值。'
            }
        ]
    }
]
