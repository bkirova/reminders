<template>
    <div :class="['integration-container']">

        <div class="integration-avatar">
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

        <div class="integration-details">
            <div class="details-title text-uppercase">{{type}}</div>
            <div class="details-items">
                <div class="title">{{title}}</div>
                <div class="subtitle-2 text--disabled">{{description}}</div>
            </div>
        </div>

        <div class="integration-resolve">
            <v-btn
            outlined
            color="indigo"
            @click="edit({id})"
            >
            Edit
            </v-btn>
            <v-btn
            outlined
            color="indigo"
            @click="remove({id})"
            >
            Remove
            </v-btn>
        </div>
        
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'IntegrationItem',
  props: {
    id: {
      type: String|Number,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
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

  },
  methods: {
    ...mapActions({

    }),
    edit() {},
    remove() {}
  }
}
</script>
<style lang="stylus">
.integration-container
    display flex
    justify-content space-between
    align-items center
    background #e8e8e8
    padding 20px
    
.integration-details
    display flex    
    flex-direction column
    align-items flex-start
    min-width 350px
    .details-items
        display flex
        flex-direction column
        align-items flex-start

 
</style>