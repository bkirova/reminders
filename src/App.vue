<template>

<v-app>
  <v-app-bar
      app
      color="primary"
      dark
    >
    REMINDERS
      <v-tabs v-model="tab" align-with-title>
        <v-tab>Notifications</v-tab>
        <v-tab>History</v-tab>
        <v-tab>Integrations</v-tab>
      </v-tabs>
  </v-app-bar>
  <v-main>
    <v-container class="main-container">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <Notifications/>
        </v-tab-item>
        <v-tab-item>
          <History/>
        </v-tab-item>
        <v-tab-item>
          <Integrations/>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import Notifications from './components/Notifications'
import History from './components/History'
import Integrations from './components/Integrations'

export default {
  name: 'App',

  components: {
    Notifications,
    History,
    Integrations
  },

  data: () => ({
    tab: null
  })
}
</script>
<style lang="stylus" scoped>
.main-container
    max-width 1000px !important
 
</style>