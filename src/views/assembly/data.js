
import transfer from '@/assets/data/component/transfer/index.js'
const mappingComponent = {
    'components-transfer': transfer
}
export const getRunTemplate = (componentId, exampleId) => {
    if (!componentId || !exampleId) {
        throw new Error('getRunTemplate中componentId,exampleId为必填项')
    } else if (!mappingComponent.hasOwnProperty(componentId)) {
        throw new Error(`getRunTemplate中${componentId}异常`)
    }
    let component = mappingComponent[componentId]
    if (!component) {
        throw new Error(`getRunTemplate=>mappingComponent${componentId}异常`)
    }
    let find = component.example.find(val => val.id === exampleId)
    if (!find) {
        throw new Error(`getRunTemplate中${exampleId}异常`)
    }
    return find.content
}

export const getComponentInfo = (componentId) => {
    if (!componentId) {
        throw new Error('getRunTemplate中componentId,为必填项')
    } else if (!mappingComponent.hasOwnProperty(componentId)) {
        throw new Error(`getRunTemplate中${componentId}异常`)
    }
    let component = mappingComponent[componentId]
    if (!component) {
        throw new Error(`getRunTemplate=>mappingComponent${componentId}异常`)
    }
    return component
}