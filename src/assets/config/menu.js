export default {
    name: '一级菜单',
    child: [
        {
            id: 'components',
            name: '组件',
            path: 'components',
            searchInfo: {
                icon: 'C',
                background: '#00d2b3',
                name: 'Components',
                show: true
            },
            child: [
                {
                    id: 'guide',
                    name: '指南',
                    path: 'guide',
                    child: [
                        {
                            id: 'introduce',
                            name: '介绍',
                            href: 'introduce',
                            child: []
                        },
                        {
                            id: 'start',
                            name: '快速开始',
                            href: 'start',
                            child: []
                        },
                        {
                            id: 'changelog',
                            name: '更新日志',
                            href: 'changelog',
                            child: []
                        }
                    ]
                },
                {
                    id: 'component-base',
                    name: 'UI组件',
                    path: 'base',
                    child: [
                        {
                            id: 'components-transfer',
                            name: '多级穿梭框',
                            englishName: 'Transfer',
                            href: 'components-transfer',
                            child: []
                        },
                        {
                            id: 'components-multi-cascader',
                            name: '下拉多级复选框',
                            englishName: 'MultiCascader',
                            href: 'components-multi-cascader',
                            child: []
                        },
                        {
                            id: 'components-prefix-container',
                            name: '前缀容器',
                            englishName: 'PrefixContainer',
                            href: 'components-prefix-container',
                            child: []
                        },
                        {
                            id: 'components-single-header',
                            name: '单标题',
                            englishName: 'SingleHeader',
                            href: 'components-single-header',
                            child: []
                        },
                        {
                            id: 'components-breadcrumb',
                            name: '极简面包屑导航',
                            englishName: 'Breadcrumb',
                            href: 'components-breadcrumb',
                            child: []
                        },
                        {
                            id: 'components-page-header',
                            name: '页头',
                            englishName: 'PageHeader',
                            href: 'components-page-header',
                            child: []
                        },
                        {
                            id: 'components-radio-group',
                            name: '单选框',
                            englishName: 'RadioGroup',
                            href: 'components-radio-group',
                            child: []
                        },
                        {
                            id: 'components-multi-radio-button',
                            name: '多选框',
                            englishName: 'MultiRadioButton',
                            href: 'components-multi-radio-button',
                            child: []
                        },
                        {
                            id: 'components-modals',
                            name: '弹出框',
                            englishName: 'Modals',
                            href: 'components-modals',
                            child: []
                        },
                        {
                            id: 'components-ellipsis',
                            name: '文本省略',
                            englishName: 'Ellipsis',
                            href: 'components-ellipsis',
                            child: []
                        },
                        {
                            id: 'components-draggable-card',
                            name: '拖拽列表',
                            englishName: 'DraggableCard',
                            href: 'components-draggable-card',
                            child: []
                        },
                        {
                            id: 'components-table-columns',
                            name: '选择指标项',
                            englishName: 'TableColumns',
                            href: 'components-table-columns',
                            child: []
                        },
                        {
                            id: 'components-table-multi-inputs',
                            name: '多列回车输入',
                            englishName: 'TableMultiInputs',
                            href: 'components-table-multi-inputs',
                            child: []
                        },
                        {
                            id: 'components-word-limit',
                            name: '字数统计',
                            englishName: 'WordLimit',
                            href: 'components-word-limit',
                            child: []
                        },
                        {
                            id: 'components-text-emoj-input',
                            name: '表情文本输入框',
                            englishName: 'TextEmojInput',
                            href: 'components-text-emoj-input',
                            child: []
                        },
                        {
                            id: '3-2-16',
                            name: '通配符',
                            englishName: 'Wildcard',
                            href: 'components-wildcard',
                            child: []
                        },
                        {
                            id: 'components-cascader-transfer',
                            name: '级联选择框',
                            englishName: 'CascaderTransfer',
                            href: 'components-cascader-transfer',
                            child: []
                        },
                        {
                            id: 'components-exception',
                            name: '异常',
                            englishName: 'Exception',
                            href: 'components-exception',
                            child: []
                        },
                        {
                            id: 'components-page',
                            name: '分页',
                            englishName: 'Page',
                            href: 'components-page',
                            child: []
                        },
                        {
                            id: 'components-button',
                            name: '按钮组件',
                            englishName: 'Button',
                            href: 'components-button',
                            child: []
                        },
                        {
                            id: 'components-digital-details-tooltip',
                            name: '数字详情展示',
                            englishName: 'DigitalDetailsTooltip',
                            href: 'components-digital-details-tooltip',
                            child: []
                        },
                        {
                            id: 'components-schedule',
                            name: '时段选择器',
                            englishName: 'Schedule',
                            href: 'components-schedule',
                            child: []
                        },
                        {
                            id: 'components-sort',
                            name: '排序',
                            englishName: 'Sort',
                            href: 'components-sort',
                            child: []
                        },
                        {
                            id: 'components-dropdown-search',
                            name: '下拉搜索',
                            englishName: 'DropdownSearch',
                            href: 'components-dropdown-search',
                            child: []
                        },
                        {
                            id: 'components-image-preview',
                            name: '素材预览',
                            englishName: 'ImagePreview',
                            href: 'components-image-preview',
                            child: []
                        },
                        {
                            id: 'components-image',
                            name: '图片',
                            englishName: 'Image',
                            href: 'components-image',
                            child: []
                        },
                        {
                            id: 'business-components-image-group',
                            name: '图片组',
                            englishName: 'ImageGroup',
                            href: 'components-image-group',
                            child: []
                        },
                        {
                            id: 'components-dropdown-panel',
                            name: '下拉菜单面板',
                            englishName: 'DropdownPanel',
                            href: 'components-dropdown-panel',
                            child: []
                        },
                        {
                            id: 'components-date-picker',
                            name: '时间选择器',
                            englishName: 'DatePicker',
                            href: 'components-date-picker',
                            child: []
                        },
                        {
                            id: 'components-indicator',
                            name: '数据指标',
                            englishName: 'Indicator',
                            href: 'components-indicator',
                            child: []
                        },
                        {
                            id: 'components-empty',
                            name: '空状态',
                            englishName: 'Empty',
                            href: 'components-empty',
                            child: []
                        }
                    ]
                },
                {
                    id: 'component-business',
                    name: '业务组件',
                    path: 'base',
                    child: [
                        {
                            id: 'business-components-filter-list-select',
                            name: '选择器',
                            englishName: 'FilterListSelect',
                            href: 'components-filter-list-select',
                            child: []
                        },
                        {
                            id: 'business-components-page-header-module',
                            name: '业务模块页头',
                            englishName: 'PageHeaderModule',
                            href: 'components-page-header-module',
                            child: []
                        },
                        {
                            id: 'business-components-account-list',
                            name: '多账户选择',
                            englishName: 'AccountList',
                            href: 'components-account-list',
                            child: []
                        },
                        {
                            id: 'business-components-account-group-list',
                            name: '多账户组选择',
                            englishName: 'AccountGroupList',
                            href: 'components-account-group-list',
                            child: []
                        },
                        {
                            id: 'business-components-account-select',
                            name: '账户选择（Select）',
                            englishName: 'accountSelect',
                            href: 'components-account-select',
                            child: []
                        },
                        {
                            id: 'business-components-edit-row-bid',
                            name: '表格行内编辑出价',
                            englishName: 'EditRowBid',
                            href: 'components-edit-row-bid',
                            child: []
                        },
                        {
                            id: 'business-components-reverse-button',
                            name: '选择配置按钮',
                            englishName: 'ReverseButton',
                            href: 'components-reverse-button',
                            child: []
                        },
                        {
                            id: 'business-components-text-item-show',
                            name: '创建单项回显',
                            englishName: 'TextItemShow',
                            href: 'components-text-item-show',
                            child: []
                        },
                        {
                            id: 'business-components-layout-module-config',
                            name: '创建模块布局',
                            englishName: 'LayoutModuleConfig',
                            href: 'components-layout-module-config',
                            child: []
                        },
                        {
                            id: 'business-components-batch-upload-xls',
                            name: '上传Excel',
                            englishName: 'BatchUploadXls',
                            href: 'components-batch-upload-xls',
                            child: []
                        },
                        {
                            id: 'business-components-text-input-list',
                            name: '批量添加标题',
                            englishName: 'TextInputList',
                            href: 'components-text-input-list',
                            child: []
                        },
                        {
                            id: 'business-components-submission-rule',
                            name: '提交规则',
                            englishName: 'SubmissionRule',
                            href: 'components-submission-rule',
                            child: []
                        },
                        {
                            id: 'business-components-batch-modify-bids',
                            name: '批量修改出价',
                            englishName: 'BatchModifyBids',
                            href: 'components-batch-modify-bids',
                            child: []
                        },
                        {
                            id: 'business-components-product-select',
                            name: '产品/项目选择',
                            englishName: 'ProductSelect',
                            href: 'components-product-select',
                            child: []
                        },
                        {
                            id: 'business-components-echo-container',
                            name: '选项回显',
                            englishName: 'EchoContainer',
                            href: 'components-echo-container',
                            child: []
                        }
                    ]
                },
                {
                    id: 'auxiliary',
                    name: '辅助类',
                    path: 'auxiliary',
                    child: [
                        {
                            id: 'UtilClass',
                            name: '样式',
                            englishName: 'UtilClass',
                            href: 'util-class',
                            child: []
                        }
                    ]
                },
                {
                    id: 'directive',
                    name: '指令',
                    path: 'directive',
                    child: [
                        {
                            id: 'directive-tooltip',
                            name: '气泡提示',
                            englishName: 'v-tooltip',
                            href: 'directive-tooltip',
                            child: []
                        }
                    ]
                }
            ]
        },
        {
            id: 'stylelib',
            name: '样式库',
            path: 'stylelib',
            searchInfo: {
                icon: 'S',
                background: '#663ab7',
                name: 'Stylelib',
                show: true
            },
            child: [
                // {
                //   id: "5-1",
                //   name: "样式库",
                //   child: [
                //     {
                //       id: "5-1-1",
                //       name: "样式库",
                //       englishName: "",
                //       href: "",
                //       child: []
                //     }
                //   ]
                // }
            ]
        },
        {
            id: '2',
            name: '品牌',
            path: 'brand',
            searchInfo: {
                icon: 'B',
                background: '#2d8cf0',
                name: 'Brand',
                show: true
            },
            child: [
                {
                    id: '1-1',
                    name: '概述',
                    englishName: '',
                    href: 'brand-overview',
                    child: []
                }
            ]
            // child: [{
            //     id: "1-1",
            //     name: "概述",
            //     englishName: "",
            //     href: "brand-overview",
            //     child: []
            //   },
            //   {
            //     id: "1-2",
            //     name: "品牌策略",
            //     englishName: "",
            //     href: "brand-strategy",
            //     child: []
            //   },
            //   {
            //     id: "1-3",
            //     name: "基础系统",
            //     child: [{
            //         id: "1-3-1",
            //         name: "品牌标志",
            //         englishName: "",
            //         href: "brand-logo",
            //         child: []
            //       },
            //       {
            //         id: "1-3-2",
            //         name: "标准字体",
            //         englishName: "",
            //         href: "brand-font",
            //         child: []
            //       },
            //       {
            //         id: "1-3-3",
            //         name: "标准颜色",
            //         englishName: "",
            //         href: "brand-color",
            //         child: []
            //       },
            //       {
            //         id: "1-3-4",
            //         name: "图片和图形风格",
            //         englishName: "",
            //         href: "brand-style",
            //         child: []
            //       },
            //       {
            //         id: "1-3-5",
            //         name: "排版版式",
            //         englishName: "",
            //         href: "brand-typesetting",
            //         child: []
            //       }
            //     ]
            //   },
            //   {
            //     id: "1-4",
            //     name: "应用系统",
            //     child: [{
            //         id: "1-4-1",
            //         name: "传播物料",
            //         englishName: "",
            //         href: "brand-material",
            //         child: []
            //       },
            //       {
            //         id: "1-4-2",
            //         name: "办公系统",
            //         englishName: "",
            //         href: "brand-office",
            //         child: []
            //       },
            //       {
            //         id: "1-4-3",
            //         name: "PPT模版",
            //         englishName: "",
            //         href: "brand-ppt",
            //         child: []
            //       }
            //     ]
            //   },
            //   {
            //     id: "1-5",
            //     name: "插图",
            //     child: [{
            //         id: "1-5-1",
            //         name: "概述",
            //         englishName: "",
            //         href: "brand-outline",
            //         child: []
            //       },
            //       {
            //         id: "1-5-2",
            //         name: "色彩",
            //         englishName: "",
            //         href: "brand-hue",
            //         child: []
            //       },
            //       {
            //         id: "1-5-3",
            //         name: "人物比例",
            //         englishName: "",
            //         href: "brand-radio",
            //         child: []
            //       },
            //       {
            //         id: "1-5-4",
            //         name: "人物动作",
            //         englishName: "",
            //         href: "brand-action",
            //         child: []
            //       },
            //       {
            //         id: "1-5-5",
            //         name: "场景",
            //         englishName: "",
            //         href: "brand-scenes",
            //         child: []
            //       }
            //     ]
            //   }
            // ]
        },
        {
            id: '3',
            name: '设计',
            path: 'design',
            searchInfo: {
                icon: 'D',
                background: '#fba900',
                name: 'Design',
                show: true
            },
            child: [
                {
                    id: '2-1',
                    name: '概述',
                    englishName: 'Overview',
                    href: 'design-overview',
                    child: []
                }
            ]
            // child: [{
            //   id: "2-1",
            //   name: "概述",
            //   englishName: "Overview",
            //   href: "design-overview",
            //   child: []
            // },
            // {
            //   id: "2-2",
            //   name: "设计原则",
            //   englishName: "Sense",
            //   href: "design-sense",
            //   child: []
            // },
            // {
            //   id: "2-3",
            //   name: "设计基础",
            //   child: [{
            //     id: "2-3-1",
            //     name: "色彩",
            //     englishName: "Color",
            //     href: "design-color",
            //     child: []
            //   },
            //   {
            //     id: "2-3-2",
            //     name: "字体",
            //     englishName: "Font",
            //     href: "design-font",
            //     child: []
            //   },
            //   {
            //     id: "2-3-3",
            //     name: "图标",
            //     englishName: "Icon",
            //     href: "design-icon",
            //     child: []
            //   },
            //   {
            //     id: "2-3-4",
            //     name: "布局",
            //     englishName: "Layout",
            //     href: "design-layout",
            //     child: []
            //   },
            //   {
            //     id: "2-3-5",
            //     name: "间距",
            //     englishName: "Spacing",
            //     href: "design-spacing",
            //     child: []
            //   },
            //   {
            //     id: "2-3-6",
            //     name: "状态",
            //     englishName: "State",
            //     href: "design-state",
            //     child: []
            //   },
            //   {
            //     id: "2-3-7",
            //     name: "容器",
            //     englishName: "Box",
            //     href: "design-box",
            //     child: []
            //   },
            //   {
            //     id: "2-3-8",
            //     name: "阴影高度",
            //     englishName: "Shadow",
            //     href: "design-shadow",
            //     child: []
            //   }
            //   ]
            // },
            // {
            //   id: "2-4",
            //   name: "资源下载",
            //   englishName: "Download",
            //   href: "assets-download",
            //   child: []
            // },
            // ]
        },
        {
            id: '4',
            name: '图表',
            path: 'chart',
            searchInfo: {
                icon: 'C',
                background: '#f27036',
                name: 'Chart',
                show: true
            },
            child: [
                {
                    id: '4-1',
                    name: '概述',
                    englishName: '',
                    href: 'chart-color',
                    child: []
                }
            ]
            // child: [{
            //   id: "4-1",
            //   name: "基础",
            //   child: [{
            //     id: "4-1-1",
            //     name: "色彩",
            //     englishName: "Color",
            //     href: "chart-color",
            //     child: []
            //   },
            //   {
            //     id: "4-1-2",
            //     name: "图表组成",
            //     englishName: "Composition",
            //     href: "chart-composition",
            //     child: []
            //   }
            //   ]
            // },
            // {
            //   id: "4-2",
            //   name: "图表",
            //   child: [{
            //     id: "4-2-1",
            //     name: "图表示例",
            //     englishName: "Demo Chart",
            //     href: "chart-demo",
            //     child: []
            //   },
            //   {
            //     id: "4-2-2",
            //     name: "折线图",
            //     englishName: "Line Chart",
            //     href: "chart-line",
            //     child: []
            //   },
            //   {
            //     id: "4-2-3",
            //     name: "柱状图",
            //     englishName: "Histogram",
            //     href: "chart-histogram",
            //     child: []
            //   },
            //   {
            //     id: "4-2-4",
            //     name: "条形图",
            //     englishName: "Bar Chart",
            //     href: "chart-bar",
            //     child: []
            //   },
            //   {
            //     id: "4-2-5",
            //     name: "面积图",
            //     englishName: "Area Chart",
            //     href: "chart-area",
            //     child: []
            //   },
            //   {
            //     id: "4-2-6",
            //     name: "饼图",
            //     englishName: "Pie Chart",
            //     href: "chart-pie",
            //     child: []
            //   },
            //   {
            //     id: "4-2-7",
            //     name: "雷达图",
            //     englishName: "Radar Chart",
            //     href: "chart-radar",
            //     child: []
            //   },
            //   {
            //     id: "4-2-8",
            //     name: "热力图",
            //     englishName: "Heatmap",
            //     href: "chart-heatmap",
            //     child: []
            //   },
            //   {
            //     id: "4-2-9",
            //     name: "漏斗图",
            //     englishName: "Funnel Chart",
            //     href: "chart-funnel",
            //     child: []
            //   }
            //   ]
            // }
            // ]
        }
    ]
}
