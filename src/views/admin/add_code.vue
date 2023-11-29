<template>
    <div>
        <Input v-model="component_id" type="text" placeholder="component_id" />
        <Input v-model="title" type="text" placeholder="title" />
        <Input
            v-model="desc"
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="desc"/>
        <Input
            v-model="content"
            type="textarea"
            :autosize="{ minRows: 6 }"
            placeholder="content"/>
        <Button @click="create">创建代码</Button>
    </div>
</template>
<script>
import { ajax } from '@/util/ajax'
export default {
    data() {
        return {
            component_id: '',
            title: '',
            desc: '',
            content: ''
        }
    },
    methods: {
        create() {
            ajax({
                urlKey: '/api/code/create',
                methods: 'POST',
                data: {
                    component_id: this.component_id,
                    content: this.content,
                    title: this.title,
                    desc: this.desc
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
