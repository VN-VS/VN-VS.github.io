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
                attribute: 'level',
                explain: '几级表格，支持一级表格（first）和二级表格（second）',
                type: 'String',
                default: 'first'
            },
            {
                attribute: 'firstWidth',
                explain: '一级表格整体宽度',
                type: 'Number',
                default: '260'
            },
            {
                attribute: 'firstTableHeight',
                explain: '一级表格高度',
                type: 'Number',
                default: '260'
            },
            {
                attribute: 'secondWidth',
                explain: '二级表格整体宽度',
                type: 'Number',
                default: '260'
            },
            {
                attribute: 'secondTableHeight',
                explain: '二级表格高度',
                type: 'Number',
                default: '260'
            },
            {
                attribute: 'selectedWidth',
                explain: '已选表格整体宽度',
                type: 'Number',
                default: '260'
            },
            {
                attribute: 'selectedTableHeight',
                explain: '已选表格高度',
                type: 'Number',
                default: '312'
            },
            {
                attribute: 'firstTitle',
                explain: '一级标题',
                type: 'String',
                default: '账户'
            },
            {
                attribute: 'secondTitle',
                explain: '二级标题',
                type: 'String',
                default: '定向包'
            },
            {
                attribute: 'firstSearchPlaceholder',
                explain: '一级表格搜索框placeholder',
                type: 'String',
                default: '请输入账户名称或ID'
            },
            {
                attribute: 'secondSearchPlaceholder',
                explain: '二级表格搜索框placeholder',
                type: 'String',
                default: '请输入定向包名称'
            },
            {
                attribute: 'firstTableData',
                explain: '一级表格数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'secondTableData',
                explain: '二级表格数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'firstRowId',
                explain: '一级表格唯一id标识',
                type: 'String',
                default: 'id'
            },
            {
                attribute: 'secondRowId',
                explain: '二级表格唯一id标识',
                type: 'String',
                default: 'id'
            },
            {
                attribute: 'secondLoading',
                explain: '二级表格loading',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'firstSelectedData',
                explain: '一级选中的数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'secondSelectedData',
                explain: '二级选中的数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'firstTableTitleField',
                explain: '一级表格展示的字段名',
                type: 'String',
                default: 'nameWithAdverId'
            },
            {
                attribute: 'secondTableTitleField',
                explain: '二级表格展示的字段名',
                type: 'String',
                default: 'retargetName'
            },
            {
                attribute: 'firstTableRowHeight',
                explain: '第一级表格每行的宽度',
                type: 'Number',
                default: '48'
            },
            {
                attribute: 'secondTableRowHeight',
                explain: '第二级表格每行的宽度',
                type: 'Number',
                default: '32'
            },
            {
                attribute: 'firstSelectedRowHeight',
                explain: '已选表格一级表格每行的宽度',
                type: 'Number',
                default: '24'
            },
            {
                attribute: 'secondSelectedRowHeight',
                explain: '已选表格二级表格每行的宽度',
                type: 'Number',
                default: '24'
            },
            {
                attribute: 'deleteRow',
                explain:
                    '如果已选的样式使用slot方式，父组件必须传入要删除行的信息',
                type: 'Object',
                default: '{}'
            },
            {
                attribute: 'secondTableEmptyText',
                explain: '二级数据为空时，提示文字',
                type: 'String',
                default: '请先选择账户'
            },
            {
                attribute: 'isShowSelectedParent',
                explain: '已选是否展示父级数据',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'clearFirstKeyword',
                explain: '是否清空一级搜索框内容',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'clearSecondKeyword',
                explain: '是否清空二级搜索框内容',
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
                eventName: 'on-first-search',
                explain: '一级表格搜索',
                returnValue: '一级输入框的值'
            },
            {
                eventName: 'on-second-search',
                explain: '二级表格搜索',
                returnValue: '二级输入框的值'
            },
            {
                eventName: 'on-selected',
                explain: '右侧已选改变',
                returnValue: '选中的数据'
            },
            {
                eventName: 'on-change-row',
                explain: '表格当前行发生变化的时候会触发该事件',
                returnValue: '当前行的数据'
            },
            {
                eventName: 'on-clear',
                explain: '清空',
                returnValue: '-'
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
                slotsName: 'firstTitle',
                explain: '自定义一级标题右侧内容'
            },
            {
                slotsName: 'secondTitle',
                explain: '自定义二级标题右侧内容'
            },
            {
                slotsName: 'firstColumn',
                explain: '自定义一级表格显示内容'
            },
            {
                slotsName: 'secondColumn',
                explain: '自定义二级表格显示内容'
            },
            {
                slotsName: 'firstSelectedColumn',
                explain: '自定义一级表格，右侧已选显示内容'
            },
            {
                slotsName: 'secondSelectedColumn',
                explain: '自定义二级表格，右侧已选显示内容'
            },
            {
                slotsName: 'empty',
                explain: '自定义表格为空时展示内容'
            }
        ]
    }
]
