
module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'example.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: '../lib/index.js',
        options: {
          unitWidth: 750,   // 设计稿的宽度
          baseDpr: 2,       // 默认的dpr
          vwPrecision: 3,   // 转换成vw后保留的小数位
          forcePxComment: 'px',  //使用/*px*/ 标注
          keepComment: 'no'   // 使用 /*no*/ 标注该css属性不需要转换为vw
        }
      }]
    }]
  }
}