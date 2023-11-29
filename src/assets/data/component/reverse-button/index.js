import api from './api'
import base from './base'
import loading from './loading'

export default {
    title: 'ReverseButton 选择配置按钮',
    summary: {
        name: '概述',
        info: [
            '适用于ADS中通过点击按钮显示弹出框，并对选择数据的数量回显，按钮包含未选、已选、加载中三种状态。'
        ]
    },
    example: [base, loading],
    api
}
