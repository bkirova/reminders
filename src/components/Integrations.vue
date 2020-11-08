<template>
  <v-container>
    <v-row v-for="notification in notifications" :key="notification.key" class="text-center">
        <v-col class="mb-4">
            <v-card
                class="mx-auto"
                max-width="400"
                elevation="2"
            >
                <v-card-text class="headline font-weight-bold">
                    {{notification.text}}
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                <v-list-item class="grow">
                    <span class="subheading">Today at {{notification.time}}</span>
                    <v-row
                    align="center"
                    justify="end"
                    >
                    <v-btn
        color="deep-purple"
        text
        @click="edit"
      >
        Edit
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
  name: 'ReminderBoard',

  data: () => ({
    notifications: [
      {
        text: 'Check Errors',
        time: '09:00'
      },
      {
        text: 'Check Jira tasks',
        time: '09:30'
      },
      {
        text: 'Check deploy schedules',
        time: '10:00'
      },
      {
        text: 'Close Deploy task',
        time: '16:00'
      }
    ]
  }),
  methods: {
    edit () {
      console.log('edit')
    }
  }
}
</script>
