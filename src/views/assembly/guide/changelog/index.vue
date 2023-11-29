<template>
    <main class="changelog">
        <h1>更新日志</h1>
        <Timeline>
            <TimelineItem v-for="(option, index) in data" :key="index">
                <section class="changelog-time">
                    <div
                        class="changelog-time-anchor"
                        v-html="option.name"></div>
                    <p v-html="option.time"></p>
                    <ul>
                        <li v-for="(item, i) in option.updateList" :key="i">
                            <p v-html="item.text"></p>
                            <router-link
                                v-if="item.href"
                                :to="{ path: item.href }"
                                target="_blank">
                                <Icon type="ios-open-outline" />
                            </router-link>
                        </li>
                    </ul>
                </section>
            </TimelineItem>
        </Timeline>
    </main>
</template>

<script>
import changelog from '@/assets/data/guide/changelog/index.js'
export default {
    data() {
        return {
            data: changelog
        }
    }
}
</script>
<style lang='less' scoped>
@import 'index.less';
</style>