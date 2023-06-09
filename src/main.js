import { createApp } from 'vue'
import './assets/scss/styles.scss'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
