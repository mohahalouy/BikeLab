import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//libreria AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
    once: true
});

//libreria icon
import {library} from '@fortawesome/fontawesome-svg-core'
import {faInstagram, faTwitter, faFacebook, faTiktok} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faArrowUp, faAngleDown, faCheckCircle, faExclamationCircle, faCheck, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import i18n from './i18n'
import router from './router'
import store from './store'

library.add(faInstagram, faTwitter, faFacebook, faTiktok, faArrowUp, faAngleDown, faCheckCircle, faExclamationCircle, faCheck,faArrowRight)

Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
