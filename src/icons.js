import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faPhoneVolume, faEnvelope)

Vue.component('fa-icon', FontAwesomeIcon)
