export const tableColumns = [
    { width: 64, fixed: 'left', type: 'selection', align: 'center' },
    {
        key: 'status',
        slot: 'optStatus',
        check: false,
        fixed: 'left',
        title: '状态',
        width: 96
    },
    {
        key: 'campaignName',
        slot: 'campaignName',
        fixed: 'left',
        title: '广告组名称',
        disabled: true,
        minWidth: 160
    },
    {
        key: 'media',
        slot: 'media',
        title: '媒体',
        minWidth: 120,
        sortType: 'asc'
    },
    {
        key: 'productName',
        check: true,
        title: '产品',
        minWidth: 120
    },
    {
        key: 'appName',
        check: true,
        title: '项目',
        minWidth: 120
    },
    {
        key: 'landingType',
        slot: 'landingType',
        title: '推广目的',
        minWidth: 120
    },
    {
        key: 'status',
        title: '投放状态',
        minWidth: 120
    },
    {
        key: 'budget',
        title: '组预算',
        align: 'right',
        minWidth: 120,
        sortable: 'custom'
    },
    {
        key: 'campaignModifyTime',
        title: '广告创建时间',
        width: 160,
        sortable: 'custom'
    },
    {
        key: 'campaignModifyTime',
        title: '广告修改时间',
        width: 160,
        sortable: 'custom'
    }
]

