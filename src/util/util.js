export const getInterceptValue = (data, value) => {
    let path = decodeURI(data)
    let index = path.indexOf(value)
    return path.slice(index + value.length)
}
/**
 * 获取cook
 */
export const getCookie = cookieName => {
    var cookieValue = ''
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';')
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i]
            if (
                cookie.substring(0, cookieName.length + 2).trim() ==
                cookieName.trim() + '='
            ) {
                cookieValue = cookie.substring(
                    cookieName.length + 2,
                    cookie.length
                )
                break
            }
        }
    }
    return cookieValue
}
export const renderInnerHTML = (h, { column, row }) => {
    return h('div', {
        domProps: {
            innerHTML: row[column.key]
        }
    })
}

// 获取导航默认选中path
export const getTopByPath = menu => {
    let strPath = ''
    const deep = _menu => {
        let { path, href } = _menu
        if (path) {
            strPath = `${strPath}/${path}`
        }
        if (href) {
            strPath = `${strPath}/${href}`
        }
        if (_menu.child.length) {
            deep(_menu.child[0])
        }
    }
    deep(menu)
    return strPath
}

export const getNavInfo = ({ data, id, path }) => {
    const params = {
        // 左侧导航搜索
        firstNav: {},
        leftCurrent: '',
        childCurrent: '',
        firstId: '',
        // 支持搜索
        searchOpen: false,
        // 默认展开
        openNames: []
    }
    let list = path.split('/')
    if (list.length > 1) {
        params.firstId = list[1]
    }
    if (!Array.isArray(data) || !id) {
        return params
    }
    for (let value of data) {
        findPath({
            data: value,
            params,
            id,
            firstNav: value
        })
    }
    if (Object.keys(params.firstNav).length) {
        params.openNames = params.firstNav.child.map(val => val.id)
    }
    return params
}

const findPath = ({ data, params, id, firstNav }) => {
    if (data && data.child) {
        for (let item of data.child) {
            if (item.href === id) {
                Object.assign(params, {
                    firstNav: firstNav,
                    leftCurrent: item.id,
                    childCurrent: item.id,
                    firstId: firstNav.id,
                    searchOpen: firstNav.searchInfo.show
                })
                break
            } else if (item.child && item.child.length) {
                findPath({ data: item, params, id, firstNav })
            }
        }
    }
}

// 生成随机字符串
export const randomStr = (len = 32) => {
    const $chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    const maxPos = $chars.length
    let str = ''
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return str
}

// 获取搜索信息
export const getSearchInfo = ({ child, searchInfo, name, path }) => {
    let info = {
        list: [],
        name,
        info: searchInfo
    }
    const searchList = (data, box, routerTo) => {
        if (data && data.length) {
            data.forEach(item => {
                if (item.child.length > 0) {
                    return searchList(item.child, box, routerTo)
                } else {
                    box.push({
                        name: item.name,
                        href: item.href,
                        englishName: item.englishName,
                        routerTo: routerTo + '/' + item.href
                    })
                }
            })
        }
    }
    child.forEach(item => {
        let routerTo = '/' + path + '/' + item.path
        searchList(item.child, info.list, routerTo)
    })
    return info
}
