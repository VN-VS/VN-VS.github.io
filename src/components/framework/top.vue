<template>
    <div :class="['layout-head clearfix', { 'layout-head-index': isHome }]">
        <div class="top-left">
            <div class="layout-logo">
                <router-link to="/home">
                    <!-- <img src="../../assets/img/logo.png" alt style="height:32px" /> -->
                    RY Design
                </router-link>
            </div>
        </div>
        <div class="top-right">
            <!-- <div
        class="fl"
        style="width: calc(100% - 520px); padding-top: 20px">
        <overallSearch></overallSearch>
      </div> -->

            <div class="layout-nav">
                <!-- 导航 -->
                <nav class="fr">
                    <Menu
                        ref="topmenu"
                        mode="horizontal"
                        :active-name="activeName">
                        <template v-for="(val, index) in data">
                            <MenuItem
                                :key="index"
                                :name="val.id"
                                :to="isChild(index)">
                                <!-- <Icon
                :class="val.iviewIcon === false ? 'icon-' + val.icon : ''"
                :type="val.icon"
                ></Icon>-->
                                {{ val.name }}
                            </MenuItem>
                        </template>
                        <a class="ivu-menu-item" href="/docs/" target="_blank">
                            开发者中心
                        </a>
                    </Menu>
                </nav>

                <!-- 搜索组件 -->
                <!-- <div class="layout-nav-search fl">
          <overallSearch></overallSearch>
        </div>-->
            </div>
            <!-- 内部操作 -->
            <!-- <div class="layout-dropdown">
        <Dropdown class="drp" trigger="click" placement="bottom-end" @on-click="operation">
          <Icon custom="i-td i-td-account_circle_px" />
          <DropdownMenu slot="list">
            <DropdownItem name="updatePassword">
              <Icon type="ios-lock-outline" />修改密码
            </DropdownItem>
            <DropdownItem name="logOff">
              <Icon type="ios-power" />退出登录
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          placement="bottom-end"
          class="drp"
          trigger="click"
          @on-click="handleOpenAdmin"
          v-if="app.userInfo && app.userInfo.status === 2"
        >
          <span style="margin-left: 16px">
            <Icon type="md-apps" />
          </span>
          <DropdownMenu slot="list">
            <Dropdown placement="right-start">
              <DropdownItem>
                样式库管理
                <Icon type="ios-arrow-forward"></Icon>
              </DropdownItem>
              <DropdownMenu slot="list">
                <DropdownItem
                  name="/admin/upload/assets"
                  to="/admin/upload/assets"
                  target="_blank"
                >上传资源</DropdownItem>
                <DropdownItem
                  name="/admin/stylelib"
                  to="/admin/stylelib"
                  target="_blank"
                  divided
                >模版管理</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown placement="right-start">
              <DropdownItem>
                组件管理
                <Icon type="ios-arrow-forward"></Icon>
              </DropdownItem>
              <DropdownMenu slot="list">
                <DropdownItem
                  name="/admin/component/menu"
                  to="/admin/component/menu"
                  target="_blank"
                >创建/删除组件</DropdownItem>
                <DropdownItem
                  name="/admin/document/add"
                  to="/admin/document/add"
                  target="_blank"
                  divided
                >添加文档</DropdownItem>
                <DropdownItem name="/admin/usage/add" to="/admin/usage/add" target="_blank">添加用法</DropdownItem>
                <DropdownItem name="/admin/code/add" to="/admin/code/add" target="_blank">添加示例</DropdownItem>
                <DropdownItem
                  name="/admin/document/update"
                  to="/admin/document/update"
                  target="_blank"
                  divided
                >修改文档</DropdownItem>
                <DropdownItem
                  name="/admin/usage/update"
                  to="/admin/usage/update"
                  target="_blank"
                >修改用法</DropdownItem>
                <DropdownItem name="/admin/code/update" to="/admin/code/update" target="_blank">修改示例</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown placement="right-start">
              <DropdownItem>
                文章管理
                <Icon type="ios-arrow-forward"></Icon>
              </DropdownItem>
              <DropdownMenu slot="list">
                <DropdownItem name="/admin/article/add" to="/admin/article/add" target="_blank">添加文章</DropdownItem>
                <DropdownItem
                  name="/admin/article/update"
                  to="/admin/article/update"
                  target="_blank"
                >修改文章</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </DropdownMenu>
        </Dropdown>
      </div> -->
        </div>
    </div>
</template>
<script>
import menu from '@/assets/config/menu.js'
// import overallSearch from './overall-search.vue'
import { mapActions } from 'vuex'
import { getTopByPath, getNavInfo } from '@/util/util.js'
export default {
    components: {
        // overallSearch
    },
    props: {
        isHome: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            data: JSON.parse(JSON.stringify(menu.child)),
            activeName: ''
        }
    },
    watch: {
        $route(to, from) {
            if (to.name === from.name) {
                return
            }
            this.init()
            this.$bus.$emit('on-top-menu-change', true)
        }
    },
    mounted() {
        this.setMenuData(this.data)
        this.init()
    },
    methods: {
        ...mapActions(['setMenuData']),
        init() {
            const { path, params } = this.$router.currentRoute
            let activeName = ''
            // 去除首页
            if (!this.$route.meta.index) {
                const { firstId } = getNavInfo({
                    data: this.data,
                    path,
                    id: params.id
                })
                activeName = firstId
            }
            this.activeName = activeName
            this.$nextTick(() => {
                this.$refs.topmenu.updateActiveName()
            })
        },
        isChild(index) {
            return getTopByPath(this.data[index])
        },
        logOff() {
            this.$router.push('/login')
        },
        operation(data) {
            if (data === 'logOff') {
                this.$router.push('/login')
            }
        },
        handleOpenAdmin(name) {
            this.$router.push(name)
        }
    }
}
</script>
