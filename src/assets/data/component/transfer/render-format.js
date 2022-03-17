export default {
  id: 'format',
  title: '自定义渲染行数据',
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
                label: "北京 1",
                description: 'The desc of content 1',
                disabled:true
              },
              {
                key: "2",
                label: "北京 2",
                description: 'The desc of content 2'
              },
              {
                key: "3",
                label: "北京 3",
                description: 'The desc of content 3'
              },
              {
                key: "4",
                label: "北京 4",
                description: 'The desc of content 4'
              },
              {
                key: "5",
                label: "北京 5",
                description: 'The desc of content 5'
              },
              {
                key: "6",
                label: "北京 6",
                description: 'The desc of content 6'
              }
            ]
          },
          {
            title: "title 2",
            data: [
              {
                key: "7",
                label: "上海 1",
                description: 'The desc of content 1',
                disabled:true
              },
              {
                key: "8",
                label: "上海 2",
                description: 'The desc of content 2',
                disabled:true
              },
              {
                key: "9",
                label: "上海 3" ,
                description: 'The desc of content 3'
              },
              {
                key: "10",
                label: "上海 4",
                description: 'The desc of content 4'
              },
              {
                key: "5",
                label: "上海 5",
                description: 'The desc of content 5'
              }
            ]
          }
        ]
      };
    },
    methods:{
        render1 (item) {
          return item.label + ' - ' + item.description;
        }
    }
  };
  </script>
  `,
  desc: '可以通过 <code> render-format </code> 来渲染复杂的数据。',
}