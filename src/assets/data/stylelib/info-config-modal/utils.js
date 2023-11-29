/**
 * 判断是否全等
 * @param obj1
 * @param obj2
 */
export const isEqualObject = (obj1, obj2) => {
    let d1 = JSON.stringify(obj1)
    let d2 = JSON.stringify(obj2)
    return d1 === d2
}

/**
 * 判断是否是一个js对象
 * @param value
 */
export const isObject = value => {
    return Object.prototype.toString.call(value) === '[object Object]'
}

// -----------枚举数据----------------
// 状态值枚举
export const statusList = [
    {
        label: '关闭',
        value: 'close',
        isMulti: false
    },
    {
        label: '开启',
        value: 'open',
        isMulti: false
    }
]

// 数据枚举
export const radioList = [
    {
        label: '北京',
        value: 'beijing',
        isMulti: false
    },
    {
        label: '上海',
        value: 'shanghai',
        isMulti: false
    },
    {
        label: '广州',
        value: 'guangzhou',
        isMulti: false
    },
    {
        label: '未知',
        value: 'notknown',
        isMulti: false
    }
]
export const radio2List = [
    {
        label: '苹果',
        value: 'pingguo',
        isMulti: false,
        tip: ['这个不好吃']
    },
    {
        label: '桃子',
        value: 'taozi',
        isMulti: false
    },
    {
        label: '李子',
        value: 'lizi',
        isMulti: false
    },
    {
        label: '未知',
        value: 'notknown',
        isMulti: false
    }
]

export const multiList = [
    {
        label: '一',
        value: '1',
        isMulti: false
    },
    {
        label: '二',
        value: '2',
        isMulti: true
    },
    {
        label: '三',
        value: '3',
        isMulti: true
    },
    {
        label: '未知',
        value: 'notknown',
        isMulti: false
    }
]

export const infoRadioList = [
    {
        label: '扩量人群',
        value: 'renqun',
        isMulti: false
    },
    {
        label: '扩量人群组合',
        value: 'renqun_zuhe',
        isMulti: false
    }
]
