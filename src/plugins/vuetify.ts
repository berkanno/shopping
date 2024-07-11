/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  defaults: {
    VCard: {
      variant: "flat",
      border: true,
      color: 'white',
    },
    VAppBar: {
      color: 'white'
    },
    VToolbar: {
      color: 'white'
    },
  },
})
