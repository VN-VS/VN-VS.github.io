<template>
    <div>
        <Input v-model="component_id" type="text" placeholder="component_id" />
        <Input
            v-if="showInfo"
            v-model="content"
            type="textarea"
            :autosize="{ minRows: 6 }"
            placeholder="content"/>
        <Button v-if="!showInfo" @click="search"> 查询内容 </Button>
        <Button v-if="showInfo" @click="create"> 修改用法 </Button>
    </div>
</template>
<script>
import { ajax } from '@/util/ajax'
export default {
    data() {
        return {
            component_id: '',
            content: '',
            showInfo: false
        }
    },
    methods: {
        create() {
            if (this.component_id === '') {
                this.$Message.error('component_id 不能为空')
                return
            }
            // if (this.content === "") {
            //   this.$Message.error("content 不能为空");
            //   return;
            // }
            ajax({
                urlKey: '/api/usage/update',
                methods: 'POST',
                data: {
                    id: this.component_id,
                    content: this.content
                }
            }).then(res => {
                if (res.status === 1) {
                    this.$Message.success('创建成功')
                } else {
                    this.$Message.error(res.message)
                }
            })
        },
        search() {
            if (this.component_id === '') {
                this.$Message.error('component_id 不能为空')
                return
            }
            ajax({
                urlKey: '/api/usage/get',
                methods: 'POST',
                data: {
                    id: this.component_id
                }
            }).then(res => {
                if (res.status === 1) {
                    this.content = res.data.length ? res.data[0].content : ''
                    this.showInfo = true
                } else {
                    this.$Message.error(res.message)
                }
            })
        }
    }
}
</script>
