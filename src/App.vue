<template>

<v-app>
  <v-app-bar
  app
      absolute
      color="#6A76AB"
      dark
      prominent
      src="https://images.takeshape.io/1f1d0876-be74-4b33-99c8-6ac93f1d70db/dev/4468e4af-526e-4ed6-a0c1-a0dc7673cef3/nicolo-di-giovanni-535450-unsplash.png?auto=compress%2Cformat&w=1200"
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title>Reminders</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tab>Routine</v-tab>
          <v-tab>Feed</v-tab>
          <v-tab>Reminders</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="800"
    >
      <v-container style="height: 1000px;margin-top:200px;" fluid>
        <v-tabs-items v-model="tab">
        <v-tab-item>
          <TodayBoard/>
        </v-tab-item>
        <v-tab-item>
          <FeedBoard/>
        </v-tab-item>
        <v-tab-item>
          <RemindersBoard/>
        </v-tab-item>
      </v-tabs-items>
      </v-container>
    </v-sheet>

</v-app>
</template>

<script>
import TodayBoard from './components/TodayBoard'
import FeedBoard from './components/FeedBoard'
import RemindersBoard from './components/RemindersBoard'

export default {
  name: 'App',

  components: {
    TodayBoard,
    FeedBoard,
    RemindersBoard
  },

  data: () => ({
    tab: null
  })
}
</script>
