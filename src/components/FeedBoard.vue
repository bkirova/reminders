<template>
  <v-container>
    <v-row v-for="notification in notifications" :key="notification.key" class="text-center">
        <v-col class="mb-4">
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-card-title>
                   <v-list-item-avatar
                    tile
                    size="30"
                    >
                    <v-img
                        class="elevation-3"
                        alt=""
                        :src="mappings.icons[notification.type]"
                    ></v-img>
                    </v-list-item-avatar>

                <span class="title font-weight-light">{{notification.title}}</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                    {{notification.text}}
                </v-card-text>

<v-divider class="mx-4"></v-divider>

    <v-card-title>Snoose</v-card-title>

    <v-card-text>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>10 min</v-chip>

        <v-chip>1 hour</v-chip>

        <v-chip>tommorow</v-chip>
      </v-chip-group>
    </v-card-text>
                <v-card-actions>
                <v-list-item class="grow">
                    <span class="subheading">Today at 20:30</span>

                    <v-row
                    align="center"
                    justify="end"
                    >
                    <v-btn
        color="deep-purple"
        text
      >
        Resolve
      </v-btn>
                    </v-row>
                </v-list-item>
                </v-card-actions>
            </v-card>
        </v-col>
</v-row>
  </v-container>
</template>
<script>
export default {
  name: 'FeedBoard',

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
    },
    notifications: [
      {
        type: 'jira',
        title: 'Task activity',
        text: 'Task Something has updated its status',
        href: 'https://vuetifyjs.com/components/api-explorer',
        priority: 'high'
      },
      {
        type: 'chat',
        title: null,
        text: 'Alex needs you',
        href: 'https://vuetifyjs.com/components/api-explorer',
        priority: 'low'
      },
      {
        type: 'gitlab',
        title: 'New MR',
        text: 'New merge request wa assign to you',
        href: 'https://vuetifyjs.com/components/api-explorer',
        priority: 'normal'
      }
    ]
  })
}
</script>
