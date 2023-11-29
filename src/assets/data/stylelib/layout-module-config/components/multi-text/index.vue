<template>
    <div class="multi-text">
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
                        type="title"
                        :data="row">
                        <template #btnGroup>
                            <div class="btn">
                                <Icon type="md-close" />
                            </div>
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
                        type="classify"
                        :data="row">
                        <template #btnGroup>
                            <div class="btn">
                                <Icon type="md-close" />
                            </div>
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
                    title: '标题&主要信息',
                    subTitle: '次要信息、ID、链接'
                },
                {
                    title: '标题&主要信息',
                    subTitle: '次要信息、ID、链接'
                },
                {
                    title: '标题&主要信息',
                    subTitle:
                        '次要信息、ID、链接-内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出'
                },
                {
                    title: '标题&主要信息',
                    subTitle: '次要信息、ID、链接'
                },
                {
                    title: '标题&主要信息',
                    subTitle:
                        '次要信息、ID、链接-内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出'
                },
                {
                    title: '标题&主要信息',
                    subTitle: '次要信息、ID、链接'
                },
                {
                    title: '标题&主要信息',
                    subTitle:
                        '次要信息、ID、链接-内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出内容超出'
                }
            ],
            type2List: [
                {
                    classify: {
                        name: '商品库名称',
                        id: '5533567'
                    },
                    info: {
                        name: '商品名称',
                        id: '5533567'
                    },
                    thumbnail: require('./product.png')
                },
                {
                    classify: {
                        name: '商品库名称',
                        id: '5533567'
                    },
                    info: {
                        name: '商品名称',
                        id: '5533567'
                    },
                    thumbnail: require('./product.png')
                },
                {
                    classify: {
                        name: '商品库名称',
                        id: '5533567'
                    },
                    info: {
                        name: '商品名称',
                        id: '5533567'
                    },
                    thumbnail: require('./product.png')
                },
                {
                    classify: {
                        name: '超长商品库名称超长商品库名称超长商品库名称超长商品库名称超长商品库名称',
                        id: '超长id5533567超长id5533567超长id5533567超长id5533567'
                    },
                    info: {
                        name: '超长商品名称超长商品名称超长商品名称超长商品名称超长商品名称超长商品名称超长商品名称超长商品名称',
                        id: '超长id5533567超长id5533567超长id5533567超长id5533567超长id5533567'
                    },
                    thumbnail: require('./product.png')
                },
                {
                    classify: {
                        name: '超长商品库名称超长商品库名称超长商品库名称超长商品库名称超长商品库名称',
                        id: '超长id5533567超长id5533567超长id5533567超长id5533567'
                    },
                    info: {
                        name: '超长商品名称超长商品名称超长商品名称超长商品名称超长商品名称超长商品名称超长商品名称超长商品名称',
                        id: '超长id5533567超长id5533567超长id5533567超长id5533567超长id5533567'
                    },
                    thumbnail: require('./product.png')
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

.multi-text {
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
