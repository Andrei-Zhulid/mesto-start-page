import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        'deep-purple': '#4A0A52',
        'light-purple': '#B85CF0',
        'light-grey': '#F1F1F1',
        lime: '#00FFC2',
        'primary-text': '#16061C', // Black
        'secondary-text': '#727272', // Grey
      },
    },
  },
})
