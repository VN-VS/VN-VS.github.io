import lazy from './code-example/lazy.vuetext'
export default {
    id: 'lazy',
    title: '懒加载',
    content: lazy.content,
    desc: [
        '设置属性 <code>lazy</code> 可以开启图片懒加载功能，当图片滚动到可视范围内才会加载，使用原生 <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">IntersectionObserver</a>。',
        '设置属性 <code>scroll-container</code> 可以指定滚动容器，如未设置，会自动寻找最近一个 overflow 值为 auto 或 scroll 的父元素。'
    ]
}
