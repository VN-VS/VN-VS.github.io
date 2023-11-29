import api from './api.js'
import basic from './basic.js'
import notFoundImage from './not-found-image.js'
import notFoundContent from './not-found-content.js'
import notFoundContentNull from './not-found-content-null.js'
import notFoundContentSmall from './not-found-content-small.js'

export default {
    title: 'Empty 空状态',
    summary: {
        name: '概述',
        info: ['空状态时的展示占位图']
    },
    example: [
        basic,
        notFoundImage,
        notFoundContent,
        notFoundContentNull,
        notFoundContentSmall
    ],
    api
}
