export default {
  id: 'multistage',
  title: '多级穿梭框',
  content: `<template>
        <main>
          <rd-transfer
            :data="data"
            filterable
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
                  },
                  {
                    key: "2",
                    label: "北京 2",
                  },
                  {
                    key: "3",
                    label: "北京 3",
                  },
                  {
                    key: "4",
                    label: "北京 4",
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
                    label: "上海 2"
                  },
                  {
                    key: "9",
                    label: "上海 3"
                  },
                  {
                    key: "10",
                    label: "上海 4"
                  }
                ]
              },
              {
                title: "title 3",
                data: [
                  {
                    key: "9",
                    label: "深圳 1"
                  },
                  {
                    key: "10",
                    label: "深圳 2"
                  }
                ]
              }
            ]
          };
        }
      };
      </script>
      `,
  desc: '根据 <code> data </code> 长度渲染穿梭框数量，长度不限。',
}