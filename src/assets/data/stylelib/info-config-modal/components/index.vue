<template>
    <div class="info-modal-window">
        <Form class="filter" :label-width="76" @submit.native.prevent>
            <FormItem label="选择宽度">
                <rd-multi-radio-button
                    v-model="modalWidth"
                    :button-list="modalWidths"></rd-multi-radio-button>
            </FormItem>
            <FormItem label="标题个数">
                <rd-multi-radio-button
                    v-model="headers"
                    :button-list="modalHeaders"></rd-multi-radio-button>
            </FormItem>
            <Button type="primary" @click="openModal"> 打开Modal </Button>
        </Form>
        <Modal
            v-model="modalVisible"
            :transition-names="[]"
            class-name="rd-info-config-modal"
            :width="modalWidth[0]"
            @on-cancel="handleCance">
            <template #close>
                <span></span>
            </template>
            <!-- 头部 -->
            <template #header>
                <div class="header-wrap">
                    <div class="header">
                        <span v-if="isSingleTitle" class="single-title">
                            {{ newTitles }}
                        </span>
                        <template v-else>
                            <span
                                v-for="title in newTitles"
                                :key="title.value"
                                class="title"
                                :class="{
                                    checked: title.value === multiTitleChecked
                                }"
                                @click="changeMultiTitleChecked(title)">
                                {{ title.name }}
                            </span>
                        </template>
                    </div>
                    <!-- 关闭按钮 -->
                    <Icon
                        size="12"
                        class="header-close"
                        custom="iconfont ry-icon-close-tanch"
                        @click="handleCance"/>
                </div>
            </template>
            <!-- 内容 -->
            <div class="content">
                <Form :label-width="116" class="form" @submit.native.prevent>
                    <div class="module-header">标题一（选择）</div>
                    <FormItem label="类型1-单选">
                        <rd-multi-radio-button
                            v-model="formData.radio1"
                            :disabled="handleDisabled"
                            :button-list="radioList"></rd-multi-radio-button>
                    </FormItem>
                    <FormItem label="类型1-单选有提示">
                        <rd-multi-radio-button
                            v-model="formData.radio2"
                            :button-list="radio2List"></rd-multi-radio-button>
                        <div class="tips">类型1-单选有提示下的提示信息</div>
                    </FormItem>
                    <FormItem label="类型1-复选">
                        <rd-multi-radio-button
                            v-model="formData.radio3"
                            :button-list="multiList"></rd-multi-radio-button>
                    </FormItem>
                    <FormItem label="类型1-复选有提示">
                        <rd-multi-radio-button
                            v-model="formData.radio4"
                            :button-list="multiList"></rd-multi-radio-button>
                        <div class="tips">
                            类型1-复选有提示类型1-复选有提示类型1-复选有提示
                        </div>
                    </FormItem>
                    <FormItem label="类型1-开关">
                        <rd-multi-radio-button
                            v-model="formData.radio5"
                            :button-list="statusList"></rd-multi-radio-button>
                    </FormItem>
                    <div class="module-split-line"></div>
                    <div class="module-header">标题二（输入）</div>
                    <FormItem label="类型2-单选">
                        <Select
                            v-model="formData.select1"
                            :disabled="radioSelectDisabled"
                            style="width: 400px">
                            <Option
                                v-for="el in radioList"
                                :key="el.value"
                                :value="el.value"
                                :label="el.label"></Option>
                        </Select>
                    </FormItem>
                    <FormItem label="类型2-多选">
                        <Select
                            v-model="formData.select2"
                            :max-tag-count="2"
                            :max-tag-placeholder="setMaxTagPlaceholder"
                            multiple
                            style="width: 400px">
                            <Option
                                v-for="el in selectMultiOptionList"
                                :key="el.value"
                                :value="el.value"
                                :disabled="el.disabled"
                                :label="el.label"></Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        required
                        label="类型3-输入"
                        :rules="inputValidate()">
                        <Input
                            v-model="formData.input1"
                            placeholder="请输入"
                            style="width: 400px"></Input>
                    </FormItem>
                    <FormItem label="类型3-输入-数量限制">
                        <Input
                            v-model="formData.input3"
                            show-word-limit
                            :maxlength="30"
                            placeholder="请输入"
                            style="width: 400px"></Input>
                    </FormItem>
                    <FormItem label="类型3-仅回显">
                        <div class="input-echo" style="width: 400px">
                            {{ formData.input2 }}
                        </div>
                    </FormItem>
                    <FormItem label="类型4-出价" required>
                        <div class="bid">
                            <InputNumber
                                v-model="formData.bid1"
                                :active-change="false"
                                style="width: 184px; margin-right: 10px"
                                placeholder="请输入"
                                :precision="2"
                                :step="0.01"
                                :max="9999.99"
                                :min="0.01"/>
                            <span>元</span>
                        </div>
                    </FormItem>
                    <FormItem
                        label="类型4-出价区间"
                        :rules="bidRangeValidate()">
                        <div class="flex-start">
                            <div class="range">
                                <InputNumber
                                    v-model="formData.bid2.min"
                                    :active-change="false"
                                    style="width: 184px"
                                    placeholder="最低价格"
                                    :precision="2"
                                    :step="0.01"
                                    :max="9999.99"
                                    :min="0.01"/>
                                <span>—</span>
                                <InputNumber
                                    v-model="formData.bid2.max"
                                    :active-change="false"
                                    style="width: 184px"
                                    placeholder="最高价格"
                                    :precision="2"
                                    :step="0.01"
                                    :max="9999.99"
                                    :min="0.01"/>
                            </div>
                            <div style="margin-left: 10px">元</div>
                        </div>
                    </FormItem>
                    <FormItem label="类型4-时间区间">
                        <div class="range">
                            <DatePicker
                                v-model="formData.date1.start"
                                style="width: 184px"
                                format="yyyy-MM-dd"
                                :clearable="false"
                                placeholder="开始日期"></DatePicker>
                            <span>—</span>
                            <DatePicker
                                v-model="formData.date1.end"
                                style="width: 184px"
                                format="yyyy-MM-dd"
                                :clearable="false"
                                placeholder="结束日期"></DatePicker>
                        </div>
                    </FormItem>
                    <FormItem label="类型5-信息配置">
                        <Button
                            :disabled="buttonDisabled"
                            type="default"
                            class="input-config-btn">
                            <Icon
                                style="margin-right: 3px"
                                :custom="`iconfont ${formData.info1.icon}`"
                                size="12"></Icon>
                            <span>{{ formData.info1.text }}</span>
                        </Button>
                    </FormItem>
                    <FormItem required>
                        <template #label>
                            <span class="label">
                                <span>类型5-单选与信息配置结合</span>
                                <Tooltip
                                    :transfer="true"
                                    placement="top"
                                    max-width="200"
                                    theme="light"
                                    content="类型5-单选与信息配置结合类型5-单选与信息配置结合">
                                    <Icon
                                        type="ios-help-circle-outline"
                                        size="16"
                                        class="cursor-pointer icon-question tip-icon"></Icon>
                                </Tooltip>
                            </span>
                        </template>
                        <div class="radio-info">
                            <rd-multi-radio-button
                                v-model="formData.info2.value"
                                style="margin-bottom: 8px"
                                :button-list="infoRadioList"></rd-multi-radio-button>
                            <div
                                class="input-config-show-info"
                                :class="{ disabled: configShowInfoDisabled }">
                                <span class="text">{{
                                    formData.info2.text
                                }}</span>
                                <span class="config-btn">配置</span>
                            </div>
                        </div>
                    </FormItem>
                </Form>
            </div>
            <!-- 尾部 -->
            <template #footer>
                <div class="footer">
                    <Button style="width: 104px" @click="handleCance">
                        取消
                    </Button>
                    <Button
                        type="primary"
                        style="width: 104px"
                        :loading="modalLoading"
                        @click="handleCance">
                        确定
                    </Button>
                </div>
            </template>
        </Modal>
    </div>
