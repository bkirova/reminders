import initMock from '../../mock/init.json'

export default {
    namespaced: true,
    state: { 
        current: []
    },
    mutations: { 
        updateCurrentData (state, items) {
            state.current = items;
        },
    },
    actions: {  
        pull ({commit, state}) {
            return new Promise((resolve, reject) => {
               
                commit('updateCurrentData', initMock.result.integrations); // TODO update with reponse
                
                resolve();
            })
        },
    },
    getters: {  }
  }

