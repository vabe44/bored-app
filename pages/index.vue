<template>
  <v-sheet
    :tile="true"
    class="pa-4"
    height="420px"
  >
    <v-row>
      <v-col cols="8">
        <p class="title mb-0">
          You should:
        </p>
        <v-textarea
          v-model="activity.activity"
          solo
          name="input-7-4"
          label="Activity name"
          rows="9"
        />
        <div class="mt-1">
          <v-btn
            block
            color="error"
            @click="onSaveActivity()"
          >
            Save for later
          </v-btn>
        </div>
      </v-col>
      <v-col cols="4 d-flex flex-column">
        <p class="title mb-0">
          Activity details:
        </p>
        <v-row class="justify-space-around">
          <v-col cols="12">
            <p class="mb-0">
              Type
            </p>
            <v-select
              v-model="activity.type"
              hide-details
              :items="items"
              class="mt-0 pt-0"
            />
          </v-col>
          <v-col cols="12">
            <p class="mb-0">
              Participants
            </p>
            <v-text-field
              v-model="activity.participants"
              hide-details
              single-line
              type="number"
              class="pt-0 mt-0"
            />
          </v-col>
          <v-col cols="12">
            <p class="mb-0">
              Budget
            </p>
            <v-slider
              v-model="activity.price"
              dense
              hide-details
              value="30"
              min="0"
              max="1"
              step="0.01"
            />
            <div class="d-flex justify-space-between">
              <span class="caption">
                cheap
              </span>
              <span class="caption">
                expensive
              </span>
            </div>
          </v-col>
          <v-col cols="12" class="mr-2">
            <v-btn color="primary" class="mt-6" @click="fetchActivity">
              Hit me with a new one!
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar.active"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.text }}
      <v-btn
        dark
        text
        @click="snackbar.active = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-sheet>
</template>

<script>
import { mapMutations } from 'vuex'
import ActivityService from '../services/ActivityService'
export default {
  async asyncData ({ error }) {
    try {
      const { data } = await ActivityService.getActivity()
      return {
        activity: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch activities at this time. Please try again.'
      })
    }
  },
  data: () => ({
    activity: {
      activity: '',
      type: 'education',
      participants: 1,
      price: 0
    },
    items: [
      'education',
      'recreational',
      'social',
      'diy',
      'charity',
      'cooking',
      'relaxation',
      'music',
      'busywork'
    ],
    snackbar: {
      active: false,
      color: 'success',
      text: 'Activity successfully saved',
      timeout: 3000
    }
  }),
  methods: {
    ...mapMutations({
      saveActivity: 'activities/ADD_ACTIVITY'
    }),
    async fetchActivity () {
      const { data } = await ActivityService.getActivity()
      this.activity = data
    },
    onSaveActivity () {
      this.saveActivity(this.activity)
      this.snackbar.active = true
      this.fetchActivity()
    }
  }
}
</script>
