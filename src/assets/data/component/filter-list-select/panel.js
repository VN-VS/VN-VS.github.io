import panel from './code-example/panel.vuetext'
export default {
    id: 'panel',
    title: '已选面板、搜索',
    content: panel.content,
    desc: [
        '通过设置属性 <code>show-select-option</code> 可以开启右侧选项面板。',
        '通过设置属性 <code>filterable</code> 可以开启搜索模式。单选和多选都支持搜索模式。'
    ]
}
