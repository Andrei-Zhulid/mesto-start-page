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
        lime: '#00FFC2',
        anchor: '#16061C',
      },
    },
  },
})
