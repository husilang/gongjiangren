import axios from 'axios'
import consts from '~/utils/consts'
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
	  CLEAR_USER:(state) => {
	    state.firmUser = null;
	    state.clientUser = null;
	    state.proUser = null;
    },
		SET_FIRMUSER: (state, user) => {
			state.firmUser = user;
		},
    SET_CLIENTUSER: (state, user) => {
      state.clientUser = user;
    }
	},
	actions: {
		nuxtServerInit({commit}, {req}) {
		  commit('CLEAR_USER');
      if (req.session && req.session.firmUser) {
				commit('SET_FIRMUSER', req.session.firmUser)
			} else if (req.session && req.session.clientUser){
        commit('SET_CLIENTUSER', req.session.clientUser)
      }
		},
		async firmLogin({commit}, {authStatus, id, loginName, token}) {
			try {
				const {data} = await axios.post(consts.HOST_URL+'/api/login', {authStatus, id, loginName, token})
				commit('SET_FIRMUSER', data)
			} catch (error) {
				if (error.response && error.response.status === 401) {
					throw new Error('bad error')
				}
				throw error
			}
		},
		async firmLogout({commit}) {
			await axios.post(consts.HOST_URL+'/api/logout')
			commit('SET_FIRMUSER', null);
		},
    async clientLogin({commit}, {authStatus, id, loginName, token}){
      try {
        const {data} = await axios.post(consts.HOST_URL+'/api/client/login', {authStatus, id, loginName, token})
        commit('SET_CLIENTUSER', data)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('bad error')
        }
        throw error
      }
    },
    async clientLogout({commit}) {
		  await axios.post(consts.HOST_URL+'/api/logout')
      commit('SET_CLIENTUSER', null)
    }
	}
}
