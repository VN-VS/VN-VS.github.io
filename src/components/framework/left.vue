<template>
    <div>
        <search-components
            v-if="searchOpen"
            :search-info="searchInfo"
            @on-search-change="setActiveName"></search-components>
        <template v-for="val in data">
            <Menu
                v-if="val.id === activeMenu"
                :key="val.id"
                width="auto"
                :active-name="activeName"
                :open-names="subActiveName"
                @on-select="setActiveName">
                <template v-for="obj in val.child">
                    <!-- single -->
                    <template v-if="!obj.child.length">
                        <Menu-item
                            :key="obj.id"
                            :name="obj.id"
                            :to="
                                '/' +
                                val.path +
                                '/' +
                                obj.href +
                                secondLevelType
                            ">
                            <span>{{ obj.name }}</span>
                            <p class="layout-left-english">
                                {{ obj.englishName }}
                            </p>
                        </Menu-item>
                    </template>
                    <!-- multiple -->
                    <template v-else>
                        <Submenu :key="obj.id" :name="obj.id">
                            <template slot="title">
                                <Icon v-if="obj.icon" :type="obj.icon" />
                                {{ obj.name }}
                            </template>
                            <template v-for="item in obj.child">
                                <template v-if="!item.child.length">
                                    <Menu-item
                                        :key="item.id"
                                        :name="item.id"
                                        :to="
                                            '/' +
                                            val.path +
                                            '/' +
                                            obj.path +
                                            '/' +
                                            item.href +
                                            secondLevelType
                                        ">
                                        <span>{{ item.name }}</span>
                                        <p class="layout-left-english">
                                            {{ item.englishName }}
                                        </p>
                                    </Menu-item>
                                </template>
                                <!-- <template v-else>
              <MenuGroup :title="item.name" style="marginLeft:25px">
                <template v-for="(subItem, subItemKey) in item.child">
                  <Menu-item
                    :name="subItem.id"
                    :key="subItem.id"
                    :style="!subItemKey ? 'margin:40px 0 0 0 ' : ''"
                  >
                    <router-link :to="subItem.href || ''">
                      {{ subItem.name }}
                    </router-link>
                  </Menu-item>
                </template>
              </MenuGroup>
                </template>-->
                            </template>
                        </Submenu>
                    </template>
                </template>
            </Menu>
        </template>
    </div>
</template>
<script>
import searchComponents from './search'
import { getNavInfo, getSearchInfo } from '@/util/util.js'
export default {
    components: {
        searchComponents
    },
    data() {
        return {
            activeMenu: '',
            activeName: '',
            //第三层菜单选中
            subActiveName: [],
            firstNav: null,
            searchOpen: false,
            searchInfo: {}
        }
    },
    computed: {
        data() {
            return this.$store.state.menuData
        },
        // 二级导航参数 例如组件中的文档和代码和用法
        secondLevelType() {
            let i = ''
            if (
                this.$route.name === 'components' &&
                this.$route.params.id !== 'components-use'
            ) {
                i = this.$route.params.type ? `/${this.$route.params.type}` : ''
            }
            return i
        }
    },
    watch: {
        // $route() {
        //   this.init()
        // },
        /**
         * 组件menu数据请求回来后重新执行
         */
        data: {
            handler(data) {
                if (data.length) {
                    this.init()
                }
            },
            deep: true
        }
    },
    mounted() {
        this.init()
        // 获取菜单数据
        this.$bus.$on('on-top-menu-change', () => {
            this.init()
        })
    },
    destroyed() {
        this.$bus.$off('on-top-menu-change')
    },
    methods: {
        init() {
            let { path, params } = this.$router.currentRoute
            let fname = this.$router.currentRoute.name
            if (fname && fname.indexOf('/') > -1) {
                fname = fname.substring(1)
            }
            let paramsId = this.$route.meta.paramsId || params.id
            const current = getNavInfo({ data: this.data, path, id: paramsId })
            this.searchInfo = getSearchInfo(current.firstNav)
            this.activeMenu = current.firstId
            this.firstNav = current.firstNav
            this.searchOpen = current.searchOpen
            this.subActiveName = current.openNames
            if (!current.childCurrent) {
                this.setActiveName(current.leftCurrent)
            } else {
                this.setActiveName(current.childCurrent)
            }
        },
        setActiveName(activeName) {
            document.documentElement.scrollTop = 0
            this.$bus.$emit('init-Anchor-scrollTop-notice', false)
            if (activeName) {
                this.activeName = activeName
            }
        }
    }
}
</script>
