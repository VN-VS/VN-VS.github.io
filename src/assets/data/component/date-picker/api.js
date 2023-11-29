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
                explain: 'v-model',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'transfer',
                explain:
                    '是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果(true、false)',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'clearable',
                explain: '是否显示清除按钮(true、false)',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'confirm',
                explain:
                    '是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭(true、false)',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'shortcuts',
                explain: '左侧快捷方式',
                type: 'Array',
                default:
                    '组件内置(今天、昨天、近7天、近30天、本周、上周、本月、上月)'
            },
            {
                attribute: 'showShortcuts',
                explain: '是否展示左侧快捷方式(true、false)',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'disabledDate',
                explain: '禁止选择日期',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'format',
                explain: '格式化日期展现形式',
                type: 'String',
                default: 'yyyy-MM-dd'
            },
            {
                attribute: 'placement',
                explain:
                    '弹窗出现位置(top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end)',
                type: 'String',
                default: 'bottom-end'
            },
            {
                attribute: 'placeholder',
                explain: '提示文案',
                type: 'String',
                default: '选择日期'
            },
            {
                attribute: 'size',
                explain: '尺寸',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'start',
                explain: '可选开始日期',
                type: 'String',
                default: '组件内置为当前日期前推一年'
            },
            {
                attribute: 'end',
                explain: '可选结束日期',
                type: 'String',
                default: '组件内置结束日期为今天日期'
            },
            {
                attribute: 'limit',
                explain: '选择限制',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'options',
                explain: '扩展配置',
                type: 'Object',
                default: '-'
            },
            {
                attribute: 'startRange',
                explain: '前置可选范围',
                type: 'String | Number',
                default: '-'
            },
            {
                attribute: 'endRange',
                explain: '后置可选范围',
                type: 'String | Number',
                default: '-'
            },
            {
                attribute: 'width',
                explain: '选择器宽度',
                type: 'String | Number',
                default: '-'
            }
        ]
    },
    {
        title: 'options 字段参数',
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
                attribute: 'shortcuts',
                explain: '设置快捷选项，每项内容(参考iview)',
                type: 'Array'
            },
            {
                attribute: 'disabledDate',
                explain:
                    '设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天(参考iview)',
                type: 'Function'
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
                eventName: 'on-click',
                explain: '点击触发',
                returnValue: '-'
            },
            {
                eventName: 'on-ok',
                explain: '在 confirm 模式下有效，点击确定按钮时触发',
                returnValue: '-'
            },
            {
                eventName: 'on-clear',
                explain:
                    '在 confirm 模式或 clearable = true 时有效，在清空日期时触发',
                returnValue: '-'
            },
            {
                eventName: 'on-click-outside',
                explain: '点击外部关闭下拉菜单时触发',
                returnValue: '-'
            },
            {
                eventName: 'on-open-change',
                explain: '弹出日历和关闭日历时触发',
                returnValue: 'true、false'
            }
        ]
    }
]
