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
import {faArrowUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import i18n from './i18n'
import router from './router'

library.add(faInstagram, faTwitter, faFacebook, faTiktok, faArrowUp, faAngleDown)

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app')
