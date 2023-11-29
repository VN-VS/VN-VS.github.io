<template>
    <div class="main">
        <Icon
            v-if="!open"
            type="ios-search"
            class="main-search fr"
            @click="open = true"></Icon>
        <Input
            v-else
            v-model="value"
            placeholder="搜索"
            style="width: 100%"
            clearable
            class="overall-search"
            @on-enter="submit">
            <Icon slot="prefix" type="ios-search" />
        </Input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            open: false,
            value: ''
        }
    },
    mounted() {
        // 搜索页开启搜索控件
        this.onOpenSearchControl()
    },
    methods: {
        onOpenSearchControl() {
            if (this.$route.meta.searchOpen) {
                this.open = true
                this.value = this.$route.query.q
            }
        },
        submit() {
            this.$router.push({
                path: '/search',
                query: {
                    q: this.value
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.main {
    padding-right: 30px;
    position: relative;
    &-search {
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        margin-right: 12px;
        position: absolute;
        right: 0;
        top: 6px;
    }
}
</style>
<style lang="less">
.overall-search {
    .ivu-input {
        border-radius: 15px;
        border: none;
    }
    .ivu-input-prefix i,
    .ivu-input-suffix i {
        font-size: 18px;
    }
    .ivu-input-icon-clear {
        font-size: 20px;
    }
}
</style>

