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
                attribute: 'data',
                explain: '显示的结构化数据，详见示例特定样式，详细字段见下文。',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'value',
                explain:
                    '指定选中项目的 <code>value</code> 值，可以使用 <code>v-model</code> 双向绑定数据。单选时接受 <code>String</code> 或 Number，多选时接受 <code>Array</code>',
                type: 'String',
                default: '[]'
            },
            {
                attribute: 'multiple',
                explain: '是否支持多选',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'filterable',
                explain: '是否显示搜索框',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'group-name-list',
                explain: '通过设置属性 group-name-list 进行分组',
                type: 'Object',
                default: '{}'
            },
            // input props
            {
                attribute: 'clearable',
                explain: '是否可以清空选项',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'label',
                explain: '标题显示内容',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'input-placeholder',
                explain: '触发区默认文字',
                type: 'String',
                default: '请选择'
            },
            // 其他
            {
                attribute: 'filter-method',
                explain:
                    '自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词	',
                type: 'Function',
                default: '默认搜索label'
            },
            {
                attribute: 'trigger',
                explain:
                    '触发方式，可选值为 hover（悬停）click（点击）contextMenu（右键)',
                type: 'String',
                default: 'click'
            },
            {
                attribute: 'save-type',
                explain:
                    '触发保存、更新数据的方式，时时保存 <code>always-save</code>，离开下拉框后保存 <code>leave-save</code>',
                type: 'String',
                default: 'always-save'
            },
            {
                attribute: 'show-select-option',
                explain: '展示已选面板',
                type: 'Boolean',
                default: 'false'
            },
            // 删除区域
            {
                attribute: 'show-item-delete',
                explain: '开启删除按钮',
                type: 'Boolean',
                default: 'false'
            }
        ]
    },
    {
        title: 'props 附加内容',
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
                attribute: 'show-action',
                explain: '可以在下拉框底部开启附加操作',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'action-text',
                explain: '提示文案',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'action-button-text',
                explain: '按钮文案',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'action-placeholder',
                explain: 'input placeholder',
                type: 'String',
                default: '请输入'
            },
            {
                attribute: 'action-rule-validate',
                explain: '表单验证规则',
                type: 'Object',
                default: '-'
            },
            {
                attribute: 'action-hide-total',
                explain: '是否隐藏字数统计',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'action-count',
                explain: '输入框文字数量',
                type: 'Function',
                default: '0'
            },
            {
                attribute: 'action-total',
                explain: '设置总字数',
                type: 'Function',
                default: '0'
            },
            {
                attribute: 'before-action-ok',
                explain:
                    '点击确认时的的钩子函数，若返回 false 或者 Promise 则阻止保存',
                type: 'Function',
                returnValue: '-'
            }
        ]
    },
    {
        title: 'props data',
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
                attribute: 'label',
                explain: '筛选列标题文案',
                type: 'String | Number',
                default: '-'
            },
            {
                attribute: 'value',
                explain: '唯一标识',
                type: 'String | Number',
                default: '-'
            },
            {
                attribute: 'src',
                explain: '图片src地址',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'description',
                explain: '筛选列描述文案',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'subtitle',
                explain: '筛选列二级描述文案',
                type: 'String',
                default: '-'
            }
        ]
    },
    {
        title: 'props 样式css',
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
                attribute: 'width',
                explain: '面板宽度，单位 px',
                type: 'String | Number',
                default: '自动撑开'
            },
            {
                attribute: 'height',
                explain: '面板高，单位 px',
                type: 'String | Number',
                default: '自动撑开'
            },
            {
                attribute: 'min-height',
                explain: '面板最小高，单位 px',
                type: 'String | Number',
                default: '-'
            },
            {
                attribute: 'maxHeight',
                explain: '面板最大高，单位 px',
                type: 'String | Number',
                default: '320px'
            },
            // input 触发区
            {
                attribute: 'input-width',
                explain: '触发区宽度，单位 px',
                type: 'String | Number',
                default: '200px'
            },
            {
                attribute: 'input-height',
                explain: '触发区高度，单位 px',
                type: 'String | Number',
                default: '自动撑开'
            },
            // 已选区
            {
                attribute: 'option-width',
                explain:
                    '已选区宽度，单位 px，需要开启 <code>show-select-option</code> 后设置',
                type: 'String | Number',
                default: '180px'
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
                explain:
                    '选中的Option变化时触发，返回已选 <code>value</code> 集合',
                returnValue: '<code>value</code>'
            },
            {
                eventName: 'on-visible-change',
                explain: '菜单显示状态改变时调用',
                returnValue: 'visible'
            },
            {
                eventName: 'on-action-ok',
                explain: '点击确认时的回调函数',
                returnValue: '输入框内容'
            },
            {
                eventName: 'on-item-delete',
                explain: '点击删除时的回调函数',
                returnValue: '{row，index}'
            }
        ]
    },
    {
        title: 'slot',
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
            }
        ],
        data: [
            {
                eventName: 'search-operate',
                explain: '设置搜索右侧操作列。'
            },
            {
                eventName: 'select-item',
                explain: '设置筛选操作'
            },
            {
                eventName: 'footer',
                explain: '自定义底部'
            },
            {
                eventName: 'input-label',
                explain: '自定义label内容'
            }
        ]
    }
]
