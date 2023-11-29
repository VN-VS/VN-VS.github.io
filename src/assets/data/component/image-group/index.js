import api from './api.js'
import basic from './basic.js'
import style from './style.js'
import status from './status.js'

export default {
    title: 'ImageGroup 图片组',
    summary: {
        name: '概述',
        info: [
            '图片组内的图片类型：包含横图、竖图、方图、视频；图片组内的数量：包含有单图、双图、三图、四图、六图；在固定显示区域的不同展示方式。',
            '支持功能：选择、视频角标、删除组、预览组。',
            '应用场景：通常极速创建中素材已选回显、广告预览列表、素材列表。'
        ]
    },
    example: [basic, status, style],
    api
}
