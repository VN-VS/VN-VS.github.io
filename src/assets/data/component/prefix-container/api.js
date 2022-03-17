import { renderInnerHTML } from "@/util/util";
export default [
    {
        title: "Transfer props",
        columns: [
            {
                title: "属性",
                key: "attribute",
                render: renderInnerHTML,
            },
            {
                title: "说明",
                key: "explain",
                render: renderInnerHTML,
            },
            {
                title: "类型",
                key: "type",
            },
            {
                title: "默认值",
                key: "default",
                render: renderInnerHTML,
            },
        ],
        data: [
            {
                attribute: "data",
                explain:
                    "用于渲染页面的数据(格式与iview的级联选择器的数据格式一致)",
                type: "Array",
                default: "[]",
            },
            {
                attribute: "value",
                explain: "默认已选择数据项",
                type: "array",
                default: "[]",
            },
            {
                attribute: "expand-trigger",
                explain: "次级菜单的展开方式,可选click",
                type: "String",
                default: "hover",
            },
            {
                attribute: "separator",
                explain: "选项分隔符",
                type: "String",
                default: "click",
            },
            {
                attribute: "value-key",
                explain: "指定选项的值为选项对象的某个属性值",
                type: "Array",
                default: "'-'",
            }
        ],
    },
    {
        title: "Transfer events",
        columns: [
            {
                title: "事件名",
                key: "eventName",
                render: renderInnerHTML,
            },
            {
                title: "说明",
                key: "explain",
                render: renderInnerHTML,
            },
            {
                title: "返回值",
                key: "returnValue",
                render: renderInnerHTML,
            },
        ],
        data: [
            {
                eventName: "change",
                explain: "选中值发生变化时触发",
                returnValue: "目前的选中值",
            },
            {
                eventName: "visible-change",
                explain: "下拉框出现/隐藏时触发",
                returnValue: "出现则为 true，隐藏则为 false",
            },
            {
                eventName: "remove-tag",
                explain: "移除tag时触发",
                returnValue: "移除的tag值",
            },
            {
                eventName: "clear",
                explain: "可清空模式下用户点击清空按钮时触发",
                returnValue: "",
            },
            {
                eventName: "getLables",
                explain: "获取对应的labels",
                returnValue: "[]",
            },
        ],
    },
]