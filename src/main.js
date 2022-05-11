import Vue from 'vue'
import App from './App.vue'
import router from './router'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLine } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faLine, faFacebook, faInstagram, faShoppingCart, faBars, faXmark, faPhone)


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// messenger
import VueFbCustomerChat from 'vue-fb-customer-chat'

import store from './store'

Vue.use(VueFbCustomerChat, {
  page_id: "206304263433214", //  change 'null' to your Facebook Page ID,
  theme_color: '#A0CDA6', // theme color in HEX
  locale: 'zh_TW', // default 'en_US'
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
