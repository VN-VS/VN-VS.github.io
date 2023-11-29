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
                attribute: 'widthType',
                explain:
                    '宽度的使用形式。 等分 equalDivision 自定义比例 customScale。',
                type: 'String',
                default: 'equalDivision'
            },
            {
                attribute: 'cloWidthList',
                explain:
                    '自定义时的定义的每一列的宽度集合。校验规则：1、必须是自定义比例的类型 widthType 为 customScale。2、slotList 必须符合规则。3、与 slotList 是一样的长度。4、不能存在不是数字的项。5、比例之和要等于100。',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'minWidth',
                explain: '容器最小宽度。',
                type: 'Number',
                default: '1152'
            },
            {
                attribute: 'width',
                explain:
                    '适应区域的宽度 设置为0，有内容撑开（自适应宽度，等分宽度）。',
                type: 'Number',
                default: '0'
            },
            {
                attribute: 'height',
                explain: '适应区域的高度。',
                type: 'Number',
                default: '480'
            },
            {
                attribute: 'slotList',
                explain:
                    '必填。配置的组件Id列表，控制顺序和位置。每一项的值都应该是唯一的。校验规则：1、数组并且必须有值。2、每一项也是数组且必须有值。3、第二层的结构每一项必须是字符串且有值。4、不能有重复的id。',
                type: 'Array',
                default: '[ ]'
            },
            {
                attribute: 'slotRenders',
                explain: '根据配置的id，获取到的render函数列表。',
                type: 'Object',
                default: '{ }'
            }
        ]
    },
    {
        title: 'layout-module-view 的属性',
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
                attribute: 'title',
                explain: '名称。',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'showFooter',
                explain: '显示尾部。默认不显示。',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'header',
                explain: '头部渲染插槽。',
                type: 'Slot',
                default: '-'
            },
            {
                attribute: 'footer',
                explain: '尾部渲染插槽。',
                type: 'Slot',
                default: '-'
            },
            {
                attribute: 'main',
                explain: '中间内容渲染插槽。',
                type: 'Slot',
                default: '-'
            },
            {
                attribute: 'headerRender',
                explain:
                    '头部渲染函数。对应 header 插槽内容，传入该属性会直接覆盖。',
                type: 'Render Function',
                default: '-'
            },
            {
                attribute: 'footerRender',
                explain:
                    '尾部渲染函数。对应 footer 插槽内容，传入该属性会直接覆盖。',
                type: 'Render Function',
                default: '-'
            },
            {
                attribute: 'mainRender',
                explain:
                    '中间内容渲染函数。对应 main 插槽内容，传入该属性会直接覆盖。',
                type: 'Render Function',
                default: '-'
            }
        ]
    }
]
