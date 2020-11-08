import feedMock from '../../mock/feed.json'

function generateRandomNotification() {
    let types = ['chat', 'gitlab', 'jira'];
    let id = parseInt(Math.random() * (100 - 0) + 0);
    
    return {
        'id': id,
        'type': types[parseInt(Math.random() * (types.length - 0) + 0)],
        'title': null,
        'text': 'Random notification ' + id,
        'href': 'https://vuetifyjs.com/components/api-explorer',
        'priority': 'low',
        'date': '1 days ago',
        'dateNext': '',
        'isResolved': false,
        'isSnoosed': false,
        'isSnooseExpired': false
    }
}

export default {
    namespaced: true,
    state: { 
        feed: [],
        current: []
    },
    mutations: { 
        updateFeedData (state, items) {
            state.feed = items;
        },
        //DEBUG
        updateFeedItem (state, item) {
            let items = state.feed;
            let index = items.findIndex((i => i.id == item.id));
            if(index>-1) {
                items[index] = item;
                state.feed = [...items];
            } else {
                state.feed = [...state.feed, item];
            }
        },
        updateCurrentItem (state, item) {
            let items = state.current;
            let index = items.findIndex((i => i.id == item.id));
            if(index>-1) {
                items[index] = item;
                state.current = [...items];
            } else {
                state.current = [item, ...state.current];
            }
        },
        resolveCurrentItem (state, id) {
            let filteredItems = state.current.filter(i => i.id!==id);
            state.current = [...filteredItems];
        },
        snooseCurrentItem (state, id) {
            let filteredItems = state.current.filter(i => i.id!==id);
            state.current = [...filteredItems];
        },
        unSnooseCurrentItem (state, id) {
            let item = state.feed.find(i => i.id===id);
            item.isSnooseExpired = true;// TODO
            if(item) {
                state.current = [item, ...state.current];
            }
        }
    },
    actions: {  
        pull ({commit, state}) {
            return new Promise((resolve, reject) => {
                // DEBUG START
                let items = state.feed.filter(feedI => !feedI.isResolved);
                let chance = Math.random();
                if(state.feed.length===0) {
                    items = feedMock.result.notifications;
                }

                if(chance>0.9) {
                    let generatedItem = generateRandomNotification();
                    let itemExist = items.find(i => i.id===generatedItem.id);
                    if(!itemExist) items.push(generatedItem);
                }
                // DEBUG END

                commit('updateFeedData', items); // TODO update with reponse

                for(let item of items) {
                    if(!item.isSnoosed) {
                        commit('updateCurrentItem', item);
                    }
                }
                
                resolve();
            })
        },
        resolve ({commit, state}, {id}) {
            // TODO send request
            return new Promise((resolve, reject) => {

                //DEBUG START
                let item = state.feed.find((i => i.id == id));
                item.isResolved = true;
                commit('updateFeedItem', item);
                //DEBUG END

                commit('resolveCurrentItem', id);
                resolve();
            });
            
        },
        snoose ({commit, state}, {id, minutes}) {
            
            // TODO send request
            return new Promise((resolve, reject) => {

                //DEBUG START
                let item = state.feed.find((i => i.id == id));
                item.isSnoosed = true;
                commit('updateFeedItem', item);
                //DEBUG END

                console.error('SNOOSE', id)
                commit('snooseCurrentItem', id);

                setTimeout(() => {
                    console.error('UNSNOOSE', id)
                    commit('unSnooseCurrentItem', id);
                }, minutes*60*1000)
                resolve();
            });
        }
    },
    getters: {  }
  }

