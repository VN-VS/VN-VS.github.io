<template>
    <div class="single-text">
        <div class="header">
            <div class="btn">清空</div>
        </div>
        <div class="content mini-scroll-y">
            <!-- 类型1 -->
            <div class="line"></div>
            <div class="item">
                <div class="head">类型1</div>
                <div class="account-name">
                    账户：分组标题或账户信息-此处信息是单行、双行支持换行（aaaaaa1112223333）
                </div>
                <div class="rows">
                    <rd-text-item-show
                        v-for="(row, i) in type1List"
                        :key="i"
                        :data="row">
                        <template #btnGroup>
                            <Icon type="md-create" />
                        </template>
                    </rd-text-item-show>
                </div>
            </div>
            <!-- 类型2 -->
            <div class="line"></div>
            <div class="item">
                <div class="head">类型2</div>
                <div class="account-name">
                    账户：分组标题或账户信息-此处信息是单行、双行支持换行（aaaaaa1112223333）
                </div>
                <div class="rows">
                    <rd-text-item-show
                        v-for="(row, i) in type2List"
                        :key="i"
                        :data="row">
                        <template #btnGroup>
                            <Icon type="md-create" />
                        </template>
                    </rd-text-item-show>
                </div>
            </div>
            <!-- 类型3 -->
            <div class="line"></div>
            <div class="item">
                <div class="head">类型3</div>
                <div class="account-name">
                    账户：分组标题或账户信息-此处信息是单行、双行支持换行（aaaaaa1112223333）
                </div>
                <div class="rows">
                    <rd-text-item-show
                        v-for="(row, i) in type3List"
                        :key="i"
                        two-line-display
                        :data="row">
                        <template #btnGroup>
                            <Icon type="md-create" />
                        </template>
                    </rd-text-item-show>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            type1List: [
                {
                    text: '常规信息'
                },
                {
                    text: '常规信息2'
                },
                {
                    text: '内容比较长内容比较长内容比较长内容比较长内容比较长内容比较长内容比较长'
                }
            ],
            type2List: [
                {
                    text: '常规信息-支持编辑'
                },
                {
                    text: '常规信息-支持编辑'
                },
                {
                    text: '内容比较长内容比较长内容比较长内容比较长内容比较长内容比较长内容比较长内容比较长'
                }
            ],
            type3List: [
                {
                    text: '最短信息长度超过25个字—最短信息长度超过25个字'
                },
                {
                    text: '最短信息长度超过25个字—最短信息长度超过25个字'
                },
                {
                    text: '最短信息长度超过25个字—最短信息长度超过25个字'
                },
                {
                    text: '最短信息长度超过25个字—最短信息长度超过25个字'
                },
                {
                    text: '最短信息长度超过25个字—最短信息长度超过25个字'
                },
                {
                    text: '内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多'
                },
                {
                    text: '内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多'
                },
                {
                    text: '内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多内容特别多'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.mini-scroll-y::-webkit-scrollbar {
    width: 4px;
    height: 0;
}
.mini-scroll-y::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.08);
}
.mini-scroll-y::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);
    background: rgba(0, 0, 0, 0.08);
}

.single-text {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header {
    margin: 8px 16px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btn {
        color: #3a88fa;
        cursor: pointer;
    }
}
.line {
    width: 100%;
    border-bottom: 1px dashed #e0e0e8;
}
.content {
    padding: 0 16px;
    width: 100%;
    flex: 1;
    overflow: auto;
    .item {
        padding-top: 8px;
        padding-bottom: 16px;
        .head {
            height: 28px;
            font-size: 12px;
            font-weight: bold;
            color: #151b39;
            line-height: 28px;
        }
        .account-name {
            font-size: 12px;
            color: #999999;
            line-height: 28px;
        }
    }
}
</style>
