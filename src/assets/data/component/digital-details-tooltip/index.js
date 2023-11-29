/*
 * @Date: 2022-12-08 19:52:51
 * @LastEditTime: 2022-12-23 19:44:39
 * @Description: 自定义按钮
 */
import api from './api.js'
import single from './single.js'
import groupWithoutSeriesTitle from './group-without-series-title.js'
import sequence from './sequence.js'
import seriesTitleGrouping from './series-title-grouping.js'
import sequentialMulticolumn from './sequential-multicolumn.js'

export default {
    title: 'DigitalDetailsTooltip 数字详情展示组件',
    summary: {
        name: '概述',
        info: ['数字详情展示组件。一般应用在创编预览表格中的数据详情的展示']
    },
    example: [
        single,
        groupWithoutSeriesTitle,
        sequence,
        seriesTitleGrouping,
        sequentialMulticolumn
    ],
    api
}
