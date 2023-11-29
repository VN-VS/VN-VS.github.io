import basic from './basic.js'
import addBreadcrumb from './add-breadcrumb.js'
import multipleForms from './multiple-forms.js'
import combination from './combination.js'
import api from './api.js'
export default {
    title: 'PageHeader 页头组件',
    summary: {
        name: '概述',
        info: [
            '页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。'
        ]
    },
    example: [basic, addBreadcrumb, multipleForms, combination],
    api
}
