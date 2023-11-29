import api from './api.js'
import basic from './basic.js'
import group from './group.js'
import custom from './custom.js'
import slotItem from './slotItem.js'

export default {
    title: 'DropdownPanel 下拉菜单面板',
    summary: {
        name: '概述',
        info: ['下拉菜单面板，在iview-dropdown进行二次封装，支持多种展示方式']
    },
    example: [basic, group, custom, slotItem],
    api
}
