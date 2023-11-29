/**
 * 更新日志
 * 时间倒序排列
 */
export default [
    {
        name: '2.9.0',
        time: '2023-05-12',
        updateList: [
            {
                text: '新增 RdImage 图片组件，可预览的图片容器，并支持懒加载，自定义占位、加载失败等。',
                href: '/components/base/components-image'
            },
            {
                text: '新增 RdImageGroup 图片组，图片类型包含横图、竖图、方图、视频； 图片组内的数量包含有单图、双图、三图、四图、六图； 在固定显示区域的不同展示方式。支持功能：选择、视频角标、删除组、预览组。应用场景：通常极速创建中素材已选回显、广告预览列表、素材列表。',
                href: '/components/base/components-image-group'
            }
        ]
    },
    {
        name: '2.8.0',
        time: '2023-05-06',
        updateList: [
            {
                text: '新增 RdEchoContainer 选项回显组件，支持多种选项回显，应用场景：投放管理、素材报表的筛选项。',
                href: '/components/base/components-echo-container'
            },
            {
                text: 'RdIndicator 修复<code>transfer</code>为true时，点击展开面板里的内容会收起面板的问题，增加stop阻止点击事件向上冒泡。',
                href: ''
            }
        ]
    },
    {
        name: '2.7.0',
        time: '2023-04-24',
        updateList: [
            {
                text: '新增 RdEmpty 空状态组件，覆盖Select、Transfer、Cascader用户择数据录入，当目前没有数据时，用于显式的用户提示。解决没有组件之前空状态的提示图片和文字样式不统一问题。',
                href: '/components/base/components-empty'
            }
        ]
    },
    {
        name: '2.6.1',
        time: '2023-04-10',
        updateList: [
            {
                text: 'RdTextInputList 修复输标签<code>< xxxx >< /xxx ></code> ，组件内部使用了innerHTML会当作标签处理的问题，现在做了一层兼容处理，如果传递了<code>isTransform</code>属性，则按insertHTML处理，否则按insertText处理。',
                href: ''
            }
        ]
    },
    {
        name: '2.6.0',
        time: '2023-04-07',
        updateList: [
            {
                text: '新增 RdIndicator 数据指标组件。对选择的指标项，支持等于、不等于、小于、大于、大于等于、小于等于、介于等多种类型，输入数值的最大值和最小值可自定义。',
                href: '/components/base/components-indicator'
            }
        ]
    },
    {
        name: '2.5.4',
        time: '2023-04-04',
        updateList: [
            {
                text: 'RdTableColumns 优化 <code>tooltip</code> 显示时，滚动指标到最后鼠标悬停有样式问题。',
                href: ''
            }
        ]
    },
    {
        name: '2.5.2',
        time: '2023-03-30',
        updateList: [
            {
                text: 'RdTextInputList 新增属性 <code>isTransform</code>是否支持转译，默认为true。eg: 将< >转译成&lt; &gt;。',
                href: ''
            }
        ]
    },
    {
        name: '2.5.1',
        time: '2023-03-23',
        updateList: [
            {
                text: '优化 TableMultiInputs 表头样式，超出换行显示。',
                href: ''
            }
        ]
    },
    {
        name: '2.5.0',
        time: '2023-03-22',
        updateList: [
            {
                text: '新增 RdDatePicker 双日期选择器 ，支持可选开始日期，可选结束日期。',
                href: '/components/base/components-date-picker'
            },
            {
                text: 'RdDropdownPanel 修复禁用状态下仍触发事件、修复使用 <code>transfer</code> 脱离文档流后样式错误，新增组模式下 <code>labelvalue</code> 返回结果定制。'
            },
            {
                text: 'RdAccountList 新增参数 <code>beforeCheck</code> 切换前置校验函数。'
            },
            {
                text: 'RdAccountGroupList 新增参数 <code>beforeCheck </code> 切换前置校验函数。'
            }
        ]
    },
    {
        name: '2.4.1',
        time: '2023-03-15',
        updateList: [
            {
                text: 'RdDropdownPanel <code>type=group</code> 增加点击事件、下拉菜单-分类-标题加粗、下拉菜单打开状态的按钮没有选中状态。',
                href: ''
            },
            {
                text: 'RdSingleHeader 新添加副标题 <code>slot</code> 插槽。',
                href: ''
            }
        ]
    },
    {
        name: '2.4.0',
        time: '2023-03-07',
        updateList: [
            {
                text: 'RdTextEmojInput 修复批量添加标题组件中英文过长样式错乱的问题。',
                href: ''
            },
            {
                text: '新增 RdDropdownPanel 下拉菜单面板组件，统一下拉菜单交互，支持多种展示方式，提供丰富的slot定制。',
                href: ''
            }
        ]
    },
    {
        name: '2.3.1',
        time: '2023-03-03',
        updateList: [
            {
                text: 'RdDadioGroup 新增属性 <code>isCustom</code>(默认false)，值为true时移除自动定位，值为false时自动定位。',
                href: ''
            },
            {
                text: '调整 RdAccountGroupList 支持自定义传入 <code>className</code>,优化数据结构(处理父级与子级唯一id重复回显错误)。',
                href: ''
            }
        ]
    },
    {
        name: '2.3.0',
        time: '2023-03-02',
        updateList: [
            {
                text: '调整 RdDadioGroup 传入一个不存在的value值时移除自动定位非禁用value功能。',
                href: ''
            },
            {
                text: '调整 RdAccountGroupList 样式。',
                href: ''
            },
            {
                text: '调整 RdTextInputList 的 <code>validFn</code> 方法新增返回当前的索引，添加placeholder由外部传入，超出可编辑列表的长度，触发外部方法。',
                href: ''
            },
            {
                text: '新增 RdImagePreview 素材预览组件，传入图片或视频链接，以弹出层的方式且原始的横竖比例展示。',
                href: '/components/base/components-image-preview'
            }
        ]
    },
    {
        name: '2.2.1',
        time: '2023-01-17',
        updateList: [
            {
                text: '新增 RdProductSelect 产品/项目选择组件。',
                href: '/components/base/components-product-select'
            }
        ]
    },
    {
        name: '2.1.0',
        time: '2022-12-19',
        updateList: [
            {
                text: '新增 RdButton 按钮组件，自定义按钮。',
                href: '/components/base/components-button'
            },
            {
                text: '新增 RdDigitalDetailsTooltip 数字详情展示组件，一般应用在创编预览表格中的数据详情的展示。',
                href: '/components/base/components-digital-details-tooltip'
            },
            {
                text: '新增 RdSubmissionRule 提交规则组件，广告创编页面中，提交广告时用于展示广告的提交规则 。',
                href: '/components/base/components-submission-rule'
            },
            {
                text: '新增 RdBatchModifyBids 批量修改出价组件，广告创编页面中，预览广告后，可批量勾选广告再统一修改出价或ROI系数。',
                href: '/components/base/components-batch-modify-bids'
            }
        ]
    },
    {
        name: '2.0.8',
        time: '2022-10-31',
        updateList: [
            {
                text: 'TextInputList 批量添加标题组件新增文本粘贴功能。',
                href: '/components/base/components-text-input-list'
            }
        ]
    },
    {
        name: '2.0.5',
        time: '2022-10-25',
        updateList: [
            {
                text: 'RdSelect 账号选择组件，新增单选功能。',
                href: '/components/base/components-account-select'
            }
        ]
    },
    {
        name: '2.0.4',
        time: '2022-10-24',
        updateList: [
            {
                text: '新增 RdException 异常组件，异常页用于对页面特定的异常状态进行反馈。通常，它包含对错误状态的阐述，并向用户提供建议或操作，避免用户感到迷失和困惑。',
                href: '/components/base/components-exception'
            }
        ]
    },
    {
        name: '1.9.6',
        time: '2022-09-29',
        updateList: [
            {
                text: '新增 RdSelect 账号选择组件，支持搜索多选账号,分主体或跨主体选择账号。',
                href: '/components/base/components-account-select'
            }
        ]
    },
    {
        name: '1.8.1',
        time: '2022-09-16',
        updateList: [
            {
                text: '新增 RdCascaderTransfer 级联选择框，适用于多级数据选择。',
                href: '/components/base/components-cascader-transfer'
            }
        ]
    },
    {
        name: '1.7.2 UtilClass',
        time: '2022-09-02',
        updateList: [
            {
                text: '滚动条  新增属性 <code>.small-scroll-y</code> 和 <code>.default-scroll-y</code>，弹窗滚动条使用了.default-scroll-y。',
                href: '/components/other/util-class'
            },
            {
                text: 'class 新增：清除浮动，文本超长截断，文字对齐，显示隐藏，快速浮动。',
                href: '/components/other/util-class'
            },
            {
                text: '新增 RdTextInputList 批量添加标题组件，可以在标题中插入emoji图片或者换行符图片。',
                href: '/components/base/components-text-input-list'
            }
        ]
    }
]
