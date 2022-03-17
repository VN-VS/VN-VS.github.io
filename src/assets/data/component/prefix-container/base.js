export default {
    id: 'basic',
    title: '基础用法',
    content: `<template>
  <main>
    <rd-prefix-container>
      <span slot="prepend">前缀</span>
      <Select
        class="prefix-container-basic-select"
        v-model="accountIds"
        filterable
        multiple
        style="width: 400px"
        :max-tag-count="2"
        placeholder="请搜索或选择媒体账号"
      >
        <OptionGroup
          v-for="item in accountList"
          :key="item.label"
          :label="item.label"
        >
          <Option
            v-for="(el,index) in item.children"
            :disabled="item.disabled"
            :key="index"
            :value="el.accountId"
            >{{ el.name }}</Option
          >
        </OptionGroup>
      </Select>
      <span slot="append">后缀</span>
    </rd-prefix-container>

    <rd-prefix-container style='margin-top:16px'>
      <Select v-model="select1" slot="prepend" style="width: 80px">
        <Option value="http">http://</Option>
        <Option value="https">https://</Option>
      </Select>
      <InputNumber :max="10" :min="1" v-model="value1" class='prefix-container-basic-number'></InputNumber>
      <Button slot="append" icon="ios-search"></Button>
    </rd-prefix-container>
  </main>
</template>
<script>
export default {
  data() {
    return {
      value1:1,
      select1: 'http',
      accountIds:[],
      accountList: [
        {
          label: "西瓜科技有限公司",
          disabled: false,
          children: [
            {
              accountId: "a-1",
              name: "账户a-1",
            },
            {
              accountId: "a-2",
              name: "账户a-2",
            }
          ]
        },
        {
          label: "芒果科技有限公司",
          disabled: false,
          children: [
            {
              accountId: "b-1",
              name: "账户a-1",
            },
            {
              accountId: "b-2",
              name: "账户a-2",
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
  .prefix-container-basic-select .ivu-select-selection {
    border-radius: 0;
  }
  .prefix-container-basic-number{
    border-radius: 0;
  }
</style>`,
    desc: '通过前置<code> prepend </code>和后置<code> append </code>的 slot 可以实现复合型的组件。'
}