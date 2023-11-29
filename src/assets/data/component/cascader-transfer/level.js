import level from './code-example/level.vuetext'
export default {
    id: 'level',
    title: '已选部分名称展示层级关系',
    content: level.content,
    desc: '通过设置<code> selectedLabelName </code>属性展示已选部分层级关系。datas中必须有字段返回当前的层级关系。<br/> 通过设置<code> isQuery </code>可以搜索，目前只支持第一级搜索。'
}
