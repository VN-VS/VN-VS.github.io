import basic from './basic'
import modalLarge from './modal-large'
import modalMiddle from './modal-middle'
import modalSmall from './modal-small'
import modalSimple from './modal-simple'
import disabled from './disabled'
import localStorageSizeKey from './localStorageSizeKey'
import api from '@/assets/data/component/page/api'

export default {
    title: 'page 组件',
    summary: {
        name: '概述',
        info: ['分页组件，提供了不同类型，适用于普通页面、弹框页面等场景。']
    },
    example: [
        basic,
        modalLarge,
        modalMiddle,
        modalSmall,
        modalSimple,
        disabled,
        localStorageSizeKey
    ],
    api
}
