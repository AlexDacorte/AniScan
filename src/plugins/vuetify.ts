/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from "vuetify";
// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          primary: "#1951e4",
          secondary: "#5CBBF6",
          background: "#121419",
          surface: "#121419",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
        },
      },
    },
  },
});
