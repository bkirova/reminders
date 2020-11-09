<template>
  <v-container>
    <v-row>
      <v-col class="actions">
        <v-btn icon>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
        <v-col v-for="integration in integrations" :key="integration.id" cols="6">
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
<style lang="stylus" scoped>
.actions
    display flex
    justify-content flex-end
 
</style>
