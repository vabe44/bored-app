<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="5">
            <v-tabs>
              <v-tab v-for="(item, i) in items" :key="i" :to="item.to">
                {{ item.title }}
              </v-tab>
            </v-tabs>
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Activities',
          to: '/'
        },
        {
          title: 'My List',
          to: '/list'
        }
      ]
    }
  }
}
</script>
