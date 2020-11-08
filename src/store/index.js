import Vue from 'vue'
import Vuex from 'vuex'

import notifications from './modules/notifications'
import integrations from './modules/integrations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notifications,
    integrations
  }
})