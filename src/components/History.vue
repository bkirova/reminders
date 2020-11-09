<template>
  <v-container>
    <v-row >
        <v-col class="actions">
            <v-btn outlined>
                Today
            </v-btn>
            <v-btn outlined class="ml-1">
                Yesterday
            </v-btn>
      </v-col>
    </v-row>
    <v-timeline
        dense
      >
        <v-timeline-item
            v-for="item in items" :key="item.id"
          color="pink"
          small 
        >
        <HistoryItem v-bind="item"/>
        </v-timeline-item>
    </v-timeline>
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
<style lang="stylus" scoped>
.actions
    display flex
    justify-content flex-end
 
</style>