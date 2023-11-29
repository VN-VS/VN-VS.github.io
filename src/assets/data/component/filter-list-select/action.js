import action from './code-example/action.vuetext'
export default {
    id: 'action',
    title: '附加内容',
    content: action.content,
    desc: [
        '通过设置属性 <code>show-action</code> 可以在下拉框底部开启附加操作。',
        '设置属性 <code>action-text</code> 提示文案、<code>action-button-text</code> 按钮文案。',
        '设置属性 <code>action-rule-validate</code> 表单验证规则。',
        '设置属性 <code>action-hide-tota </code> 是否隐藏字数统计	。',
        '设置属性 <code>action-count</code> 输入框文字数量、<code>action-total</code> 显示总字数。',
        '<code> @on-active-ok </code> 点击确认时的回调函数。',
        '设置属性 <code>before-action-ok</code> 点击确认 <code> @on-active-ok </code> 之前的钩子，多用于确定后请求接口，若返回 false 或者 Promise 则停止。'
    ]
}
