import basic from './base.js'
import position from './position.js'
import custom from './custom.js'
import disabled from './disabled.js'
import delay from './delay.js'
import autoWrap from './auto-wrap.js'

import api from './api'

export default {
    title: '气泡提示',
    summary: {
        name: '概述',
        info: [
            '基于iView UI库的Tooltip组件实现，主要解决使用组件改变DOM结构的问题，Tooltip组件支持的属性 v-tooltip 也都支持。'
        ]
    },
    example: [basic, position, custom, disabled, delay, autoWrap],
    api
}
