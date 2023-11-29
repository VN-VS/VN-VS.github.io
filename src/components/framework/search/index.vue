<template>
    <div class="search">
        <header>
            <span
                :class="['search-type']"
                :style="{ background: searchInfo.info.background }">
                {{ searchInfo.info.icon }}
            </span>
            <label>{{ searchInfo.name }}</label>
            <span class="search-en">{{ searchInfo.info.name }}</span>
        </header>
        <div class="search-select">
            <Select
                ref="iSelect"
                v-model="selectedValue"
                placeholder="搜索"
                clearable
                filterable
                :loading="loading"
                @on-change="onSearchRouterChange">
                <Option
                    v-for="(option, index) in searchInfo.list"
                    :key="index"
                    :value="option.href"
                    :label="option.href">
                    <span>{{ option.name }}</span>
                    {{ option.englishName }}
                </Option>
            </Select>
            <Icon type="md-search" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        searchInfo: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            selectedValue: '',
            loading: false
        }
    },
    methods: {
        onSearchRouterChange(data) {
            if (data) {
                let selected = this.searchInfo.list.find(
                    item => item.href === data
                )
                this.$refs.iSelect.clearSingleSelect()
                this.$emit('on-search-change', selected.href)
                this.$router.push(selected.routerTo)
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>
<style scoped lang="less">
@import './index.less';
</style>