export const tableMockData = [
    {
        accountName: '--',
        activeCost: '--',
        appId: '--',
        appName: '--',
        budget: '--',
        budgetMode: '--',
        camId: '--',
        campaignCreateTime: '--',
        campaignId: '--',
        campaignModifyTime: '--',
        campaignName: '--',
        groupId: '--',
        groupName: '--',
        media: '--',
        mediaAccountId: '--',
        optStatus: '--',
        productId: '--',
        productName: '--',
        status: '--',
        _disabled: true
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
        appId: '1170',
        appName: '京P·OX334',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36795',
        campaignCreateTime: '2022-06-27 12:34:19',
        campaignId: 'abc173679543975',
        campaignModifyTime: '2022-06-27 12:34:19',
        campaignName: '应用推广12:33:50010627',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',
        status: '暂停'
    },
    {
        accountName: 'WIFI闪电宝-BF-02',
        appId: '1196',
        appName: '新测试',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36792',
        campaignCreateTime: '2022-06-25 15:53:57',
        campaignId: '1736592407862331',
        campaignModifyTime: '2022-06-25 15:53:56',
        campaignName: 'oline-应用推广15:53:5401',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163653',

        productId: '2',
        productName: '猛哥的产品',
        status: '暂停'
    },
    {
        accountName: 'WIFI闪电宝-BF-01',
        appId: '1196',
        appName: '新测试',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36793',
        campaignCreateTime: '2022-06-25 15:53:57',
        campaignId: '1736592453742664',
        campaignModifyTime: '2022-06-25 15:53:56',
        campaignName: 'oline-应用推广15:53',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163655',

        productId: '2',
        productName: '猛哥的产品',
        status: '暂停'
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
        appId: '1170',
        appName: '京P·OX334',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36791',
        campaignCreateTime: '2022-06-24 20:01:24',
        campaignId: '1736517438337086',
        campaignModifyTime: '2022-06-24 20:01:24',
        campaignName: '应用推广20:01',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',

        status: '暂停'
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
        appId: '1170',
        appName: '京P·OX334',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36777',
        campaignCreateTime: '2022-06-24 19:55:34',
        campaignId: '1736517059785832',
        campaignModifyTime: '2022-06-24 19:55:33',
        campaignName: '应用推广19:55',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',
        status: '暂停'
    },
    {
        accountName: 'WIFI闪电宝-BF-01',
        appId: '1196',
        appName: '新测试',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36780',
        campaignCreateTime: '2022-06-24 19:43:21',
        campaignId: '1736516265672804',
        campaignModifyTime: '2022-06-27 10:48:38',
        campaignName: '线上-搜索广告-012',

        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163655',

        productId: '2',
        productName: '猛哥的产品',
        status: '暂停'
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
        appId: '1170',
        appName: '京P·OX334',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36778',
        campaignCreateTime: '2022-06-24 19:40:49',
        campaignId: '1736516139239447',
        campaignModifyTime: '2022-06-24 19:40:48',
        campaignName: 'pre-搜索广告-0624-05',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',
        status: '暂停'
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
        appId: '1170',
        appName: '京P·OX334',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36774',
        campaignCreateTime: '2022-06-24 19:40:00',
        campaignId: '1736516091390007',
        campaignModifyTime: '2022-06-24 19:39:59',
        campaignName: 'pre-搜索广告-0624-04',

        groupId: '1152',
        groupName: '测试组账号组',

        landingType: { code: 'APP', value: '应用推广' },

        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',

        status: '暂停'
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',

        appId: '1170',
        appName: '京P·OX334',

        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },

        camId: '36775',
        campaignCreateTime: '2022-06-24 19:37:26',
        campaignId: '1736515905879083',
        campaignModifyTime: '2022-06-24 19:37:25',
        campaignName: 'pre-搜索广告-0624-03',

        groupId: '1152',
        groupName: '测试组账号组',

        landingType: { code: 'APP', value: '应用推广' },

        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',

        status: '暂停'
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',

        appId: '1170',
        appName: '京P·OX334',

        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },

        camId: '36776',
        campaignCreateTime: '2022-06-24 19:35:15',
        campaignId: '1736515795779646',
        campaignModifyTime: '2022-06-24 19:35:15',
        campaignName: 'pre-搜索广告-0624-02',

        groupId: '1152',
        groupName: '测试组账号组',

        landingType: { code: 'APP', value: '应用推广' },

        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',

        status: '暂停'
    },
    {
        accountName: 'SDPA-商品,勿动',

        appId: '1177',
        appName: '测试项目1',

        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },

        camId: '36772',
        campaignCreateTime: '2022-06-24 19:33:04',
        campaignId: '1736515656341565',
        campaignModifyTime: '2022-06-24 19:33:03',
        campaignName: 'pre-销售线索-搜索广告-02',

        groupId: '1152',
        groupName: '测试组账号组',

        landingType: { code: 'LINK', value: '销售线索收集' },

        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163648',

        productId: '1',
        productName: '测试组',

        status: '暂停'
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',

        appId: '1170',
        appName: '京P·OX334',

        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },

        camId: '36773',
        campaignCreateTime: '2022-06-24 19:30:01',
        campaignId: '1736515461193780',
        campaignModifyTime: '2022-06-24 19:30:01',
        campaignName: 'pre-搜索广告-0624-01',

        groupId: '1152',
        groupName: '测试组账号组',

        landingType: { code: 'APP', value: '应用推广' },

        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',

        status: '暂停'
    },
    {
        accountName: 'WIFI闪电宝-BF-02',

        appId: '1196',
        appName: '新测试',

        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },

        camId: '36781',
        campaignCreateTime: '2022-06-24 19:12:14',
        campaignId: '1736514326024254',
        campaignModifyTime: '2022-06-24 19:12:13',
        campaignName: 'pre-模板-应用-062401',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163653',

        productId: '2',
        productName: '猛哥的产品',
        status: '暂停'
    },
    {
        accountName:
            'WIFI3测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
        appId: '1170',
        appName: '京P·OX334',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36779',
        campaignCreateTime: '2022-06-24 19:12:14',
        campaignId: '1736514345609268',
        campaignModifyTime: '2022-06-24 19:12:13',
        campaignName: 'pre-模板-应用-0624018d50',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '19957646',

        productId: '1',
        productName: '测试组',
        status: '暂停'
    },
    {
        accountName: 'SDPA-商品,勿动',
        appId: '1177',
        appName: '测试项目1',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36770',
        campaignCreateTime: '2022-06-24 17:58:30',
        campaignId: '1736509705440296',
        campaignModifyTime: '2022-06-24 17:58:29',
        campaignName: 'pre-商品-062401_175829',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'DPA', value: '产品目录' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163648',

        productId: '1',
        productName: '测试组',
        status: '暂停'
    },
    {
        accountName: 'SDPA-商品,勿动',
        appId: '1177',
        appName: '测试项目1',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36769',
        campaignCreateTime: '2022-06-24 17:57:54',
        campaignId: '1736509671165044',
        campaignModifyTime: '2022-06-24 17:57:54',
        campaignName: 'pre-商品-062401',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'DPA', value: '产品目录' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163648',

        productId: '1',
        productName: '测试组',
        status: '暂停'
    },
    {
        accountName: 'SDPA-商品,勿动',

        appId: '1177',
        appName: '测试项目1',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36771',
        campaignCreateTime: '2022-06-24 17:31:04',
        campaignId: '1736507982115860',
        campaignModifyTime: '2022-06-24 17:31:03',
        campaignName: 'pre-销售线索-062401',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'LINK', value: '销售线索收集' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163648',

        productId: '1',
        productName: '测试组',
        status: '暂停'
    },
    {
        accountName: '上海龙游网络123',
        appId: '1196',
        appName: '新测试',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36768',
        campaignCreateTime: '2022-06-24 16:48:04',
        campaignId: '1736505277266957',
        campaignModifyTime: '2022-06-24 16:48:04',
        campaignName: 'pre-ios-转化跟踪-模板-02',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'APP', value: '应用推广' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '163632',

        productId: '2',
        productName: '猛哥的产品',
        status: '暂停'
    },
    {
        accountName: '824 （美团有钱）',

        appId: '-',
        appName: '-',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36765',
        campaignCreateTime: '2022-06-24 15:48:20',
        campaignId: '1736501507604531',
        campaignModifyTime: '2022-06-24 15:48:19',
        campaignName: 'pre-销售线索-模板-0213b8',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'LINK', value: '销售线索收集' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '20016800',

        productId: '-',
        productName: '-',
        status: '暂停'
    },
    {
        accountName: '823（美团有钱）',
        appId: '-',
        appName: '-',
        budget: '0.0',
        budgetMode: { code: 'BUDGET_MODE_INFINITE', key: 1, value: '不限' },
        camId: '36767',
        campaignCreateTime: '2022-06-24 15:48:19',
        campaignId: '1736501513566238',
        campaignModifyTime: '2022-06-24 15:48:19',
        campaignName: 'pre-销售线索-模板-02',
        groupId: '1152',
        groupName: '测试组账号组',
        landingType: { code: 'LINK', value: '销售线索收集' },
        media: { code: 'toutiao', value: '头条' },
        mediaAccountId: '20016795',

        status: '暂停'
    }
]
