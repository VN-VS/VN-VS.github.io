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
            @on-selection-change="handleSelectionChange">
            <template slot="targetName" slot-scope="{ row }">
                <div class="edit-row">
                    <rd-ellipsis
                        :text="row.targetName"
                        :lines="2"
                        :delay="600"
                        enable-css
                        theme="light"
                        tooltip
                        transfer></rd-ellipsis>

                    <rd-edit-row-bid
                        :value="row.targetName"
                        :show-text-limit="false"
                        title="定向包名称"
                        :confirm-func="handleTargetNameUpdate(row)"></rd-edit-row-bid>
                </div>
            </template>
            <template slot="targetRemark" slot-scope="{ row }">
                <rd-ellipsis
                    :text="row.targetRemark"
                    :lines="2"
                    :delay="600"
                    enable-css
                    theme="light"
                    tooltip
                    transfer></rd-ellipsis>
            </template>
            <template slot="operation" slot-scope="{ row }">
                <span class="operation-btn" @click="handleEdit(row)">
                    编辑
                </span>
                <span class="operation-btn" @click="handleCopy(row)">
                    复制
                </span>
                <span class="operation-btn" @click="handleDelete(row)">
                    删除
                </span>
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
        handleEdit(row) {
            this.$Message.info(`编辑操作_${row.adsTargetId}`)
        },
        handleCopy(row) {
            this.$Message.info(`复制操作_${row.adsTargetId}`)
        },
        handleDelete(row) {
            this.$Message.info(`删除操作_${row.adsTargetId}`)
        },
        handlePageChange(val) {
            this.pageOption.current = val
            this.getTableData()
        },
        handlePageSizeChange(val) {
            this.pageOption.size = val
            this.getTableData()
        },
        handleSelectionChange(rows) {
            this.$Message.info(`已选_${rows.length}行`)
        },
        handleTargetNameUpdate(row) {
            return val => {
                row.targetName = val
                return Promise.resolve()
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import 'index.less';
.ivu-tooltip-light .ivu-tooltip-popper {
    font-size: 12px !important;
}
</style>

  