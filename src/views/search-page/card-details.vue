<template>
    <main class="card TDD-card-details">
        <router-link :to="data.path">
            <div class="card-title">
                {{ data.parent }}
                <template v-if="data.children">
                    <Icon custom="i-td i-td-keyboard_arrow_right" />
                    {{ data.children }}
                </template>
            </div>
            <h2 v-html="data.name"></h2>
            <p v-html="data.describe"></p>
        </router-link>
    </main>
</template>
<script>
export default {
    props: {
        data: {
            type: Object
        }
    }
}
</script>
<style scoped lang="less">
@import 'index.less';
</style>

<style lang="less">
.TDD-card-details em {
    color: #3399ff;
    font-style: normal;
}
</style>
