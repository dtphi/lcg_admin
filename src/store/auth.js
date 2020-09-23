import axios from 'axios'

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.authenticated
        },

        user(state) {
            return state.user
        },
    },

    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },

        SET_USER(state, value) {
            state.user = value
        }
    },

    actions: {
        async signIn ({ dispatch }, credentials) {
          await axios.post('api/login', credentials).then((response) => {
            if (response.data.code == 200) {
                dispatch('me', response.data);
            } else {
                dispatch('meOut');
            }
          }).catch(()=>{
            dispatch('meOut');
          });
        },

        async signOut ({ dispatch }) {
          //await axios.post('/logout')

          return dispatch('meOut');
        },

        me ({ commit }, data) {
            commit('SET_AUTHENTICATED', true)
            commit('SET_USER', data.results)
        },

        meOut({ commit }) {
            commit('SET_AUTHENTICATED', false)
            commit('SET_USER', null)
        }
    }
}
