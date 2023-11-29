<template>
    <main class="run">
        <Input
            v-model="formCustom.html"
            style="width: 600px"
            type="textarea"
            :autosize="{ minRows: 15, maxRows: 30 }"
            placeholder="请输入..."
        ></Input>
        <my-display
            ref="refDisplay"
            :code="formCustom.html"
            style="margin-left: 16px"
        ></my-display>
    </main>
</template>
<script>
import myDisplay from '@/components/display/index.vue'
import { getRunTemplate } from '../data'
export default {
    components: { myDisplay },
    data() {
        return {
            formCustom: {
                name: '',
                details: '',
                html: ''
            },
            ruleCustom: {
                name: [
                    {
                        required: true,
                        message: '请填写名称',
                        trigger: 'blur'
                    }
                ],
                details: [
                    {
                        required: true,
                        message: '请填写详情',
                        trigger: 'blur'
                    }
                ],
                html: [
                    {
                        required: true,
                        message: '请填写代码',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    created() {
        let { id: componentId, exampleId } = this.$route.params
        this.formCustom.html = getRunTemplate(componentId, exampleId)
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success('Success!')
                } else {
                    this.$Message.error('Fail!')
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields()
            this.$refs.refDisplay.destroyCode()
        },
        run() {
            this.$refs.refDisplay.renderCode()
        }
    }
}
</script>
<style>
.run {
    padding: 20px;
    display: flex;
}
</style>
