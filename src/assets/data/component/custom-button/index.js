/*
 * @Date: 2022-12-08 19:52:51
 * @LastEditTime: 2022-12-21 14:51:14
 * @Description: 自定义按钮
 */
import api from './api.js'
import basic from './basic.js'
import disabled from './disabled.js'
import iconButton from './icon-button.js'
import tagButton from './tag-button.js'

import loading from './loading.js'
import illustration from './illustration.js'
import sizeButton from './size-button.js'

export default {
    title: 'Button 按钮组件',
    summary: {
        name: '概述',
        info: ['按钮是一种命令组件，可发起一个即时操作。']
    },
    example: [
        basic,
        iconButton,
        illustration,
        tagButton,
        sizeButton,
        loading,
        disabled
    ],
    api
}
