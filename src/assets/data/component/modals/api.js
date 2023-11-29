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
                explain: '是否显示弹出框',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'draggable',
                explain: '是否可以拖拽移动',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'width',
                explain: '对话框宽度',
                type: 'Number | String',
                default: '1200'
            },
            {
                attribute: 'title',
                explain: '弹出框标题',
                type: 'String',
                default: '标题'
            },
            {
                attribute: 'closable',
                explain: '是否可以按 Esc 键关闭',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'mask-closable',
                explain: '是否允许点击遮罩层关闭',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'modal-loading',
                explain: '确定后是否展示loading',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'is-reset',
                explain: '是否展示左下角重置按钮',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'reset-text',
                explain: '重置文字',
                type: 'String',
                default: '重置'
            },
            {
                attribute: 'is-create',
                explain: '是否展示左下角新建按钮，与重置按钮显示样式不一样',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'create-text',
                explain: '新建文字',
                type: 'String',
                default: '新建'
            },
            {
                attribute: 'footer-border-none',
                explain: '是否展示Footer Border',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'lock-scroll',
                explain: '是否禁止对页面滚动条的修改',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'close-scroll',
                explain: '关闭弹出框是否展示滚动条',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'header-obj',
                explain:
                    '包含的属性：{ title: "带副标题的弹框", subTitle: "个广告计划", subNum: 3, titleNum: 5, total: 500 }，配合 isSlotDefaultHeader 使用',
                type: 'Object',
                default: '{}'
            },
            {
                attribute: 'is-slot-default-header',
                explain: '是否展示带插槽的默认header',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'is-slot-header',
                explain: '是否展示带插槽的header',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'diy-slot-footer',
                explain: '自定义插槽footer',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'class-name',
                explain:
                    '设置对话框容器.ivu-modal-wrap的类名，可辅助实现垂直居中等自定义效果',
                type: 'String',
                default: ''
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
                eventName: 'on-reset',
                explain: '点击重置按钮触发事件',
                returnValue: '-'
            },
            {
                eventName: 'on-create',
                explain: '点击新建按钮触发事件',
                returnValue: '-'
            },
            {
                eventName: 'on-cancel',
                explain: '点击取消按钮触发事件',
                returnValue: '-'
            },
            {
                eventName: 'on-ok',
                explain: '点击确定按钮触发事件',
                returnValue: '-'
            }
        ]
    },
    {
        title: 'rd-delete-modals props',
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
                attribute: 'delete-content',
                explain: '删除弹框内容',
                type: 'String',
                default: '""'
            },
            {
                attribute: 'styles',
                explain: '删除弹框内容的样式',
                type: 'Object',
                default: '{}'
            },
            {
                attribute: 'delete-icon-name',
                explain: '显示图片（现仅支持警告图片)，默认warning',
                type: 'String',
                default: 'warning'
            },
            {
                attribute: 'delete-has-close',
                explain: '是否显示右上角关闭差号按钮',
                type: 'Boolean',
                default: 'true'
            }
        ]
    },
    {
        title: 'rd-delete-modals events',
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
                eventName: 'delete-input',
                explain: '右上角关闭按钮点击触发状态',
                returnValue: '-'
            }
        ]
    },
    {
        title: 'rd-delete-modals slot 可替换内容',
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
                parameter: 'delete-modal-img',
                explain: '警告图片可替换'
            },
            {
                parameter: 'delete-modal-content',
                explain: '删除组件文字可替换'
            }
        ]
    }
]
