export default {
  id: 'search',
  title: '搜索',
  content: `<template>
  <main>
    <rd-transfer
      :data="data"
      filterable
      :render-format="render1"
      :filter-method="filterMethod"
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
      },
      filterMethod (data, query) {
          return data.label.indexOf(query) > -1;
      }
  }
};
</script>
`,
  desc: '通过设置属性 <code> filterable </code> 可以进行搜索，可以自定义搜索函数。',
}