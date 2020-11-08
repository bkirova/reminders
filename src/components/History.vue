<template>
  <v-container>
    <v-row v-for="item in items" :key="item.id" class="text-center">
        <v-col class="mb-4">
          <HistoryItem v-bind="item"/>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import HistoryItem from './HistoryItem'

export default {
  name: 'History',
  components: {
    HistoryItem
  },
  data: () => ({

  }),
  computed: mapState({
    items: state => state.history.items,
  }),
  methods: {
    ...mapActions({
      pull: 'history/pull'
    }),
  },
  mounted() {
    this.pull();
  }
}
</script>
