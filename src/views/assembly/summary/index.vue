<template>
    <main class="summary">
        <p v-for="(item, index) in data.info" :key="index">
            {{ item }}
        </p>
    </main>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    mounted() {},
    methods: {}
}
</script>
<style lang='less' scoped>
@import 'index.less';
</style>
