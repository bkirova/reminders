<template>
    <div :class="['integration-container']">

        <div class="integration-avatar mr-5">
            <v-avatar
            size=50
            tile
            >
            <v-img
                alt=""
                :src="mappings.icons[type]"
            ></v-img>
            </v-avatar>
        </div>

        <div class="integration-details">
            <div class="details-title title text-uppercase text-center">
              {{type}}
              <v-icon small color="primary">mdi-pencil-outline</v-icon>
              <v-icon small color="primary">mdi-trash-can-outline</v-icon>
            </div>
            <div class="details-items">
                <div class="subtitle-1">{{title}}</div>
                <div class="subtitle-2 text--disabled">{{description}}</div>
            </div>
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
    align-items center
    background #f5f5f5
    padding 20px
    border 2px solid #ececec
    
.integration-details
    display flex    
    flex-direction column
    align-items flex-start
    .details-items
        display flex
        flex-direction column
        align-items flex-start

 
</style>