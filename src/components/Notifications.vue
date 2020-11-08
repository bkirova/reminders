<template>
  <v-container>
    <v-row v-for="notification in notifications" :key="notification.id" class="text-center">
        <v-col class="mb-4">
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
  watch: {
    notifications: {
      handler: function (after, before) {
        // Return the object that changed
        // var vm = this;
        // let changed = after.filter( function( p, idx ) {
        //   return Object.keys(p).some( function( prop ) {
        //     return p[prop] !== vm.$data.oldPeople[idx][prop];
        //   })
        // })
        // // Log it
        // vm.setValue();
        console.error(after)
      },
      deep: true,
    }
  },
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
