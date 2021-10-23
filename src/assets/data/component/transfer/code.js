import transferDisabled from './transfer-disabled.js'
export default [{
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
              label: "a" + 4,
              description: "a的描述  " + 4,
              disabled: true
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
},
transferDisabled
,
{
  id: 'basic-transfer',
  title: '多级',
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
                  label: "a" + 1,
                  description: "a的描述a的描述a的描述a的描述  " + 1,
                  disabled: false
                },
                {
                  key: "2",
                  label: "a" + 2,
                  description: "a的描述  " + 2,
                  disabled: true
                },
                {
                  key: "3",
                  label: "a" + 3,
                  description: "a的描述  " + 3,
                  disabled: false
                },
                {
                  key: "4",
                  label: "a" + 4,
                  description: "a的描述  " + 4,
                  disabled: true
                },
                {
                  key: "5",
                  label: "a" + 5,
                  description: "a的描述  " + 5,
                  disabled: false
                },
                {
                  key: "6",
                  label: "a" + 6,
                  description: "a的描述  " + 6,
                  disabled: false
                }
              ]
            },
            {
              title: "我是b",
              data: [
                {
                  key: "7",
                  label: "b" + 7,
                  description: "b的描述  " + 7,
                  disabled: false,
                  noMove: "left"
                },
                {
                  key: "8",
                  label: "b" + 8,
                  description: "b的描述  " + 8,
                  disabled: false,
                  noMove: "right"
                },
                {
                  key: "100",
                  label: "b" + 100,
                  description: "b的描述  " + 100,
                  disabled: false,
                  noMove: ""
                },
                {
                  key: "200",
                  label: "b" + 200,
                  description: "b的描述  " + 200,
                  disabled: false
                }
              ]
            },
            {
              title: "我是c",
              data: [
                {
                  key: "9",
                  label: "c" + 9,
                  description: "c的描述  " + 9,
                  disabled: false,
                  noMove: "left"
                },
                {
                  key: "10",
                  label: "c" + 10,
                  description: "c的描述  " + 10,
                  disabled: false
                }
              ]
            }
          ]
        };
      }
    };
    </script>
    `,
  desc: '根据data长度渲染穿梭框数量，长度不限',
}
]