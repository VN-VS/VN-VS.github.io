import api from './api.js'
import base from './base.js'
import baseError from './base-error.js'
export default {
    title: 'BatchUploadXls 上传Excel',
    summary: {
        name: '概述',
        info: [
            '通过预上传，后端接口返回上传文件中错误信息或正确信息，用户可根据预上传结果对文件进行修改，确保上传正确文件。'
        ]
    },
    example: [base, baseError],
    api
}
