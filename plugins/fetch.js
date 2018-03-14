import Vue from 'vue';
import axios from 'axios';
import consts from '~/utils/consts'
import qs from 'qs';

axios.defaults.timeout = 90000;
axios.defaults.withCredentials = true;

const fetch = {
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
	}
};

Vue.use({
	install: function (Vue) {
		Vue.prototype.$fetch = fetch;
	}
});
