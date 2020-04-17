<template>
  <v-sheet
    :tile="true"
    class="d-flex pa-4"
    min-height="420px"
  >
    <template>
      <v-row>
        <v-col
          cols="12"
          class="d-flex flex-column"
        >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    #
                  </th>
                  <th class="text-left">
                    Activity
                  </th>
                  <th class="text-left">
                    Participants
                  </th>
                  <th class="text-left">
                    Budget
                  </th>
                  <th class="text-left" />
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in activities" :key="item.key">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.activity }}</td>
                  <td>{{ item.participants }}</td>
                  <td>{{ item.price | budget }}</td>
                  <td>
                    <v-icon @click="deleteOne(item)">
                      mdi-check-circle
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-spacer />
          <div class="pt-1">
            <v-btn
              block
              color="error"
              @click="clearAll()"
            >
              Clear all
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </template>
  </v-sheet>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  filters: {
    budget (val) {
      return val < 0.5 ? 'cheap' : 'expensive'
    }
  },
  data () {
    return {
    }
  },
  computed: mapState({
    activities: state => state.activities.activities
  }),
  methods: mapMutations({
    clearAll: 'activities/CLEAR_ACTIVITIES',
    deleteOne: 'activities/DELETE_ACTIVITY'
  })
}
</script>
