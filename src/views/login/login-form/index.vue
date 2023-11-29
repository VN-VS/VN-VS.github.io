<template>
    <div>
        <h2></h2>

        <Form
            ref="loginForm"
            :model="form"
            :rules="rules"
            @keydown.enter.native="handleSubmit">
            <FormItem prop="userName">
                <Input
                    v-model="form.userName"
                    placeholder="请输入用户名/邮箱"/>
            </FormItem>
            <FormItem prop="password">
                <Input
                    v-model="form.password"
                    type="password"
                    placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
                <div class="signIn">
                    <span v-if="errorNews">{{ errorNews }}</span>
                    <p>
                        还没有账户?
                        <a @click="switchType()">立即注册</a>
                    </p>
                </div>
                <Button type="primary" long class="land" @click="handleSubmit">
                    登录
                </Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import { ajax } from '@/util/ajax'
import cookie from 'js-cookie'
export default {
    name: 'LoginForm',
    props: {
        userNameRules: {
            type: Array,
            // eslint-disable-next-line
            default: () => {
                return [
                    {
                        required: true,
                        message: '用户名/邮箱不能为空',
                        trigger: 'blur'
                    }
                ]
            }
        },
        passwordRules: {
            type: Array,
            // eslint-disable-next-line
            default: () => {
                return [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    data() {
        return {
            form: {
                userName: '',
                password: ''
            },
            errorNews: ''
        }
    },
    computed: {
        rules() {
            return {
                userName: this.userNameRules,
                password: this.passwordRules
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    const form = this.form
                    ajax({
                        urlKey: '/api/login',
                        methods: 'POST',
                        data: {
                            name: form.userName,
                            pass: form.password
                        }
                    }).then(res => {
                        if (res.status === 1) {
                            const authorization = JSON.parse(
                                res.data.Authorization
                            )
                            cookie.set('token', authorization.token, {
                                expires: 365,
                                path: ''
                            })
                            cookie.set('user_info', authorization, {
                                expires: 365,
                                path: ''
                            })
                            this.$router.push('/home')
                        } else {
                            this.$Message.error(res.message)
                        }
                    })
                }
            })
        },
        switchType() {
            this.$emit('switch-type', 'register')
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