</template>
<script>
import {
    isEqualObject,
    radioList,
    radio2List,
    statusList,
    multiList,
    infoRadioList
} from './../utils'

export default {
    data() {
        return {
            // 标题的个数
            headers: ['0'],
            modalHeaders: [
                {
                    label: '单标题',
                    value: '0',
                    isMulti: false
                },
                {
                    label: '多标题',
                    value: '1',
                    isMulti: false
                }
            ],
            // 多选标题是的选中项
            multiTitleChecked: '1',
            // modal的宽度
            modalWidth: [840],
            modalWidths: [
                {
                    label: '640px',
                    value: 640,
                    isMulti: false
                },
                {
                    label: '720px',
                    value: 720,
                    isMulti: false
                },
                {
                    label: '840px',
                    value: 840,
                    isMulti: false
                },
                {
                    label: '960px',
                    value: 960,
                    isMulti: false
                },
                {
                    label: '1080px',
                    value: 1080,
                    isMulti: false
                }
            ],
            modalVisible: true,
            modalLoading: false,
            // 表单数据
            formData: {
                // 类型1-radio
                radio1: ['beijing'],
                radio2: ['pingguo'],
                radio3: ['2', '3'],
                radio4: ['2'],
                radio5: ['close'],
                // 类型2-select
                select1: 'beijing',
                select2: ['beijing', 'shanghai'],
                // 类型3-input
                input1: '',
                input2: '回显信息',
                input3: '顺便输入几个字',
                // 类型4-bid
                bid1: null,
                bid2: {
                    min: null,
                    max: null
                },
                // 类型4-date
                date1: {
                    start: '',
                    end: ''
                },
                // 类型5-info-config
                info1: {
                    type: 'select',
                    text: '选择信息',
                    icon: 'ry-icon-sousuo'
                },
                // 类型5-info-config-showInfo
                info2: {
                    type: 'showInfo',
                    text: '已配置账户0个',
                    icon: 'ry-icon-sousuo',
                    value: ['renqun']
                }
            },
            // 枚举
            radioList,
            radio2List,
            statusList,
            multiList,
            infoRadioList,
            // 额外数据枚举
            nameLongList: [
                {
                    label: '很远的地方，宇宙的中心，超一线城市，超二线城市,超三线城市,超四线城市，曹县！！',
                    value: 'chaoxian',
                    isMulti: false
                }
            ]
        }
    },
    computed: {
        // 是不是单标题
        isSingleTitle() {
            return isEqualObject(this.headers, ['0'])
        },
        // 计算标题数据
        newTitles() {
            if (!this.isSingleTitle) {
                return [
                    {
                        name: '标题1',
                        value: '1'
                    },
                    {
                        name: '标题2',
                        value: '2'
                    },
                    {
                        name: '标题3',
                        value: '3'
                    }
                ]
            }
            return '一个标题'
        },
        // 单选下拉禁用
        radioSelectDisabled() {
            return isEqualObject(this.formData.radio5, ['open'])
        },
        // 选择信息的按钮禁用
        buttonDisabled() {
            return isEqualObject(this.formData.select1, 'chaoxian')
        },
        // 选择信息的显示禁用
        configShowInfoDisabled() {
            return isEqualObject(this.formData.info2.value, ['renqun_zuhe'])
        },
        // 多选下拉数据
        selectMultiOptionList() {
            const disableds = { guangzhou: true }
            let arr = JSON.parse(JSON.stringify(this.radioList))
            arr = arr.concat(this.nameLongList)
            return arr.map(val =>
                Object.assign(val, { disabled: disableds[val.value] || false })
            )
        }
    },
    methods: {
        // 修改多选时标题的选择项
        changeMultiTitleChecked(val) {
            this.multiTitleChecked = val.value
        },
        // 禁用位置选项
        handleDisabled(val) {
            return val.value === 'notknown'
        },
        // 设置多选时的总的个数
        setMaxTagPlaceholder() {
            return this.formData.select2.length
        },
        openModal() {
            this.modalVisible = true
        },
        handleCance() {
            this.modalVisible = false
        },
        // 验证
        inputValidate() {
            return [
                {
                    trigger: 'change',
                    validator: () => {
                        return new Promise((resolve, reject) => {
                            let value = this.formData.input1
                            if (!value) {
                                reject(new Error('输入内容不能为空'))
                                return
                            }
                            if (value.length > 20) {
                                reject(new Error('输入内容不能超过20个字符'))
                                return
                            }
                            resolve()
                        })
                    }
                }
            ]
        },
        bidRangeValidate() {
            return [
                {
                    trigger: 'change',
                    validator: () => {
                        return new Promise((resolve, reject) => {
                            let { min, max } = this.formData.bid2
                            if (!min || !max) {
                                reject(new Error('最低出价或最高出价不得为空'))
                                return
                            }
                            if (min > max) {
                                reject(new Error('最低出价不得大于最高出价'))
                                return
                            }
                            resolve()
                        })
                    }
                }
            ]
        }
    }
}
</script>
<style scoped lang="less">
@import './index.less';
</style>