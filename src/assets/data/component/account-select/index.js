import basic from './base.js'
import multiple from './multiple.js'
import group from './group.js'
import crossSubject from './cross-subject.js'
import form from './form.js'
import api from './api.js'
export default {
    title: 'AccountSelect 账户选择',
    summary: {
        name: '概述',
        info: ['支持搜索多选账号,分主体或跨主体选择账号，展现形式为下拉框。']
    },
    example: [basic, multiple, group, crossSubject, form],
    api
}
