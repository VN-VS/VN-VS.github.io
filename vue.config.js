const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'production' ? './dist' : '/',
    //publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/',
    outputDir: 'dist',
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    },
    // 配置一些loader
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.vuetext$/,
            use: {
                loader: resolve('./build/vuetext-loader.js'),
                options: {
                    name: 'vuetext-loader'
                }
            }
        })
    }
}
