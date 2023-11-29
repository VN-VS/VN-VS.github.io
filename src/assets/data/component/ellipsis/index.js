import length from './length.js'
import height from './height.js'
import lines from './lines.js'
import table from './table.js'
import preSuffix from './pre-suffix.js'
import api from './api.js'

export default {
    title: 'Ellipsis 省略组件',
    summary: {
        name: '概述',
        info: [
            '文本过长自动处理省略号，支持按照文本长度、最大行数、限制高度三种方式截取。'
        ]
    },
    example: [length, height, lines, table, preSuffix],
    api
}
