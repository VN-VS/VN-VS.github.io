import status from './code-example/status.vuetext'
export default {
    id: 'status',
    title: '各种状态',
    content: status.content,
    desc: [
        '设置属性 <code>selected</code> 切换选中状态。',
        '设置属性 <code>show-delete</code> 显示删除按钮，点击后触发 <code>on-delete</code> 事件。',
        '设置属性 <code>video-sign</code> 视频标识。',
        '设置属性 <code>video-sign</code> 显示组图预览按钮，点击后触发 <code>on-preview-group-click</code> 事件。'
    ]
}
