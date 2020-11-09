<template>
    <div :class="['notification-container', {'snoose-expired': isSnooseExpired}]">

        <div class="notification-avatar">
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

        <div class="notification-details">
            <div class="details-title text-uppercase primary--text">{{type}}</div>
            <div class="details-items">
                <div class="title">{{text}}</div>
                <div class="subtitle-2 text--disabled">{{date}}</div>
            </div>
        </div>

        <div class="notification-snoose">
            <div class="snoose-title text-uppercase">Snoose</div>
            <div v-if="isSnooseExpired">This was already snoosed!</div>
            <div class="snoose-items">
                <v-btn depressed outlined class="mr-1"  @click="snoose({id, minutes: 1})">
                1 min
                </v-btn>
                <v-btn depressed outlined class="mr-1"  @click="snoose({id, minutes: 5})">
                5 min
                </v-btn>
                <v-btn depressed outlined  @click="snoose({id, minutes: 10})">
                10 min
                </v-btn>

                <v-btn
                outlined
                depressed
                color="primary"
                class="ml-3"
                @click="resolve({id})"
                >
                Resolve
                </v-btn>
            </div>
            
        </div>

        
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'NotificationItem',
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
        jira: 'jira.png',
        chat: 'hangouts.png',
        gitlab: 'gitlab.png'
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
<style lang="stylus" scoped>
@keyframes blink {
  50% {
    background-color: #ecdada;
  }
}

.notification-container
    display flex
    justify-content space-between
    align-items center
    background #f5f5f5
    padding 20px
    border 2px solid #ececec
    &.snoose-expired
        animation: blink 2s infinite;

.notification-details
    display flex    
    flex-direction column
    align-items flex-start
    min-width 350px
    .details-items
        display flex
        flex-direction column
        align-items flex-start

.notification-snoose
  display flex    
  flex-direction column
  align-items flex-start

 
</style>