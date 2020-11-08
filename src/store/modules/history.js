import historyMock from '../../mock/history.json'

export default {
    namespaced: true,
    state: { 
        items: []
    },
    mutations: { 
        updateItems (state, items) {
            state.items = items;
        },
    },
    actions: {  
        pull ({commit, state}) {
            return new Promise((resolve, reject) => {
               
                commit('updateItems', historyMock.result.items); // TODO update with reponse
                
                resolve();
            })
        },
    },
    getters: {  }
  }

