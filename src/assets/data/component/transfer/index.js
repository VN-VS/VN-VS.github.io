import basic from './base.js'
import search from './search.js'
import format from './render-format.js'
import operations from './operations.js'
import multistage from './multistage.js'
import movement from './no-movement.js'
import api from './api.js'
export default {
  title: 'Transfer 多级穿梭框',
  summary: {
    name: '概述',
    info: ['多栏穿梭选择框，常用于将多个项目从一边移动到另一边。']
  },
  example: [
    basic,
    search,
    format,
    operations,
    multistage,
    movement,
  ],
  api
}