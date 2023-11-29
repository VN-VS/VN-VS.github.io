import secondTable from './second-table.js'
import firstTable from './first-table.js'
import slotTitle from './slot-title.js'
import secondTableSelected from './second-table-selected.js'
import api from './api.js'
export default {
    title: 'ProductSelect 产品/项目选择',
    summary: {
        name: '概述',
        info: [
            '一级或二级表格选择，自定义样式，无分页，支持上万条数据选择不卡顿。'
        ]
    },
    example: [secondTable, secondTableSelected, firstTable, slotTitle],
    api
}
