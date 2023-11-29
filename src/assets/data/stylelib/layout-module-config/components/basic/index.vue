<template>
    <div class="basic">
        <div class="item">
            <div class="header">列内标题一列内标题一列内标题一列内标题一</div>
            <div v-for="(tag, i) in tags1List" :key="i" class="tag">
                <div class="name">{{ tag.name }}</div>
                <div class="value">{{ tag.value }}</div>
            </div>
        </div>
        <div class="item">
            <div class="header">列内标题二列内标题二列内标题二列内标题二</div>
            <div v-for="(tag, i) in tags2List" :key="i" class="tag">
                <div class="name">{{ tag.name }}</div>
                <div v-if="!tag.value || !tag.value.length" class="value">
                    -
                </div>
                <div v-else class="value">
                    <Tag
                        v-for="v in tag.value"
                        :key="v.id"
                        class="tag-icon"
                        closable>
                        {{ v.tagName }}
                    </Tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tags1List: [
                {
                    name: '类型1-常规',
                    value: '重复分配'
                },
                {
                    name: '类型1-常规',
                    value: '重复分配'
                },
                {
                    name: '类型1-常规',
                    value: '重复分配'
                },
                {
                    name: '类型1-常规',
                    value: '重复分配'
                },
                {
                    name: '类型1-常规',
                    value: '重复分配'
                }
            ],
            tags2List: [
                {
                    name: '类型2-标签未配',
                    value: []
                },
                {
                    name: '类型2-标签已配',
                    value: [
                        { tagName: '游戏', id: 1 },
                        { tagName: '三国英雄录', id: 2 },
                        { tagName: '游戏游戏', id: 3 },
                        { tagName: '游戏游戏2', id: 4 },
                        { tagName: '游戏游戏3', id: 5 },
                        { tagName: '游戏游戏4', id: 6 },
                        { tagName: '游戏游戏5', id: 7 }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.basic {
    padding: 0 16px;
    .item {
        padding: 9px 0;
        border-bottom: 1px dashed #e0e0e8;
        &:last-child {
            border-bottom: 0;
        }
        .header {
            height: 28px;
            font-size: 12px;
            color: #151b39;
            line-height: 28px;
            font-weight: bold;
        }
        .tag {
            display: flex;
            flex-wrap: wrap;
            line-height: 28px;
            .name {
                width: 100px;
                height: 28px;
                font-size: 12px;
                color: #999999;
                line-height: 28px;
                margin-right: 8px;
            }
            .value {
                font-size: 12px;
                color: #151b39;
                line-height: 28px;
                /deep/ .ivu-tag {
                    height: 24px;
                    line-height: 24px;
                    background: #f3f3f4;
                    border-radius: 3px;
                    .ivu-tag-text {
                        color: #151b39;
                    }
                    &:hover {
                        background: rgba(57, 137, 250, 0.1);
                        color: #3989fa;
                        .ivu-icon {
                            color: #3989fa;
                        }
                    }
                }
            }
        }
    }
}
</style>
