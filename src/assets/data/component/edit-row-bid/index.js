import text from './text.js'
import number from './number.js'
import custom from './custom.js'
import radio from './radio.js'
import api from './api.js'
export default {
    title: 'EditRowBid 表格行内编辑出价',
    summary: {
        name: '概述',
        info: [
            '在预览广告的表格中，修改单独一行的数据（出价、名称、单选类型、自定义内容）。'
        ]
    },
    example: [text, number, radio, custom],
    api
}
