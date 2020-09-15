const px2vw = require("postcss-px-to-viewport")
module.exports = {
  devServer:{
    proxy:{  //配置代理
      '/api':{ 
        target:" http://localhost:3000/", 
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      },
      '/home':{ 
        target:" https://m.kaola.com/", 
        changeOrigin:true
      },
    }
   },
css: {
    loaderOptions: {
        postcss: {
          plugins:[new px2vw({
            unitToConvert: 'px',
            viewportWidth: 375, //视口宽
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /node_modules/, //这个文件的单位不需要转换
            include: undefined,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568
          })]
        }
    }
  }
}