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
                attribute: 'dropDownMenuStyle',
                explain: '下拉菜单面板样式。插画按钮支持。Css Style Object',
                type: 'Object',
                default: '{ }'
            },
            {
                attribute: 'dropDownFns',
                explain: '下拉的事件集合。插画按钮支持',
                type: 'Object',
                default: '{ }'
            },
            {
                attribute: 'dropDownItems',
                explain: '下拉属性。插画按钮支持',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'isDropDown',
                explain: '开启下拉。插画按钮支持',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'illustrationUrl',
                explain: '插画图片地址。插画按钮支持',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'dropDownProps',
                explain: `下拉参数选项。插画按钮支持。
                    <br>
                    参数同iview Dropdown Props 参考地址:
                    <br>
                    <a target="_blank" href="https://www.iviewui.com/view-ui-plus/component/navigation/dropdown">https://www.iviewui.com/view-ui-plus/component/navigation/dropdown</a>。
                    <br>
                    注意：
                    <br>
                    trigger 只能传入 hover/click。 默认hover
                    <br>
                    transfer 只能是true
                    `,
                type: 'Object',
                default: '{ }'
            },
            {
                attribute: 'type',
                explain: `按钮类型。
                    <br>
                    可选值为：
                    <br>
                    <code>text</code>文字按钮 
                    <br>
                    <code>primary</code>主要按钮
                    <br>
                    <code>dashed</code>灰色框按钮
                    <br>
                    <code>default</code>默认纯白色按钮
                    <br>
                    <code>icon</code>纯图标按钮
                    <br>
                    <code>illustration</code>插画按钮
                    <br>
                    <code>dark</code>深灰按钮`,
                type: 'String',
                default: 'default'
            },
            {
                attribute: 'icon',
                explain: 'icon字体类型。插画按钮不支持',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'cornerMarker',
                explain: '按钮角标。所有类型都支持',
                type: 'Object',
                default: '{ }'
            },
            {
                attribute: 'loading',
                explain: '加载中状态。插画按钮、图标按钮不支持',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'disabled',
                explain: '是否禁用按钮。图标按钮不支持',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'iconSize',
                explain:
                    '图标按钮大小。枚举值：large 大号32x32、small 小号24x24。图标按钮支持',
                type: 'String',
                default: 'large'
            },
            {
                attribute: 'isSelected',
                explain: '图标按钮是否选择中。图标按钮支持',
                type: 'Boolean',
                default: 'false'
            }
        ]
    },
    {
        title: 'dropDownItems 字段参数',
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
                attribute: 'name',
                explain: '用来标识这一项',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'disabled',
                explain: '禁用该项',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'divided',
                explain: '显示分割线',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'selected',
                explain: '标记该项为选中状态',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'label',
                explain: '文本',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'render',
                explain: '自定义渲染内容',
                type: 'Render Function',
                default: '-'
            }
        ]
    },
    {
        title: 'dropDownFns 字段参数',
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
                attribute: 'onDropdownItemClick',
                explain: '下拉子项点击事件',
                type: 'Function',
                default: '返回值：当前选项的内容'
            },
            {
                attribute: 'onDropdownPrimaryClick',
                explain:
                    '左侧主按钮区域点击事件。未开启 isDropDown。该事件也能生效',
                type: 'Function',
                default: '-'
            }
        ]
    },
    {
        title: 'cornerMarker 字段参数',
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
                attribute: 'offset',
                explain: '角标元素位置偏移量。[横向,纵向]。',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'placement',
                explain:
                    '角标元素位置。默认在右上角展示。枚举值：right-top 右上角； let-top 左上角',
                type: 'String',
                default: 'right-top'
            },
            {
                attribute: 'width',
                explain: '角标元素宽度。单位px',
                type: 'Number | String',
                default: '-'
            },
            {
                attribute: 'height',
                explain: '角标元素高度。单位px',
                type: 'Number | String',
                default: '-'
            },
            {
                attribute: 'src',
                explain: '角标图片地址',
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
                eventName: 'click',
                explain:
                    '按钮点击事件。全部按钮类型下都能触发，点击到按钮区域即可。',
                returnValue: 'HtmlEvent'
            }
        ]
    }
]
