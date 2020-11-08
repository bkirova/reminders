<template>
  <v-container>
    <v-row v-for="integration in integrations" :key="integration.id" class="text-center">
        <v-col class="mb-4">
          <IntegrationItem v-bind="integration"/>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import IntegrationItem from './IntegrationItem'

export default {
  name: 'Notifications',
  components: {
    IntegrationItem
  },
  data: () => ({

  }),
  computed: mapState({
    integrations: state => state.integrations.current,
  }),
  methods: {
    ...mapActions({
      pull: 'integrations/pull'
    }),
  },
  mounted() {
    this.pull();
  }
}
</script>
