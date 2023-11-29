/*
 * @Author: 杨玉峰 yangyufeng@reyun.com
 * @Date: 2022-06-08 14:48:24
 * @LastEditors: 杨玉峰 yangyufeng@reyun.com
 * @LastEditTime: 2022-06-08 15:04:13
 * @FilePath: /ry-design-web/build/vuetext-loader.js
 * @Description: 自定义laoder .vuetext 文件
 */
module.exports = function (source) {
    const data = {
        content: source,
        filename: this.resourcePath
    }
    return `export default ${JSON.stringify(data)}`
}
