<template>
    <div class="developer-wrapper">
        <div class="developer-wrapper-header">RY Design 标准化小组</div>
        <div class="clearfix">
            <ul>
                <li v-for="(tm, i) in team" :key="i" class="clearfix">
                    <div v-for="(tr, j) in tm" :key="j" class="teamer">
                        <i
                            :style="{
                                background: 'url(' + tr.photo + ') no-repeat',
                                backgroundSize: 'cover'
                            }"></i>
                        <span class="name">{{ tr.name }}</span>
                        <span class="email">{{ tr.info }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                [
                    {
                        name: '刘鹏飞',
                        info: 'liupengfei@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/lpf.png')
                    },
                    {
                        name: '周珊珊',
                        info: 'zhoushanshan@reyun.com ( UI设计师 )',
                        photo: require('@/assets/img/zss.jpg')
                    },
                    {
                        name: '周博',
                        info: 'zhoubo@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/zb.jpeg')
                    },
                    {
                        name: '杨玉峰',
                        info: 'yangyufeng@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/yyf.jpeg')
                    },
                    {
                        name: '牟印福',
                        info: 'muyinfu@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/myf.jpeg')
                    },
                    {
                        name: '陈琬昱',
                        info: 'chenwanyu@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/cwy.png')
                    },
                    {
                        name: '马春福',
                        info: 'machunfu@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/mcf.jpg')
                    },
                    {
                        name: '刘旭阳',
                        info: 'liuxuyang@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/lxy.jpg')
                    },
                    {
                        name: '傅文',
                        info: 'fuwen@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/fw.jpeg')
                    },
                    {
                        name: '李云鹏',
                        info: 'liyunpeng@reyun.com ( 前端工程师 )',
                        photo: require('@/assets/img/lyp.jpg')
                    }
                ]
            ]
        }
    }
}
</script>
<style scoped lang="less">
@import './index';
</style>
