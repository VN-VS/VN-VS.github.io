<template>
    <div class="layout">
        <!-- 公共头部 -->
        <top :is-home="true"></top>
        <!-- 首页容器 -->
        <div class="index-box">
            <div class="index-banner">
                <h1>RY Design</h1>
                <h3>通用的设计原则和设计语言帮助团队快速构建一致性体验</h3>
            </div>
            <div class="index-content clearfix">
                <div v-for="(col, j) in nav" :key="j" class="index-nav-box">
                    <div
                        v-for="(row, i) in col.child"
                        :key="i"
                        :class="[
                            'index-nav',
                            row.extra && row.extra.disabled ? 'disabled' : ''
                        ]">
                        <router-link
                            :to="row.link"
                            :class="
                                row.extra && row.extra.disabled
                                    ? 'disabled'
                                    : ''
                            ">
                            <div class="nav-title">
                                <span
                                    :class="['nav']"
                                    :style="{ background: row.iconBg }">
                                    {{ row.type }}
                                </span>
                                <span>{{ row.title }}</span>
                            </div>
                            <div v-if="row.content" class="nav-con">
                                {{ row.content }}
                            </div>
                            <div
                                v-if="row.pic"
                                class="nav-pic"
                                :style="{
                                    background: row.bg,
                                    padding:
                                        row.extra && row.extra.padding
                                            ? row.extra.padding
                                            : '25px 0'
                                }">
                                <img :src="row.pic" alt />
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- developer -->
        <developer></developer>
    </div>
</template>

<script>
import top from '@/components/framework/top'
import { HOMENAV } from '@/config/home-nav'
import developer from '@/views/home/developer'
export default {
    components: {
        top,
        developer
    },
    data() {
        return {
            nav: HOMENAV
        }
    }
}
</script>

<style lang="less" scoped>
.index-box {
    width: 100%;
    margin-top: 72px;
    .index-banner {
        height: 304px;
        text-align: center;
        background: #2149ab;
        h1 {
            padding-top: 65px;
            color: #fff;
            font-family: HarmoniaSansPro-Bold;
            font-size: 32px;
        }
        h3 {
            margin-top: 25px;
            color: #fff;
            font-family: PingFangSC-Medium;
            font-size: 16px;
        }
    }
    .index-content {
        width: 1155px;
        margin: -65px auto 0;
        .index-nav-box {
            float: left;
            width: 360px;
            margin: 0 12.5px 25px;
            .index-nav {
                margin-bottom: 25px;
                background: #fff;
                box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.2);
                &:hover {
                    box-shadow: 0 8px 10px 10px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12),
                        0 5px 5px -3px rgba(0, 0, 0, 0.2);
                    transition: 0.3s box-shadow;
                }
                a {
                    color: #17233d;
                    &:hover {
                        color: #2d8cf0;
                    }
                    &.disabled {
                        cursor: default;
                    }
                }
                .nav-title {
                    height: 65px;
                    padding-left: 25px;
                    font-family: PingFangSC-Medium;
                    font-size: 20px;
                    line-height: 65px;
                    text-align: left;
                    .nav {
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        margin-right: 18px;
                        color: #fff;
                        font-size: 16px;
                        line-height: 24px;
                        text-align: center;
                        border-radius: 24px;
                    }
                }
                .nav-con {
                    padding: 0 25px 30px;
                    color: rgba(23, 35, 61, 0.75);
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    text-align: justify;
                }
                .nav-pic {
                    padding: 25px 0;
                    text-align: center;
                }
                &.disabled {
                    opacity: 0.35;
                }
            }
        }
    }
}
</style>
