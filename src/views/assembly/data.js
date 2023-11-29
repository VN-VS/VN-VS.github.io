import transfer from '@/assets/data/component/transfer/index.js'
import multiCascader from '@/assets/data/component/multi-cascader/index.js'
import prefixContainer from '@/assets/data/component/prefix-container/index.js'
import singleHeader from '@/assets/data/component/single-header/index.js'
import multiRadioButton from '@/assets/data/component/multi-radio-button/index.js'
import breadcrumb from '@/assets/data/component/breadcrumb/index.js'
import pageHeader from '@/assets/data/component/page-header/index.js'
import pageHeaderModule from '@/assets/data/component/page-header-module/index.js'
import accountList from '@/assets/data/component/account-list/index.js'
import radioGroup from '@/assets/data/component/radio-group/index.js'
import editRowBid from '@/assets/data/component/edit-row-bid/index.js'
import modals from '@/assets/data/component/modals/index.js'
import reverseButton from '@/assets/data/component/reverse-button'
import layoutModuleConfig from '@/assets/data/component/layout-module-config/index.js'
import batchUploadXls from '@/assets/data/component/batch-upload-xls/index.js'
import textEmojInput from '@/assets/data/component/text-emoj-input/index.js'
import ellipsis from '@/assets/data/component/ellipsis/index.js'
import draggableCard from '@/assets/data/component/draggable-card/index.js'
import tableColumns from '@/assets/data/component/table-columns/index.js'
import textTtemShow from '@/assets/data/component/text-item-show/index.js'
import tableMultiInputs from '@/assets/data/component/table-multi-inputs/index.js'
import wordLimit from '@/assets/data/component/word-limit/index.js'
import wildcard from '@/assets/data/component/wildcard/index.js'
import textInputList from '@/assets/data/component/text-input-list/index.js'
import cascaderTransfer from '@/assets/data/component/cascader-transfer/index.js'
import accountSelect from '@/assets/data/component/account-select/index.js'
import exception from '@/assets/data/component/exception/index.js'
import page from '@/assets/data/component/page/index.js'
import button from '@/assets/data/component/custom-button/index.js'
import digitalDetailsTooltip from '@/assets/data/component/digital-details-tooltip/index.js'
import submissionRule from '@/assets/data/component/submission-rule/index.js'
import batchModifyBids from '@/assets/data/component/batch-modify-bids/index.js'
import schedule from '@/assets/data/component/schedule/index.js'
import accountGroupList from '@/assets/data/component/account-group-list/index'
import productSelect from '@/assets/data/component/product-select/index.js'
import sort from '@/assets/data/component/sort/index.js'
import dropdownSearch from '@/assets/data/component/dropdown-search/index.js'
import dropdownPanel from '@/assets/data/component/dropdown-panel/index.js'
import imagePreview from '@/assets/data/component/image-preview/index.js'
import image from '@/assets/data/component/image/index.js'
import imageGroup from '@/assets/data/component/image-group/index.js'
import datePicker from '@/assets/data/component/date-picker/index'
import indicator from '@/assets/data/component/indicator'
import empty from '@/assets/data/component/empty'
import echoContainer from '@/assets/data/component/echo-container/index.js'
import filterListSelect from '@/assets/data/component/filter-list-select/index.js'

//指令
import directiveTooltip from '@/assets/data/directive/tooltip/index.js'
// 组件
const mappingComponent = {
    'components-transfer': transfer,
    'components-multi-cascader': multiCascader,
    'components-prefix-container': prefixContainer,
    'components-single-header': singleHeader,
    'components-multi-radio-button': multiRadioButton,
    'components-breadcrumb': breadcrumb,
    'components-page-header': pageHeader,
    'components-page-header-module': pageHeaderModule,
    'components-account-list': accountList,
    'components-radio-group': radioGroup,
    'components-modals': modals,
    'components-edit-row-bid': editRowBid,
    'components-reverse-button': reverseButton,
    'components-layout-module-config': layoutModuleConfig,
    'components-batch-upload-xls': batchUploadXls,
    'components-text-emoj-input': textEmojInput,
    'components-ellipsis': ellipsis,
    'components-draggable-card': draggableCard,
    'components-table-columns': tableColumns,
    'components-text-item-show': textTtemShow,
    'components-table-multi-inputs': tableMultiInputs,
    'components-word-limit': wordLimit,
    'components-wildcard': wildcard,
    'components-text-input-list': textInputList,
    'components-cascader-transfer': cascaderTransfer,
    'components-account-select': accountSelect,
    'components-exception': exception,
    'components-page': page,
    'components-button': button,
    'components-digital-details-tooltip': digitalDetailsTooltip,
    'components-submission-rule': submissionRule,
    'components-batch-modify-bids': batchModifyBids,
    'components-schedule': schedule,
    'components-account-group-list': accountGroupList,
    'components-product-select': productSelect,
    'components-sort': sort,
    'components-dropdown-search': dropdownSearch,
    'components-dropdown-panel': dropdownPanel,
    'components-image-preview': imagePreview,
    'components-date-picker': datePicker,
    'components-indicator': indicator,
    'components-empty': empty,
    'components-image': image,
    'components-image-group': imageGroup,
    'components-echo-container': echoContainer,
    'components-filter-list-select': filterListSelect,
    // 指令
    'directive-tooltip': directiveTooltip
}
//指令
const mappingDirective = {
    'directive-tooltip': directiveTooltip
}
const mappingData = { ...mappingComponent, ...mappingDirective }

export const getRunTemplate = (componentId, exampleId) => {
    if (!componentId || !exampleId) {
        throw new Error('getRunTemplate中componentId,exampleId为必填项')
    } else if (!mappingData.hasOwnProperty(componentId)) {
        throw new Error(`getRunTemplate中${componentId}异常`)
    }
    let component = mappingData[componentId]
    if (!component) {
        throw new Error(`getRunTemplate=>mappingData${componentId}异常`)
    }
    let find = component.example.find(val => val.id === exampleId)
    if (!find) {
        throw new Error(`getRunTemplate中${exampleId}异常`)
    }
    return find.content
}

export const getComponentInfo = componentId => {
    if (!componentId) {
        throw new Error('getRunTemplate中componentId,为必填项')
    } else if (!mappingData.hasOwnProperty(componentId)) {
        throw new Error(`getRunTemplate中${componentId}异常`)
    }
    let component = mappingData[componentId]
    if (!component) {
        throw new Error(`getRunTemplate=>mappingData${componentId}异常`)
    }
    return component
}
