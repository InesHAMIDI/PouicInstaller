import './index.css';
import {createApp} from 'vue';
import App from './App.vue';
import {
    // create naive ui
    create,
    // component
    NButton
} from 'naive-ui'

import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";

const naive = create({
    components: [
        NButton
    ]
})

library.add(fas, far)


const app = createApp(App);
app.use(naive)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
