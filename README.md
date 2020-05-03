# px2vw-css-loader
将px单位转为 vw单位。

## 如何使用
```bash
  npm install px2vw-css-loader
```

配置 `webpack`:
```javascript
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
        loader: 'px2vw-css-loader',
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
```

## 详细信息

- [px2vw-css](https://github.com/Chechengyi/px2vw-css)