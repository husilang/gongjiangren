import Vue from 'vue';
import axios from 'axios';
import consts from '~/utils/consts'
import qs from 'qs';

export default ({app, store, router}) => {
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
	});
	axios.interceptors.response.use(response => {
		/*if (response.status !== 200) {
			return Promise.reject(response);
		}*/
		if (response.data.code == 1 && store.getters.firmUser.token) {
			store.dispatch('firmLogout').then(() => {
				router.push('/firm/login')
			});
		}
		console.log(response);
		return response;
	}, err => {
		/*let { status, data: { message }, config: { url } } = error.response;
		if (url.indexOf(store.state.config.logoutURL) > -1) {
			store.dispatch(TOKEN_LOGOUT, true);
		} else {
			if (!message) {
				switch (status) {
					case 401:
						message = '您没有权限访问此操作！';
						break;
					case 403:
						message = '您的登录状态已失效，请重新登录。';
						break;
					default:
						message = '请求失败！';
				}
			}
			store.dispatch(LOADING_RESET);
			notification({
				message, type: 'error', onClose: () => {
					if (status === 401 || status === 403) {
						store.dispatch(TOKEN_LOGOUT);
					}
				}
			});
			return Promise.reject(error);
		}*/
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
