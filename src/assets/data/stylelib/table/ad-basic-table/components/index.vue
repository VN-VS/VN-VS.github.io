<template>
    <div>
        <Table
            class="table"
            border
            height="460"
            :max-height="maxHeight"
            :columns="tableColumns"
            :data="tableData"
            :loading="tableLoading"
            @on-sort-change="handleSoltChange"
            @on-selection-change="handleSelectionChange">
            <!-- 状态 -->
            <template slot="optStatus" slot-scope="{ row, index }">
                <i-switch
                    v-if="index !== 0"
                    size="small"
                    :value="row['optStatus'] === 'CAMPAIGN_STATUS_ENABLE'"
                    :disabled="row['optStatus'] === 'CAMPAIGN_STATUS_DELETE'"
                    @on-change="handleSwitchStatus"></i-switch>
                <span v-else>总计{{ pageOption.total }}项</span>
            </template>
            <!-- 广告组名称 -->
            <template slot="campaignName" slot-scope="{ row, index }">
                <div v-if="index !== 0" class="edit-row">
                    <rd-ellipsis
                        :text="row.campaignName"
                        :lines="2"
                        :delay="600"
                        enable-css
                        theme="light"
                        tooltip
                        transfer></rd-ellipsis>
                    <rd-edit-row-bid
                        :value="row.campaignName"
                        :show-text-limit="false"
                        title="广告组名称"
                        :confirm-func="handleTargetNameUpdate(row)"></rd-edit-row-bid>
                </div>
            </template>
            <!-- 媒体 -->
            <template slot="media" slot-scope="{ row, index }">
                <span v-if="index !== 0">
                    {{ row['media']['value'] }}
                </span>
                <span v-else>--</span>
            </template>
            <!-- 推广目的 -->
            <template slot="landingType" slot-scope="{ row, index }">
                <span v-if="index !== 0">
                    {{ row['landingType']['value'] }}
                </span>
                <span v-else>--</span>
            </template>
        </Table>
        <Page
            class="page"
            :current="pageOption.current"
            :total="pageOption.total"
            :page-size="pageOption.size"
            :page-size-opts="[10, 20, 50, 100, 150, 200]"
            show-elevator
            show-sizer
            show-total
            size="small"
            @on-change="handlePageChange"
            @on-page-size-change="handlePageSizeChange"></Page>
    </div>
</template>
<script>
import { tableColumns, tableMockData } from './data'
export default {
    props: {
        maxHeight: {
            type: Number,
            default: 480
        }
    },
    data() {
        return {
            tableMockData,
            tableLoading: false,
            tableColumns,
            tableData: [],
            pageOption: { current: 1, size: 50, total: 0 }
        }
    },
    mounted() {
        this.getTableData()
    },
    methods: {
        // 模拟分页
        mockPage() {
            return new Promise(resolve => {
                const { current, size } = this.pageOption
                setTimeout(() => {
                    let list = this.tableMockData.slice(
                        (current - 1) * size,
                        current * size
                    )
                    resolve(list)
                }, 1000)
            })
        },

        getTableData() {
            this.tableLoading = true
            this.mockPage().then(res => {
                this.tableData = res
                this.pageOption.total = this.tableMockData.length
                this.tableLoading = false
            })
        },
        handleSoltChange(val) {
            const { key, order } = val
            this.$Message.info(`排序操作_${key}_${order}`)
        },
        handlePageChange(val) {
            this.pageOption.current = val
            this.getTableData()
        },
        handlePageSizeChange(val) {
            this.pageOption.size = val
            this.getTableData()
        },
        handleSwitchStatus(val) {
            this.$Message.info(`状态操作_${val}`)
        },
        handleSelectionChange(rows) {
            this.$Message.info(`已选_${rows.length}行`)
        },
        handleTargetNameUpdate(row) {
            return val => {
                row.campaignName = val
                return Promise.resolve()
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>

  