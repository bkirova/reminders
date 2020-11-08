<template>
    <div :class="['notification-container', {'snoose-expired': isSnooseExpired}]">

        <div class="notification-avatar">
            <v-avatar
            size=30
            tile
            >
            <v-img
                class="elevation-3"
                alt=""
                :src="mappings.icons[type]"
            ></v-img>
            </v-avatar>
        </div>

        <div class="notification-details">
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
    },
    dateNext: {
      type: String,
      default: ""
    },
    priority: {
      type: String,
      default: "normal"
    },
    href: {
      type: String,
      default: ""
    },
    isSnooseExpired: {
      type: Boolean,
      default: false
    },
  },
  data: () => ({
    mappings: {
      icons: {
        jira: 'https://symbols-electrical.getvecta.com/stencil_85/33_jira-icon.6a60be29f8.jpg',
        chat: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Google_Hangouts_Chat_icon.png',
        gitlab: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1200px-GitLab_Logo.svg.png'
      },
      background: {
        high: '#ff4a7b',
        normal: '#00bcd4',
        low: '#009688'
      }
    }
  }),
  computed: {
      isVisible() {
          return !this.isResolved && !this.isSnoosed;
      }
  },
  methods: {
    ...mapActions({
      resolve: 'notifications/resolve',
      snoose: 'notifications/snoose'
    }),
  }
}
</script>
<style lang="stylus">

.notification-container
    display flex
    align-items center
    background #e8e8e8
    padding 20px
   
.notification-details
    display flex    
    flex-direction column
    align-items flex-start
    min-width 350px
    .details-items
        display flex
        flex-direction column
        align-items flex-start

 
</style>