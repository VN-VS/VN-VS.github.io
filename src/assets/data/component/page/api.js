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
                attribute: 'type',
                explain: '指定当前分页的类型',
                type: 'default | m-large | m-middle | m-small | m-simple',
                default: 'default'
            },
            {
                attribute: 'total',
                explain: '数据总数，数量为0则分页组件不展示',
                type: 'Number',
                default: '0'
            },
            {
                attribute: 'size',
                explain: '每页条数',
                type: 'Number',
                default: '50'
            },
            {
                attribute: 'current',
                explain: '当前页码',
                type: 'Number',
                default: '1'
            },
            {
                attribute: 'sizeOptons',
                explain: '每页条数切换的配置',
                type: 'Array',
                default: '[10, 20, 50, 100, 150, 200]'
            },
            {
                attribute: 'disabled',
                explain: '禁用组件',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'localStorageSizeKey',
                explain: 'localStorage存储size的key,可自定义声明',
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
                eventName: 'page-change',
                explain: '在页码改变或切换每页条数时的回调',
                returnValue: '{current,size}'
            }
        ]
    }
]
