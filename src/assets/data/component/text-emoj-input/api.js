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
                attribute: 'validHtmlMarkFn',
                explain:
                    '验证插入文档标记的校验规则。@param {string} value html标记内容；@returns {boolean} true 可以插入 false 不能插入。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'transformHtml2Text',
                explain:
                    '将html标记 转换为 通用文本内容。@param {string} value html标记内容；@returns {string} 通用文本内容。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'transformText2Html',
                explain:
                    '将通用文本内容  转换为 html标记。@param {string} value 通用文本内容；@returns {string} html标记内容。',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'value',
                explain: '传入的默认文本（通用文本内容）。必填。',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'canUseHtml',
                explain: '是否能使用html标记。只能输入文本时使用。',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'isSingleLine',
                explain: '是否单行显示。控制输入框只能显示一行。',
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
                    '{ currentData: 当前值, keyInputEvent: 事件对象, stringHtml: html文本内容, oiginalText: 默认转换的纯文本, disableInputFn: 禁用默认行为的方法 }'
            },
            {
                eventName: 'on-keydown',
                explain: '在键盘按下时触发。',
                returnValue:
                    '{ keyDownEvent: 事件对象, stringHtml: html文本内容, disableInputFn: 禁用默认行为的方法 }'
            },
            {
                eventName: 'on-foucs',
                explain: '在输入框聚焦时触发。',
                returnValue: '事件对象'
            },
            {
                eventName: 'on-blur',
                explain: '在输入框失去焦点时触发。',
                returnValue: '事件对象'
            }
        ]
    }
]
