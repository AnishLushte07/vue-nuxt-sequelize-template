<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      class=" lighten-4"
      clipped="true"
      app="true"
      absolute="true"
    >
      <v-list
        dense
        class=" lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>

          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          />
          <v-list-tile
            v-else
            :key="i"
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="primary"
      app
      dark
      absolute
      clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"/>
      <v-toolbar-title class="white--text">OrderBook</v-toolbar-title>
      <v-spacer/>
      <v-text-field
        prepend-icon="search"
        append-icon="mic"
        label="Search"
        solo-inverted
        class="mx-3"
        flat
      ></v-text-field>
      <v-spacer/>


      <v-badge left>
        <span slot="badge">6</span>
        <v-icon
          large
          color="grey lighten-1"
        >
          shopping_cart
        </v-icon>
      </v-badge>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon
            large
            color="grey lighten-1"
          >
            person
          </v-icon>
          Sign In</v-btn>
      </v-toolbar-items>

      <v-menu
        bottom
        left>
        <v-btn
          icon
          slot="activator"
          dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="litem in loggedInMenuItems"
            :key="litem.title"
            @click="clickme()">
            <v-list-tile-title>{{ litem.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height
        class="grey lighten-4">
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'lightbulb_outline', text: 'Products' },
      { icon: 'touch_app', text: 'Bulk Order' },
      { divider: true },
      { heading: 'Filters' },
      { icon: 'add', text: 'Brands' },
      { icon: 'add', text: 'Categories' },
      { divider: true },
      { icon: 'chat_bubble', text: 'Contact Us' },
      { icon: 'help', text: 'Help' },
    ],
    loggedInMenuItems: [
      { title: 'Order History' },
      { title: 'My Profile' },
      { title: 'Call Vendor' },
      { title: 'Logout' },
    ],
  }),
  methods: {
    clickme() {
      alert('asdads')
    },
  },
}
</script>
