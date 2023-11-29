import api from './api.js'
import basic from './basic.js'
import placeholder from './placeholder.js'
import error from './error.js'
import preview from './preview.js'
import lazy from './lazy.js'

export default {
    title: 'Image 图片',
    summary: {
        name: '概述',
        info: ['可预览的图片容器，并支持懒加载，自定义占位、加载失败等']
    },
    example: [basic, placeholder, error, preview, lazy],
    api
}
