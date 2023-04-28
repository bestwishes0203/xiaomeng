const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = '小梦——推动和发展有限资源的可持续化利用'
                return args
            })
    }
}