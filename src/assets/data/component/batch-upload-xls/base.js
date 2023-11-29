import base from './code-example/base.vuetext'
export default {
    id: 'base',
    title: '基本用法（上传成功）',
    content: base.content,
    desc: '基本用法展示了通过 <code>action</code> 上传地址参数对后端预上传时正确的显示步骤。通过 <code>accept</code> 和 <code>type</code> 规定了上传文件格式为excal的可拖拽上传方式，因暂无上传接口通过 <code>handleError</code> 上传错误方法模拟演示了上传成功后第二步的调用方法及传输参数等，通过组件返回的 <code>tautology</code> 重置及 <code>clearFile</code> 删除演示了需要清空的参数及相对应的使用方法。'
}
