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
                title: '可选值',
                key: 'choosable',
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
                explain: '参数驱动显示是否成功或失败',
                type: 'Sring',
                choosable:
                    '可以使用<code>  v-model </code> 双向绑定数据, none（第一步）｜ succeed（全部成功） ｜ error（失败） ｜ portionSucceed（部分成功）',
                default: 'none'
            },
            {
                attribute: 'action',
                explain: '组件上传地址（必填）',
                type: 'Sring',
                choosable: '-',
                default: '""'
            },
            {
                attribute: 'headers',
                explain: '设置上传请求的头部（如添加token等）',
                type: 'Object',
                choosable: '-',
                default: '{}'
            },
            {
                attribute: 'uploadData',
                explain: '上传附带的额外参数（如请求参数等）',
                type: 'Object',
                choosable: '-',
                default: '{}'
            },
            {
                attribute: 'accept',
                explain: '上传的文件类型',
                type: 'String',
                choosable: '-',
                default: '“”'
            },
            {
                attribute: 'format',
                explain: '多文件上传，文件类型验证',
                type: 'Array',
                choosable: '-',
                default: '[]'
            },
            {
                attribute: 'type',
                explain: '上传方式',
                type: 'String',
                choosable: 'select（点击）/drag（拖拽）',
                default: 'drag'
            },
            {
                attribute: 'beforeUpload',
                explain:
                    '上传文件之前的钩子（验证拖拽格式很有用，可对格式进行校验，可使用组件内部方法validateData()对是否要重新上传文件以及是否未选择上传文件进行校验）',
                type: 'Function',
                choosable: '-',
                default: '{}'
            },
            {
                attribute: 'onRemove',
                explain: '文件移除钩子',
                type: 'Function',
                choosable: '-',
                default: '{}'
            },
            {
                attribute: 'onSuccess',
                explain:
                    '文件上传成功的钩子（可以注意一下如果接口返回成功需要调用组件内部方法succeedData()进行组件显示第二部，如失败调用clearFile()可显示重新上传按钮）',
                type: 'Function',
                choosable: '-',
                default: '{}'
            },
            {
                attribute: 'onError',
                explain:
                    '文件上传失败的钩子（调用组件内部clearFile()方法返回第一步）',
                type: 'Function',
                choosable: '-',
                default: '{}'
            },
            {
                attribute: 'onFormatError',
                explain: '上传文件校研失败的钩子',
                type: 'Function',
                choosable: '-',
                default: '{}'
            },
            {
                attribute: 'hintText',
                explain:
                    '上传文件后下方提示文字（显示文件是否上传成功或有几条错误）',
                type: 'String',
                choosable: '-',
                default: '“”'
            },
            {
                attribute: 'columnsHeader',
                explain: '上传错误后显示下方表格头部（必传）',
                type: 'Array',
                choosable: '-',
                default: '[]'
            },
            {
                attribute: 'errorTable',
                explain: '上传错误后显示错误信息列表具体内容',
                type: 'Array',
                choosable: '-',
                default: '[]'
            },
            {
                attribute: 'tableOption',
                explain: '表格属性',
                type: 'Object',
                choosable: '-',
                default: '{}'
            },
            {
                attribute: 'showErrorTable',
                explain: '表格状态',
                type: 'Boolean',
                choosable: '-',
                default: 'false'
            },
            {
                attribute: 'tautologyText',
                explain: '重试按钮文字',
                type: 'String',
                choosable: '-',
                default: '""'
            },
            {
                attribute: 'clearFileText',
                explain: '删除按钮文字',
                type: 'String',
                choosable: '-',
                default: '""'
            },
            {
                attribute: 'tautologyTooltipContent',
                explain: '重试按钮后面的问号提示文字',
                type: 'String',
                choosable: '-',
                default: '""'
            },
            {
                attribute: 'clearFileTooltipContent',
                explain: '删除按钮后面的问号提示文字',
                type: 'String',
                choosable: '-',
                default: '""'
            },
            {
                attribute: 'isTautologyTooltip',
                explain: '重试按钮后面的问号提示是否显示',
                type: 'Boolean',
                choosable: 'false/true',
                default: 'false'
            },
            {
                attribute: 'isClearFileTooltip',
                explain: '删除按钮后面的问号提示是否显示',
                type: 'Boolean',
                choosable: 'false/true',
                default: 'false'
            },
            {
                attribute: 'isClearFile',
                explain: '删除按钮是否显示',
                type: 'Boolean',
                choosable: 'false/true',
                default: 'true'
            }
        ]
    },
    {
        title: 'events',
        columns: [
            {
                title: '参数',
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
                attribute: 'tautology',
                explain:
                    '重新上传触发，显示(需要重制, percentage: 上传进度 upDateState: 上传状态 hintText: 提示文字)',
                type: '-',
                default: '-'
            },
            {
                attribute: 'clearFile',
                explain:
                    '删除或者上传成功之后调用的文件清空方法（所有外部传入参数需重置）',
                type: '-',
                default: '-'
            }
        ]
    },
    {
        title: '$refs 组件内部可调用方法',
        columns: [
            {
                title: '参数',
                key: 'parameter',
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
                parameter: 'validateData()',
                explain:
                    '上传之前的验证（包括是否要重新上传文件以及是否未选择上传文件，建议配合beforeUpload一起调用）（可选调用）'
            }
        ]
    },
    {
        title: 'slot 可替换内容',
        columns: [
            {
                title: '参数',
                key: 'parameter',
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
                parameter: 'upDateImage',
                explain: '上传图片可替换，上传图片默认为小云朵的图片'
            },
            {
                parameter: 'acceptText',
                explain: '支持文件上传文字可替换，目前为“仅支持xxxx文件上传。”'
            },
            {
                parameter: 'iconFont',
                explain: '上传完成过后icon显示的图标默认为excel图标'
            },
            {
                parameter: 'clearFileTooltip',
                explain: '删除按钮后面可替换提示或其他'
            },
            {
                parameter: 'tautologyTooltip',
                explain: '重试按钮后面可替换提示或其他'
            },
            {
                parameter: 'hintText',
                explain:
                    '第二步的错误文字提示可替换，如使用可不穿<code>hintText</code>参数'
            }
        ]
    }
]
