import image from './code-example/image.vuetext'
export default {
    id: 'image',
    title: '展示列图片、描述、二级描述',
    content: image.content,
    desc: [
        '通过 <code>src</code> 设置图片地址，需要触发区显示图片可以设置属性 <code>showImage</code> 。',
        '通过 <code>description</code> 设置描述，需要触发区显示描述可以设置属性 <code>showDescription</code> 。',
        '通过 <code>subtitle</code> 设置描述，需要触发区显示二级描述可以设置属性 <code>showSubtitle</code> 。'
    ]
}
