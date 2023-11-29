import page403 from './403.js'
import page404 from './404.js'
import page500 from './500.js'
import api from './api.js'
export default {
    title: 'Exception 异常',
    summary: {
        name: '概述',
        info: [
            '异常页用于对页面特定的异常状态进行反馈。通常，它包含对错误状态的阐述，并向用户提供建议或操作，避免用户感到迷失和困惑。'
        ]
    },
    example: [page403, page404, page500],
    api
}
