---
sidebar: auto
type: guide
---

# Enum 枚举类

## 介绍

欢迎阅读Enum使用指南，了解如何创建枚举类，操作枚举类。目前ADS项目中使用的Enum来源于为前端基座(main-app)，无需重复引入。

## 开始

### 前置条件

::: tip
如果在js文件中使用枚举类，先进行下面代码的声明。
:::

```js
const { Enum } = adsLibs
```

### 创建Enum

```js
// 其中[ALL ACCOUNT]为别名，可根据具体使用场景进行语义化定义，[label value]为固定属性
const CONFIG_TYPE = new Enum({
  ALL: { label: '按分配规则', value: 'all' },
  ACCOUNT: { label: '按账户', value: 'account'}
})
```

## 函数

### getEnum

获取单个枚举项

#### `语法`

getEnum(key)

#### `参数`

key (string) 别名

#### `返回值`

(object) 返回指定别名的枚举项

#### `例子：`
```js
const CONFIG_TYPE = new Enum({
  ALL: { label: '按分配规则', value: 'all' },
  ACCOUNT: { label: '按账户', value: 'account'}
})

// 获取
CONFIG_TYPE.getEnum('ALL')

// 输出
// { label: '按分配规则', value: 'all' }

```

### getEnums

获取所有枚举项集合

#### `语法`

getEnums()

getEnums(keys)

#### `参数`

keys (array) 别名数组

#### `返回值`

(array) 返回所有枚举项集合

#### `例子：`
```js
const CONFIG_TYPE = new Enum({
  ALL: { label: '按分配规则', value: 'all' },
  ACCOUNT: { label: '按账户', value: 'account'}
})

// 获取1
CONFIG_TYPE.getEnums()

// 获取2
CONFIG_TYPE.getEnums(['ALL','ACCOUNT'])

// 输出
// [{ label: '按分配规则', value: 'all' },{ label: '按账户', value: 'account'}]

```

### getEnumByValue

通过`值`获取枚举项

#### `语法`

getEnumByValue(value)

#### `参数`

value (string) 值

#### `返回值`

(object) 返回指定枚举项

#### `例子：`
```js
const CONFIG_TYPE = new Enum({
  ALL: { label: '按分配规则', value: 'all' },
  ACCOUNT: { label: '按账户', value: 'account'}
})

// 获取
CONFIG_TYPE.getEnumByValue('all')

// 输出
// { label: '按分配规则', value: 'all' }

```

### getEnumAlias

通过`值`获取别名

#### `语法`

getEnumAlias(value)

#### `参数`

value (string) 值

#### `返回值`

(string) 返回指定别名

#### `例子：`
```js
const CONFIG_TYPE = new Enum({
  ALL: { label: '按分配规则', value: 'all' },
  ACCOUNT: { label: '按账户', value: 'account'}
})

// 获取
CONFIG_TYPE.getEnumAlias('all')

// 输出
// ALL

```

### getEnumsByExclude

通过`别名`反向获取枚举项

#### `语法`

getEnumsByExclude(keys)

#### `参数`

keys (array) 别名

#### `返回值`

(array) 返回枚举项集合

#### `例子：`
```js
const CONFIG_TYPE = new Enum({
  ALL: { label: '按分配规则', value: 'all' },
  ACCOUNT: { label: '按账户', value: 'account'}
})

// 获取
CONFIG_TYPE.getEnumsByExclude(['ALL'])

// 输出
// [{ label: '按账户', value: 'account'}]

```

### getEnumLabels

通过别名反向获取举项

#### `语法`

getEnumLabels(keys)

#### `参数`

keys (array) 别名

#### `返回值`

(array) 返回枚举名称数组

#### `例子：`
```js
const CONFIG_TYPE = new Enum({
  ALL: { label: '按分配规则', value: 'all' },
  ACCOUNT: { label: '按账户', value: 'account'}
})

// 获取
CONFIG_TYPE.getEnumLabels(['ALL','ACCOUNT'])

// 输出
// ['按分配规则','按账户']

```

## 快捷用法

### 获取指定枚举项

#### `例子：`
```js
const CONFIG_TYPE = new Enum({
  ALL: { label: '按分配规则', value: 'all' },
  ACCOUNT: { label: '按账户', value: 'account'}
})

// 获取
CONFIG_TYPE.ALL

// 输出
// { label: '按分配规则', value: 'all' }

```
