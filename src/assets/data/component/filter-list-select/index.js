import basic from './base.js'
import group from './group.js'
import panel from './panel.js'
import slot from './slot.js'
import image from './image.js'
import saveType from './save-type.js'
import action from './action.js'
import deleteExample from './delete.js'

import api from './api.js'
export default {
    title: 'FilterListSelect 选择器',
    summary: {
        name: '概述',
        info: [
            '何时使用：弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。',
            '支持功能：支持单选、多选、搜索，以及键盘快捷操作。支持虚拟滚动。',
            '应用场景：通常选择账号、选择应用、选择产品、选择类组件。'
        ]
    },
    example: [
        basic,
        panel,
        group,
        image,
        action,
        deleteExample,
        saveType,
        slot
    ],
    api
}
