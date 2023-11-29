// 库的名称
const repositoryName = 'ry-design-web'
// 访问giturl
const setGitViewUrl = (brancheName = '') => {
    const viewUrl = `https://git.minrow.com/adsdesk/${repositoryName}/tree/style/`
    brancheName = brancheName.toLocaleLowerCase()
    return viewUrl + brancheName
}

// 下载giturl
const setGitLoadUrl = (brancheName = '') => {
    const loadUrl = `https://git.minrow.com/adsdesk/${repositoryName}/-/archive/style/`
    // 转小写 && / 替换成 -
    brancheName = brancheName.toLocaleLowerCase().replace(/\//g, '-')
    const zipUrl = `/${repositoryName}-${brancheName}.zip`
    return loadUrl + brancheName + zipUrl
}

// 组件导入
import layoutModuleConfig from './layout-module-config'
import { commonTable, adBasicTable, assetBasicTable } from './table'
import infoConfigModal from './info-config-modal'

// 字段
export const styleTemplateField = [
    {
        name: '基础结构',
        value: 'infrastructure',
        children: [
            {
                id: 'layout-module-config',
                title: '创建-基础结构',
                cover: require('@/assets/img/stylelib/layout-module.png'),
                gitlabUrl: setGitViewUrl('layout-module-config'),
                gitlabDownLoadUrl: setGitLoadUrl('layout-module-config'),
                // 排序
                hot: 0,
                praised: 0,
                likes: 0
            }
        ]
    },
    {
        name: '表格',
        value: 'table',
        children: [
            {
                id: 'common-table',
                title: '通用表格',
                cover: require('@/assets/img/stylelib/common-table.png'),
                gitlabUrl: setGitViewUrl('common-table'),
                gitlabDownLoadUrl: setGitLoadUrl('common-table'),
                // 排序
                hot: 0,
                praised: 0,
                likes: 0
            },
            {
                id: 'ad-basic-table',
                title: '广告创建-基础表格',
                cover: require('@/assets/img/stylelib/ad-basic-table.png'),
                gitlabUrl: setGitViewUrl('ad-basic-table'),
                gitlabDownLoadUrl: setGitLoadUrl('ad-basic-table'),
                // 排序
                hot: 0,
                praised: 0,
                likes: 0
            },
            {
                id: 'asset-basic-table',
                title: '资产-基础表格',
                cover: require('@/assets/img/stylelib/asset-basic-table.png'),
                gitlabUrl: setGitViewUrl('asset-basic-table'),
                gitlabDownLoadUrl: setGitLoadUrl('asset-basic-table'),
                // 排序
                hot: 0,
                praised: 0,
                likes: 0
            }
        ]
    },
    {
        name: '弹窗',
        value: 'modal-windows',
        children: [
            {
                id: 'info-config-modal',
                title: '信息配置类弹窗',
                cover: require('@/assets/img/stylelib/info-config-modal.png'),
                gitlabUrl: setGitViewUrl('info-config-modal'),
                gitlabDownLoadUrl: setGitLoadUrl('info-config-modal'),
                // 排序
                hot: 0,
                praised: 0,
                likes: 0
            }
        ]
    }
]

// 组件
const mappingComponent = {
    'layout-module-config': layoutModuleConfig,
    'common-table': commonTable,
    'ad-basic-table': adBasicTable,
    'asset-basic-table': assetBasicTable,
    'info-config-modal': infoConfigModal
}

// 获取组件
export const getComponentInfo = componentId => {
    if (!componentId) {
        throw new Error('getComponentInfo中componentId,为必填项')
    } else if (!mappingComponent.hasOwnProperty(componentId)) {
        throw new Error(`getComponentInfo中${componentId}异常`)
    }

    let component = mappingComponent[componentId]
    if (!component) {
        throw new Error(`getComponentInfo=>mappingComponent${componentId}异常`)
    }
    return component
}
