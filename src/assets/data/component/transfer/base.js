export default {
    id: 'basic',
    title: '基础穿梭框',
    content: `<template>
    <main>
      <rd-transfer
        :data="data"
        :render-format="render1"
        @on-keys-change="selectedKeys=$event"
        @on-data-change="selectedData=$event"
      ></rd-transfer>
    </main>
  </template>
  <script>
  export default {
    data() {
      return {
        selectedKeys: [],
        selectedData: [],
        data: [
          {
            title: "title 1",
            data: [
              {
                key: "1",
                label: "北京 1"
              },
              {
                key: "2",
                label: "北京 2"
              },
              {
                key: "3",
                label: "北京 3"
              },
              {
                key: "4",
                label: "北京 4"
              },
              {
                key: "5",
                label: "北京 5"
              },
              {
                key: "6",
                label: "北京 6"
              }
            ]
          },
          {
            title: "title 2",
            data: [
              {
                key: "7",
                label: "上海 1",
              },
              {
                key: "8",
                label: "上海 2",
              },
              {
                key: "9",
                label: "上海 3" 
              },
              {
                key: "10",
                label: "上海 4"
              },
              {
                key: "11",
                label: "上海 5"
              }
            ]
          },
          {
            title: "title 3",
            data: [
              {
                key: "12",
                label: "深圳 1",
              },
              {
                key: "13",
                label: "深圳 2"
              },
              {
                key: "14",
                label: "深圳 3" 
              },
              {
                key: "15",
                label: "深圳 4"
              },
              {
                key: "16",
                label: "深圳 5"
              }
            ]
          }
        ]
      };
    },
    methods:{
        render1 (item) {
            return item.label
        }
    }
  };
  </script>
  `,
    desc: '基本用法，展示了 <code> data </code>、每行的渲染函数 <code> render-format </code> 以及回调函数 <code> on-keys-change </code>、<code> on-data-change </code> 的用法。'
}
