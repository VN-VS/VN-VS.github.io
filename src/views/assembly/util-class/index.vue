<template>
    <main class="util-class">
        <container
            anchor-link
            attribute-name
            :loffset="80"
            :class-name="'.' + codeClassName"
            :update="$route.params.id">
            <!-- 概述 -->
            <h2 class="util-class-component">{{ classData.title }}</h2>
            <div
                v-for="(option, index) in classData.example"
                :key="index"
                class="util-class-item">
                <h2
                    :id="option.id"
                    class="util-class-item-title"
                    :class="codeClassName"
                    :name="option.title">
                    {{ option.title }}
                </h2>
                <section v-if="option.info" class="util-class-item-info">
                    <p v-html="option.info.message"></p>
                    <ul>
                        <li
                            v-for="(item, index) in option.info.content"
                            :key="index"
                            v-html="item"></li>
                    </ul>
                </section>
                <div class="util-class-item-desc">
                    <span
                        v-for="(item, i) in option.desc"
                        :key="i"
                        v-html="item"></span>
                </div>
                <div v-if="option.content" class="util-class-item-example">
                    <span>示例</span>
                    <my-display
                        :code="option.content"
                        :component-id="option.id"></my-display>
                </div>
            </div>
        </container>
    </main>
</template>

<script>
import { codeClassName } from '@/assets/config/data.js'
import container from '@/components/container/index.vue'
import myDisplay from '@/components/display/index.vue'
import { classData } from '@/assets/data/util-class/index.js'
export default {
    components: {
        container,
        myDisplay
    },
    props: {},
    data() {
        return {
            anchorLink: false,
            codeClassName,
            classData
        }
    }
}
</script>
<style lang='less' scoped>
@import 'index.less';
</style>