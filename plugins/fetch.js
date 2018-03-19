import Vue from 'vue';
import axios from 'axios';
import consts from '~/utils/consts'
import qs from 'qs';

export default ({app, store}) => {
	axios.defaults.timeout = 90000;
	axios.defaults.withCredentials = true;
	axios.interceptors.request.use(config => {
		if (store.getters.firmUser) {
			config.headers['authorization'] = store.getters.firmUser.token;
		} else if (store.getters.clientUser) {
			config.headers['authorization'] = store.getters.clientUser.token;
		} else if (store.getters.proUser) {
			config.headers['authorization'] = store.getters.proUser.token;
		}
		return config
	}, err => {
		console.log('in requeset err');
		return Promise.reject(err)
	})

}
export const fetch = {
	get: (url, data = {}) => {
		return new Promise((resolve, reject) => {
			axios.get(consts.API_URL+url, {params: data}).then(response => {
				resolve(response.data);
			}).catch(error => {
				throw new Error(error);
			})
		}).catch(error => {
			throw new Error(error);
		})
	},
	post: (url, data={}) => {
		return new Promise((resolve, reject) => {
			axios.post(consts.API_URL+url, data, {
				headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
				withCredentials: true,
				transformRequest: [data => {
					return qs.stringify(data);
				}]
			}).then(response => {
				resolve(response.data);
			}).catch(error => {
				throw new Error(error);
			});
		}).catch(error => {
			throw new Error(error);
		});
	},
	postJson: (url, data = {}) => {
		return new Promise((resolve, reject) => {
			axios.post(consts.API_URL+url, data, {
				headers: {'Content-Type': 'application/json'},
				withCredentials: true
			}).then(response => {
				resolve(response.data);
			}).catch(error => {
				throw new Error(error);
			});
		}).catch(error => {
			throw new Error(error);
		});
	},

	// 企业权限请求
	getFirm: (url, data = {}) => {
		return new Promise((resolve, reject) => {
			axios.get(consts.API_URL+url, {params: data}, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
				},
				withCredentials: true
			}).then(response => {
				resolve(response.data);
			}).catch(error => {
				throw new Error(error);
			})
		}).catch(error => {
			throw new Error(error);
		})
	},
	postFirm: (url, data={}) => {
		return new Promise((resolve, reject) => {
			axios.post(consts.API_URL+url, data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
				},
				withCredentials: true,
				transformRequest: [data => {
					return qs.stringify(data);
				}]
			}).then(response => {
				resolve(response.data);
			}).catch(error => {
				throw new Error(error);
			});
		}).catch(error => {
			throw new Error(error);
		});
	},
	postFirmJson: (url, data = {}) => {
		return new Promise((resolve, reject) => {
			axios.post(consts.API_URL+url, data, {
				headers: {
					'Content-Type': 'application/json'
				},
				withCredentials: true
			}).then(response => {
				resolve(response.data);
			}).catch(error => {
				throw new Error(error);
			});
		}).catch(error => {
			throw new Error(error);
		});
	},
	// 人才权限请求
};

Vue.use({
	install: function (Vue) {
		Vue.prototype.$fetch = fetch;
	}
});
