<template>
    <main class="stylelib">
        <div class="head">
            <h1>
                <span class="nav-type style">S</span>
                <span>样式库</span>
            </h1>
            <p>丰富的设计样式库，不但可以快速使用而且为设计提供更多灵感。</p>
        </div>
        <!-- 分类 -->
        <div class="cate">
            <RadioGroup v-model="selCate" type="button" @on-change="filterCate">
                <Radio
                    v-for="item in cateList"
                    :key="item.value"
                    :label="item.value">
                    {{ item.name }}
                </Radio>
            </RadioGroup>
        </div>
        <div class="cate-con">
            <div class="cate-head clearfix">
                <div class="cate-title">
                    {{ selCateName }} ({{ tplList.length }})
                </div>
                <div class="cate-desc">
                    <RadioGroup
                        v-model="selSort"
                        type="button"
                        @on-change="filterCate">
                        <Radio
                            v-for="(i, j) in sorts"
                            :key="j"
                            :label="i.name"></Radio>
                    </RadioGroup>
                </div>
            </div>
            <!-- 模版内容 -->
            <div class="tpl-box clearfix">
                <ul>
                    <li v-for="(item, j) in tplList" :key="j">
                        <div class="scaffold-card">
                            <div
                                class="tpl-box-content"
                                @click="preview(item.id)">
                                <img :src="item.cover" />
                            </div>
                            <div class="info clearfix">
                                <div class="title fl">{{ item.title }}</div>
                                <!-- <div class="icons fr">
                  <div class="icon">
                    <Icon
                      size="16"
                      custom="i-td i-td-social_thumb_up_alt"
                      :class="{ 'fabulousIcon-praised': item.praised }"
                      @click.stop="onFabulous(item.id)"></Icon>
                    <span>{{ item.likes }}</span>
                  </div>
                  <div class="icon">
                    <Icon
                      size="16"
                      custom="i-td i-td-visibility_px"></Icon>
                    <span>{{ item.hot }}</span>
                  </div>
                </div> -->
                            </div>
                            <div class="action">
                                <router-link
                                    target="_blank"
                                    :to="{
                                        path: '/stylelib-detail/' + item.id
                                    }"
                                    class="item-button">
                                    <img
                                        src="/img/icons/view-code-200x200.png"/>
                                    效果预览
                                </router-link>
                                <a
                                    target="_blank"
                                    :href="item.gitlabUrl"
                                    class="item-button">
                                    <img src="/img/icons/github-200x200.png" />
                                    查看源码
                                </a>
                                <a
                                    download
                                    :href="item.gitlabDownLoadUrl"
                                    class="item-button">
                                    <img
                                        src="/img/icons/code-download-200x200.png"/>
                                    使用模板
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>
<script>
import { styleTemplateField } from '@/assets/data/stylelib/index.js'
export default {
    data() {
        return {
            selCate: 'all',
            selSort: '浏览最多',
            sorts: [
                { name: '浏览最多', id: 0, key: 'hot' },
                { name: '点赞最多', id: 2, key: 'likes' },
                { name: '更新时间', id: 1, key: 'created_at' }
            ],
            cateList: [{ name: '全部', value: 'all' }],
            tplList: styleTemplateField[0].children
        }
    },
    computed: {
        selCateName() {
            return this.cateList.find(val => val.value === this.selCate).name
        }
    },
    created() {
        this.getCate()
        this.filterCate()
    },
    methods: {
        onGitView(url) {
            window.open(url, '_blank')
        },
        setSelCate() {
            let type = this.$route.params.radiuType
            if (type) {
                this.selCate = this.getDataType('value', type, 'name')
            }
            this.getTpl()
        },
        // 获取分类
        async getCate() {
            this.cateList = this.cateList.concat(styleTemplateField)
        },
        filterCate(value = 'all') {
            if (value === 'all') {
                this.tplList = styleTemplateField.reduce((list, val) => {
                    list = [...list, ...val.children]
                    return list
                }, [])
                return
            }
            let find = styleTemplateField.find(val => val.value === value)
            this.tplList = find.children || []
        },
        descCate(name) {
            if (name === this.selSort) {
                return
            }
            this.selSort = name
            this.getTpl()
        },
        goDetail(id) {
            this.$router.push({
                name: 'stylelib-detail',
                params: {
                    id
                }
            })
        },
        getDataType(name, value, type) {
            return this.cateList.filter(item => item[name] === value)[0][type]
        },
        // 点赞
        onFabulous() {},
        // 预览
        preview(id) {
            let routeUrl = this.$router.resolve({
                path: '/stylelib-detail/' + id
            })
            window.open(routeUrl.href, '_blank')
        }
    }
}
</script>
<style scoped lang="less">
@import './index';
</style>