import basic from '@/assets/data/component/date-picker/basic'
import range from '@/assets/data/component/date-picker/range'
import confirm from '@/assets/data/component/date-picker/confirm'
import api from '@/assets/data/component/date-picker/api'

export default {
    title: 'DatePicker 时间选择器',
    summary: {
        name: '概述',
        info: ['双日期选择器 ，支持可选开始日期，可选结束日期。']
    },
    example: [basic, range, confirm],
    api
}
