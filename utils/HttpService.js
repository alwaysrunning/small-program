import ServiceBase from 'ServiceBase'

class Service extends ServiceBase {
	constructor() {
		super()
		this.path = {
			search  : '/config/get-value',
        }
	}

	search(params) {
		return this.getRequest(this.path.search, params)
	}


	wechatSignUp(params) {
		return this.postRequest(this.path.wechatSignUp, params)
	}

	
	setDefalutAddress(id) {
		return this.postRequest(`${this.path.address}/default/${id}`)
	}


}

export default Service