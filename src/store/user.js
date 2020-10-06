import axios from 'axios'

export default {
    namespaced: true,
    state: {
      lists:[],
      user:{},
    },
    getters: {
      lists(state) {
        return state.lists
      }
    },

    mutations: {
      SET_LIST(state, lists) {
        state.lists = lists;
      }
    },

    actions: {
        async getUsers ({ dispatch, commit }, searchs) {
            await axios.get('/api/users', searchs).then(response => {
              console.log(dispatch)
              console.log(response)
            });
            commit('SET_LIST', searchs);
        }
    }
}
