import preview from './code-example/preview.vuetext'
export default {
    id: 'preview',
    title: '图片预览',
    content: preview.content,
    desc: [
        '设置属性 <code>preview</code> 可以开启图片预览模式，设置属性 <code>preview-tip</code> 显示预览Icon，结合<code>type</code>使用。',
        '设置属性 <code>preview-src</code> 预览的Url，常用于加载清晰的大图，默认加载<code>src</code>地址。',
        '设置属性 <code>video-sign</code> 角标，标识素材类型为视频，不支持预览。'
    ]
}
