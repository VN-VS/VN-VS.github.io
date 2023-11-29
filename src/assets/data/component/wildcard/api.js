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
                explain: 'form.prop',
                type: '-',
                default: '-'
            },
            {
                attribute: 'option',
                explain:
                    'formItem 配置项。 支持项{label、prop、labelWidth、tooltip}',
                type: 'Object',
                default: '{label: "",prop: "",labelWidth: 104}'
            },
            {
                attribute: 'data',
                explain: '通配符数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'dataConfig',
                explain: '数据配置',
                type: 'Object',
                default: '{label: "label",title: "title",id: "id"}'
            },
            {
                attribute: 'calculateLength',
                explain: '计算字符长度方法',
                type: 'Function',
                default: 'e => e.length'
            },
            {
                attribute: 'maxLength',
                explain: '字符最大长度',
                type: 'Number',
                default: '0'
            },
            {
                attribute: 'disabled',
                explain: '禁用',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'prefix',
                explain: '通配符的前缀',
                type: 'String',
                default: ''
            },
            {
                attribute: 'saveRule',
                explain: '保持默认状态',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'joinSymbol',
                explain: '连接符',
                type: 'String',
                default: ''
            },
            {
                attribute: 'wildcardLabelConfig',
                explain: '通配符label配置',
                type: 'Object',
                default: '{label: "通配符:",width: 48,tooltip: ""}'
            },
            {
                attribute: 'showWordLimit',
                explain: '是否显示字符数提示',
                type: 'Boolean',
                default: true
            },
            {
                attribute: 'showSaveRule',
                explain: '是否显示保存默认',
                type: 'Boolean',
                default: true
            },
            {
                attribute: 'clearable',
                explain: '清空',
                type: 'Boolean',
                default: false
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
                attribute: 'title',
                explain: '通配符',
                type: 'Sring'
            },
            {
                attribute: 'label',
                explain: '+通配符',
                type: 'Sring'
            },
            {
                attribute: 'id',
                explain: '【可选】通配符唯一ID',
                type: 'String'
            },
            {
                attribute: 'tooltip',
                explain: '【可选】提示',
                type: 'String'
            },
            {
                attribute: 'alias',
                explain: '【可选】通配符别名',
                type: 'String'
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
                explain: '名称改变时',
                returnValue: '返回包含通配符的名称'
            },
            {
                eventName: 'on-name-programs',
                explain: '名称改变时',
                returnValue: '返回名称中通配符的ID'
            },
            {
                eventName: 'on-save-rule',
                explain: '默认规则改变时',
                returnValue: '返回默认规则状态'
            }
        ]
    }
]
