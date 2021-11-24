export default {
  id: 'movement',
  title: '禁止移动',
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
              title: "title 1",
              data: [
                {
                  key: "1",
                  label: "北京 1 禁止右移",
                  noMove: "right"
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
                  label: "上海 1 禁止左移",
                  noMove: "left"
                },
                {
                  key: "8",
                  label: "上海 2 禁止右移",
                  noMove: "right"
                },
                {
                  key: "9",
                  label: "上海 3",
                  noMove: "right"
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
                  label: "深圳 1 禁止左移",
                  noMove: "left"
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
  desc: '通过设置 <code> noMove：left </code> 控制禁止左移动，<code> noMove：right </code> 控制右移。',
}