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
                explain:
                    '用于渲染页面的数据(格式与iview的级联选择器的数据格式一致)',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'value',
                explain: '默认已选择数据项',
                type: 'array',
                default: '[ ]'
            },
            {
                attribute: 'expandTrigger',
                explain: '次级菜单的展开方式,可选click',
                type: 'String',
                default: 'hover'
            },
            {
                attribute: 'separator',
                explain: '选项分隔符',
                type: 'String',
                default: 'click'
            },
            {
                attribute: 'valueKey',
                explain: '指定选项的值为选项对象的某个属性值',
                type: 'String',
                default: 'value'
            },
            {
                attribute: 'labelKey',
                explain: '指定选项标签为选项对象的某个属性值',
                type: 'String',
                default: 'label'
            },
            {
                attribute: 'clearable',
                explain: '是否支持清空选项',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'placeholder',
                explain: '占位符',
                type: 'String',
                default: '请选择'
            },
            {
                attribute: 'popperClass',
                explain: '下拉框的类名',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'onlyShowChecked',
                explain: '是否只显示选中的',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'isShowIndeterminate',
                explain: '是否显示半选',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'selectChildren',
                explain: '是否允许父子联动',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'maxCount',
                explain: '最大选择数，使用该属性不能使用全选功能',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'transfer',
                explain:
                    '是否放在body下面展示选择项 （在body下面要自己写样式）',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'placement',
                explain:
                    '下拉菜单出现的位置。可选值：top，top-start，top-end，bottom，bottom-start，bottom-end，leftleft-start，left-end，right，right-start，right-end',
                type: 'String',
                default: 'bottom'
            },
            {
                attribute: 'labelLv',
                explain: 'label 显示的层级。可选值：all 全部 ， last 最后一层',
                type: 'String',
                default: 'all'
            },
            {
                attribute: 'sync',
                explain:
                    '异步加载子元素 异步传入数据 sync 开启时必填 syncCallBack',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'syncCallBack',
                explain: '请求数据的回调 sync开启',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'maxRequest',
                explain: '最大的请求层级 0 为不限制',
                type: 'Number',
                default: '0'
            },
            {
                attribute: 'notSelectNext',
                explain:
                    '设置上级的全选不用选择下一级的数据。 false 不用选择下一级， true 必须选择下一级。该版本暂不支持。',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'checkKey',
                explain:
                    '每一级别是否可以选择的数据字段，不填写默认显示选择框。tips: 只有在当前层级全部设置为true才会显示复选框和全选框。',
                type: 'String',
                default: 'showCheck'
            },
            {
                attribute: 'echoLabel',
                explain: '是否要回显labels',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'maxTagCount',
                explain: '多选时最多显示多少个 tag',
                type: 'Number',
                default: '-'
            },
            {
                attribute: 'maxTagPlaceholder',
                explain: '隐藏 tag 时显示的内容，参数是剩余项数量',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'tagMaxWidth',
                explain:
                    'tag的最大显示宽度，单位：px。传入 0 不限制；默认最大值为88',
                type: 'String | Number',
                default: '88'
            },
            {
                attribute: 'tooltipKey',
                explain: '作为 tooltip 唯一标识的键名.面板选项的tooltip字段key',
                type: 'String',
                default: 'tooltip'
            },
            {
                attribute: 'showEmptyWrapByNotSynced',
                explain:
                    '当传入全量数据时，将可主动控制是否显示"暂无数据"面板项。使用该属性时，sync需要关闭，默认展示',
                type: 'Boolean',
                default: true
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
                eventName: 'change',
                explain: '选中值发生变化时触发',
                returnValue: '目前的选中值'
            },
            {
                eventName: 'visibleChange',
                explain: '下拉框出现/隐藏时触发',
                returnValue: '出现则为 true，隐藏则为 false'
            },
            {
                eventName: 'removeTag',
                explain: '移除tag时触发',
                returnValue: '移除的tag值。label 标签名；value 当前标签的值'
            },
            {
                eventName: 'clear',
                explain: '可清空模式下用户点击清空按钮时触发',
                returnValue: '-'
            },
            {
                eventName: 'getLables',
                explain: '获取对应的labels',
                returnValue: '[ ]'
            }
        ]
    }
]
