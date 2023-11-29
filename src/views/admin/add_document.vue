<template>
    <div>
        <Input v-model="component_id" type="text" placeholder="component_id" />
        <Input
            v-model="content"
            type="textarea"
            :autosize="{ minRows: 6 }"
            placeholder="content"/>
        <Button @click="create">创建文档</Button>
    </div>
</template>
<script>
import { ajax } from '@/util/ajax'
export default {
    data() {
        return {
            component_id: '',
            content: ''
        }
    },
    methods: {
        create() {
            if (this.component_id === '') {
                this.$Message.error('component_id 不能为空')
                return
            }
            if (this.content === '') {
                this.$Message.error('content 不能为空')
                return
            }
            ajax({
                urlKey: '/api/document/update',
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
        }
    }
}
</script>
