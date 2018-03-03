# 微信小程序

## 项目说明：

微信小程序：实现一个移动端点餐系统

使用技术： **ES6**


## 目录结构：

```
m-mall/
  |-assets/
     |- images/
     |- plugins/
     |- styles/
     |- ...
  |-config/
     |- config.js
     |- ...
  |-utils/
     |- HttpService.js
     |- ServiceBase.js
     |- Tools.js
     |- WxService.js
     |- ...
  |-pages/
      |- start
        |- index.js
        |- index.json
        |- index.wxml
        |- index.wxss
      |- ...
  |-app.js
  |-app.json
  |-app.wxss
  |-...
```

- assets — 存放静态文件，例如：images、styles、plugins
- config — 存放配置文件，例如：config.js
- utils — 存放帮助文件，例如：Promise 微信原生API、Promise wx.request、tools
- pages — 存放项目页面相关文件
- app.js — 小程序逻辑
- app.json — 小程序公共设置
- app.wxss — 小程序公共样式表



## 微信原生API

```js
var App = getApp()
App.wx.openLocation({
    latitude: 22,
    longitude: 111,
    name:'',
    address: '',
    scale: 28
})
```

## Promise wx.request 
##接口请求 getRequest， postRequest(用promise,改成链式写法)

```js
var App = getApp()
App.ajax.getRequest(url, params, header, dataType)
    .then(res=>{
        //console.log(res,333333)
    })
    .catch(err=>{
        console.log(err,222)
    })
```



##	贡献

有任何意见或建议都欢迎提 issue

##	License

MIT