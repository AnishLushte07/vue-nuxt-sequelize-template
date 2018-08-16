<template>
  <v-layout row>
    <v-flex
      xs12
      sm12
      md12
      lg12>

      <v-expansion-panel popout>
        <v-expansion-panel-content
          v-for="(item, index) in items"
          :key=""
          :value="showAllForms"
        >
          <div slot="header">
            <v-list two-line>
              <v-list-tile>
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.headline"/>
                  <v-list-tile-sub-title v-html="item.title"/>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

          </div>

          <v-card>
            <v-card-media
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              height="200px"
            />

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ item.action }}</h3>
                <div>{{ item.subtitle }}</div>
                <div>Price: {{ item.title }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn
                flat
                color="orange">Add to Cart</v-btn>
              <v-btn
                flat
                color="orange">Explore Variants</v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      selected: [2],
      items: [
        {
          action: 'Nirfile',
          headline: 'Dextrose IV 500ML',
          title: 'Price On Request',
          subtitle: 'This is used in Hospitals',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {
          action: 'Nirfile',
          headline: 'NS IV 500ML',
          title: 'Price On Request',
          subtitle: 'This is used in Hospitals',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {
          action: 'Nirfile',
          headline: 'RL IV 500ML',
          title: 'Price On Request',
          subtitle: 'This is used in Hospitals',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {
          action: 'Nirfile',
          headline: 'Oflox IV 500ML',
          title: 'Price On Request',
          subtitle: 'This is used in Hospitals',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {
          action: 'Nirfile',
          headline: 'Dextrose 5% IV 500ML',
          title: 'Price On Request',
          subtitle: 'This is used in Hospitals',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
      ],
    }
  },

  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    },
  },
}
</script>
