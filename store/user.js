import axios from 'axios'
export default {
	state: {
		firmUser: null,
		clientUser: null,
		proUser: null
	},
	getters: {
		firmUser: state => state.firmUser,
		clientUser: state => state.clientUser,
		proUser: state => state.proUser
	},
	mutations: {
		SET_FIRMUSER: (state, user) => {
			state.firmUser = user;
		}
	},
	actions: {
		nuxtServerInit({commit}, {req}) {
			if (req.session && req.session.firmUser) {
				commit('SET_FIRMUSER', req.session.firmUser)
			}
		},
		async firmLogin({commit}, {authStatus, id, loginName, token}) {
			try {
				const {data} = await axios.post('/api/login', {authStatus, id, loginName, token})
				commit('SET_FIRMUSER', data)
			} catch (error) {
				if (error.response && error.response.status === 401) {
					throw new Error('bad error')
				}
				throw error
			}
		},
		async logout({commit}) {
			await axios.post('/api/logout')
			commit('SET_USER', null)
		}
	}
}