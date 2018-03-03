const App = getApp();
const apiUrl = App.globalData.urls;

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
        App.ajax.getRequest(apiUrl.get, {key:'mallName'})
        .then(res=>{
            console.log(res,333333)
        })
        .catch(err=>{
            console.log(err,222)
        })
        
    },
    onShow() {
        
    },
    bindViewTap: function() {
        wx.redirectTo({
            url: '../h5/index'
        })
        return
        App.wx.openLocation({
            latitude: 22,
            longitude: 111,
            name:'蛤哈点餐',
            address: '蛤哈点餐地址',
            scale: 28
        })
    }


})



