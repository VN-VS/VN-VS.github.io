export default {
    id: 'basic-transfer',
    title: '基础穿梭框',
    content: `<template>
    <main>
      <ry-transfer
        :data="data"
        filterable
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
                label: "a" + 1
              },
              {
                key: "2",
                label: "a" + 2
              },
              {
                key: "3",
                label: "a" + 3
              },
              {
                key: "4",
                // label: "a" + 4,
                description: "a的描述  " + 4,
              },
              {
                key: "5",
                label: "a" + 5
              },
              {
                key: "6",
                label: "a" + 6
              }
            ]
          },
          {
            title: "我是b",
            data: [
              {
                key: "7",
                label: "b" + 7
              },
              {
                key: "8",
                label: "b" + 8
              },
              {
                key: "100",
                label: "b" + 100
              },
              {
                key: "200",
                label: "b" + 200
              }
            ]
          }
        ]
      };
    }
  };
  </script>
  `,
    desc: '基本用法，展示了 data、on-keys-change、on-data-change 的用法。',
  }