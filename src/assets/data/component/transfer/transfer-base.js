export default {
    id: 'basic-transfer',
    title: '基础穿梭框',
    content: `<template>
    <main>
      <ry-transfer
        :data="data"
        filterable
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
            title: "我是a",
            data: [
              {
                key: "1",
                label: "a1"
              },
              {
                key: "2",
                label: "a2"
              },
              {
                key: "3",
                label: "a3"
              },
              {
                key: "4",
                label: "a4"
              },
              {
                key: "5",
                label: "a5"
              },
              {
                key: "6",
                label: "a6"
              }
            ]
          },
          {
            title: "我是b",
            data: [
              {
                key: "7",
                label: "b1" 
              },
              {
                key: "8",
                label: "b2" 
              },
              {
                key: "9",
                label: "b3" 
              },
              {
                key: "10",
                label: "b4"
              },
              {
                key: "5",
                label: "b5"
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