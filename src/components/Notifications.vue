<template>
  <v-container>
    <v-row>
      <v-col class="actions">
        <v-btn icon>
            <v-icon>mdi-view-agenda-outline</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-view-grid-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-for="notification in notifications" :key="notification.id">
        <v-col >
          <NotificationItem v-bind="notification"/>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import NotificationItem from './NotificationItem'

export default {
  name: 'Notifications',
  components: {
    NotificationItem
  },
  data: () => ({

  }),
  computed: mapState({
    notifications: state => state.notifications.current,
  }),
  methods: {
    ...mapActions({
      pull: 'notifications/pull'
    }),
    initPulling() {
      this.pull();

      setInterval(() => {
        this.pull()
      }, 60000);
    }
  },
  mounted() {
    this.initPulling();
  }
}
</script>
<style lang="stylus" scoped>
.actions
    display flex
    justify-content flex-end
 
</style>