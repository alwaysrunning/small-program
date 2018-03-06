import ServiceBase from 'utils/ServiceBase'
import WxService from 'utils/WxService'
import Tools from 'utils/Tools'
import Config from 'config/config'

App({
	onLaunch() {
	},
	onShow() {
		console.log('onShow')
	},
	onHide() {
		console.log('onHide')
	},
	getUserInfo() {
		return this.wx.login()
		.then(data => {
			console.log(data)
			return this.wx.getUserInfo()
		})
		.then(data => {
			console.log(data,888)
			this.globalData.userInfo = data.userInfo
			return this.globalData.userInfo
		})
	},
	renderImage(path) {
        if (!path) return ''
        if (path.indexOf('http') !== -1) return path
        return `${this.Config.fileBasePath}${path}`
    },
	ajax: new ServiceBase, 
	wx: new WxService,  // wxAPI
	Tools: new Tools, 
	Config: Config,
	globalData: {
		userInfo: null,
		urls:{
			get  : '/config/get-value'
		}
	},
})

