import './assets/main.css'

import {createApp} from 'vue'
import {create, NButton, NTable, NSpin, NCheckbox} from "naive-ui";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {App} from "/App.vue";
library.add(fas, far)

const naive = create({
    components: [NButton, NTable, NSpin, NCheckbox]
})
const app = createApp(App)
app.use(naive)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
