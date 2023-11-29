import select from './select.js'
import selectMultiple from './select-multiple.js'
import input from './input.js'
import text from './text.js'
import multiCascader from './multi-cascader.js'
import indicator from './indicator.js'
import slot from './slot.js'
import api from './api.js'
export default {
    title: 'EchoContainer 选项回显',
    summary: {
        name: '概述',
        info: ['支持多种选项回显。', '应用场景：投放管理、素材报表的筛选项。']
    },
    example: [
        select,
        selectMultiple,
        input,
        text,
        multiCascader,
        indicator,
        slot
    ],
    api
}
