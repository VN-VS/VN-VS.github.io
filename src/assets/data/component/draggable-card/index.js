import api from './api.js'
import basic from './basic.js'
import beforeRemove from './before-remove.js'

export default {
    title: 'DraggableCard 拖拽组件',
    summary: {
        name: '概述',
        info: ['通过拖拽对已选数据项重排，包含禁用、删除、置顶。']
    },
    example: [basic, beforeRemove],
    api
}
