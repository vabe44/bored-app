export const state = () => ({
  activities: []
})

export const mutations = {
  ADD_ACTIVITY (state, activity) {
    state.activities.push(activity)
  },
  CLEAR_ACTIVITIES (state) {
    state.activities = []
  },
  DELETE_ACTIVITY (state, activity) {
    const index = state.activities.findIndex(el => el.key === activity.key)
    state.activities.splice(index, 1)
  }
}
