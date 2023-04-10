import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'
import "bootstrap/dist/js/bootstrap.bundle";

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


// vee-validate 表單驗證+配置
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import {
    required,
    email,
    min,
    length,
    digits,
    numeric,
    confirmed
} from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('length', length)
defineRule('digits', digits)
defineRule('numeric', numeric) // 必數字
defineRule('confirmed', confirmed) // 字串全等
configure({
    generateMessage: localize({
        zh_TW: zhTw
    }),
    validateOnInput: true
})
setLocale('zh_TW')


import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';


import VueAos from 'vue-aos'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.component('Loading', Loading);



app.component('VForm', Form)
app.component('VField', Field)
app.component('VErrorMessage', ErrorMessage)

// app.use(VueFilterDateFormat);

app.use(VueAos)



app.mount('#app')
