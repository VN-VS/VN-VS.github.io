export default {
    id: 'basic',
    title: '基础穿梭框',
    content: `<template>
    <main>
      <ry-transfer
        :data="data"
        :render-format="render1"
        @on-keys-change="selectedKeys=$event"
        @on-data-change="selectedData=$event"
      ></ry-transfer>
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
                label: "北京 1",
                disabled:true
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
                disabled:true
              },
              {
                key: "8",
                label: "上海 2",
                disabled:true
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
                key: "5",
                label: "上海 5"
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
    desc: '基本用法，展示了 <code> data </code>、每行的渲染函数 <code> render-format </code> 以及回调函数 <code> on-keys-change </code>、<code> on-data-change </code> 的用法。',
  }