<template>
    <main class="common">
        <div class="clearfix">
            <breadnav :bread="bread"></breadnav>
        </div>
        <!-- 左侧菜单 -->
        <div class="layout-left">
            <Menu
                ref="lmu"
                width="auto"
                :active-name="activeName"
                :open-names="openNames">
                <Submenu v-for="(i, j) in menu" :key="j" :name="i.id">
                    <template slot="title">{{ i.name }}</template>
                    <MenuItem
                        v-for="(s, k) in i.child"
                        :key="k"
                        :to="s.to"
                        :name="s.id">
                        {{ s.name }}
                    </MenuItem>
                </Submenu>
            </Menu>
        </div>
        <!-- 右侧内容 -->
        <div class="layout-content">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import breadnav from '@/components/framework/breadnav'
export default {
    components: {
        breadnav
    },
    props: {
        dtype: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            bread: [],
            menu: [],
            activeName: '',
            openNames: []
        }
    },
    mounted() {
        this.getData()
    },
    destroyed() {
        this.$bus.$off('detail-data')
    },
    methods: {
        // 获取子组件数据
        getData() {
            this.activeName = this.$route.params.id
            this.$bus.$on('detail-data', d => {
                // console.log(d);
                this.bread = d.bread
                this.menu = d.menu
                this.openNames = d.openNames
                this.$nextTick(() => {
                    this.$refs.lmu.updateOpened()
                    this.$refs.lmu.updateActiveName()
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
.common {
    width: 100%;
    height: 100%;
    .layout-left {
        top: 128px;
    }
    .layout-content {
        margin: 56px 0 0 256px;
    }
}
</style>
