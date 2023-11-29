<template>
    <Affix :offset-top="105" class="anchor-link">
        <Anchor show-ink :affix="false" :scroll-offset="loffset">
            <AnchorLink
                v-for="(item, index) in data"
                :key="index"
                :href="item.href"
                :title="item.title"/>
        </Anchor>
    </Affix>
</template>
<script>
export default {
    props: {
        data: {
            type: Array
        },
        loffset: {
            type: Number,
            default: 80
        }
    }
}
</script>
<style scoped lang="less">
@import 'index.less';
</style>
