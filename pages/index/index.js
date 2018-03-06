/****  for example  ****/

/*向服务端请求
App.ajax.getRequest('/banner/list',{
    key: 'mallName'
}).then(res=>{
    self.setData({
        banners: res.data
    })
}).catch(err=>{
    console.log(err,222)
})
*/


/*
调用微信接口
App.wx.login().then(res=>{
    console.log(res,888)
})
*/

const App = getApp()

Page({
    data: {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        banners:[
            {
                "picUrl": "/assets/images/start/banner2.jpg"
            },
            {
                "picUrl": "/assets/images/start/banner3.jpg"
            },
            {
                "picUrl": "/assets/images/start/banner1.jpg"
            }
        ],
        units:[],
        mode:"aspectFit"
    },
    onLoad() {
        let self = this;
        App.ajax.getRequest('/banner/list',{
            key: 'mallName'
        }).then(res=>{
            self.setData({
                units: res.data
            })
        }).catch(err=>{
            console.log(err,222)
        })
        App.getUserInfo().then(rs=>{
            console.log(rs,1111)
        })
    },

    onShow() {},

     //事件处理函数
    swiperchange(e) {
        //console.log(e.detail.current)
        this.setData({  
            swiperCurrent: e.detail.current  
        })  
    },

    onPullDownRefresh() {
        console.log(1111)
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log(22222)
    }


})



