/****  for example  ****/

/*向服务端请求
App.HttpService.search().then(res=>{
        console.log(res,333333)
    }).catch(err=>{
        console.log(err,222)
})
*/


/*
调用微信接口
App.WxService.openLocation({
    latitude: lat,
    longitude: lon,
    name:'蛤哈点餐',
    address: '蛤哈点餐地址',
    scale: 28
}).then(data=>{
    console.log(data,5555)
})
*/

const App = getApp()

Page({
    data: {
        globalData: "",
        autoplay: !1,
        current: 0,
        interval: 3000,
        duration: 1000,
        circular: !1,
    },
    onLoad() {
        App.Ajax.search().then(res=>{
            console.log(res,333333)
        }).catch(err=>{
            console.log(err,222)
        })
    },
    onShow() {},
    EventHandler: function(e) {
        alert(e)
    }
      


})



