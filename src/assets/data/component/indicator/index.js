import api from './api.js'
import basic from './basic.js'
import modalIndicator from './modal-indicator.js'

export default {
    title: 'Indicator 数据指标',
    summary: {
        name: '概述',
        info: [
            '展示了数据指标选择、弹窗内展示数据指标。',
            '对选择的指标项，支持等于、不等于、小于、大于、大于等于、小于等于、介于等多种类型，输入数值的最大值和最小值可自定义。',
            '应用场景：投放管理、素材报表筛选项-数据指标。'
        ]
    },
    example: [basic, modalIndicator],
    api
}
