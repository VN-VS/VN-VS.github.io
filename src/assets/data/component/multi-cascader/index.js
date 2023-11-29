import async from './async.js'
import clearData from './clear-data.js'
import echoData from './echo-data.js'
import check from './check.js'
import maxcount from './maxcount.js'

import api from './api.js'
export default {
    title: 'MultiCascader 下拉多级复选框',
    summary: {
        name: '概述',
        info: [
            '注入树形数据加载出下拉checkbox-group，数据是比下拉树看着要清晰一点。适用于多级菜单下拉选择的场景，一级下拉暂时没有兼容，可使用 Select 组件。'
        ]
    },
    example: [clearData, echoData, async, check, maxcount],
    api
}
