import integrationsMock from '../../mock/integrations.json'

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
               
                commit('updateCurrentData', integrationsMock.result.integrations); // TODO update with reponse
                
                resolve();
            })
        },
    },
    getters: {  }
  }

