<template>
    <div>
        <Input v-model="code_id" type="text" placeholder="code_id" />
        <Input
            v-if="showInfo"
            v-model="title"
            type="text"
            placeholder="title"/>
        <Input
            v-if="showInfo"
            v-model="desc"
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="desc"/>
        <Input
            v-if="showInfo"
            v-model="content"
            type="textarea"
            :autosize="{ minRows: 6 }"
            placeholder="content"/>
        <Button v-if="!showInfo" @click="search"> 查询内容 </Button>
        <Button v-if="showInfo" @click="create"> 修改代码 </Button>
    </div>
</template>
<script>
import { ajax } from '@/util/ajax'
export default {
    data() {
        return {
            code_id: '',
            title: '',
            desc: '',
            content: '',
            showInfo: false
        }
    },
    methods: {
        create() {
            ajax({
                urlKey: '/api/code/update',
                methods: 'POST',
                data: {
                    code_id: this.code_id,
                    content: this.content,
                    title: this.title,
                    desc: this.desc
                }
            }).then(res => {
                if (res.status === 1) {
                    this.$Message.success('修改成功')
                } else {
                    this.$Message.error(res.message)
                }
            })
        },
        search() {
            ajax({
                urlKey: '/api/code/find',
                methods: 'POST',
                data: {
                    id: this.code_id
                }
            }).then(res => {
                if (res.status === 1) {
                    const data = res.data
                    this.title = data.title
                    this.desc = data.desc
                    this.content = data.content
                    this.showInfo = true
                } else {
                    this.$Message.error(res.message)
                }
            })
        }
    }
}
</script>
