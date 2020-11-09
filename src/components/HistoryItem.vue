<template>
    <div :class="['history-container']">
        <div class="history-avatar mr-5">
            <v-avatar
            size=50
            tile
            >
            <v-img
                class="elevation-3"
                alt=""
                :src="mappings.icons[type]"
            ></v-img>
            </v-avatar>
        </div>

        <div class="history-details">
            <div class="details-title text-uppercase">{{type}}</div>
            <div class="details-items">
                <div class="title">{{text}}</div>
                <div class="subtitle-2 text--disabled">{{date}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'HistoryItem',
  props: {
    id: {
      type: String|Number,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    mappings: {
      icons: {
        jira: 'jira.png',
        chat: 'hangouts.png',
        gitlab: 'gitlab.png'
      }
    }
  })
}
</script>
<style lang="stylus">

.history-container
    display flex
    align-items center
    padding 20px
   
.history-details
    display flex    
    flex-direction column
    align-items flex-start
    min-width 350px
    .details-items
        display flex
        flex-direction column
        align-items flex-start

 
</style>