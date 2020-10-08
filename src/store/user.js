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
              var status = response.status;
              var errors = response.data.errors;

              if (status == 200) {
                commit('SET_LIST', response.data.results.user);
              }
            });
        }
    }
}
