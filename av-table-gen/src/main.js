import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


/**
 * Developer Mode Data
 */
import { createFakeTableWithAllColOptionsData } from '../mockData/baseTable'

const mockTable = createFakeTableWithAllColOptionsData();
console.log(mockTable)
Vue.prototype.$fakeTable = [mockTable];


// Vue.filter('truncate', function(value, limit) {
//     if (value.length > limit) {
//         value = value.substring(0, (limit - 3)) + '...';
//     }

//     return value
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')