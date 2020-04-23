/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'vuex'

Vue.use(Vuex);
import storeData from "./store/index";

const store = new Vuex.Store(
    storeData
);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component(
    'form-basic',
    require('./components/FormBasic.vue').default
);
Vue.component(
    'form-basic-input',
    require('./components/FormBasicInput.vue').default
);
Vue.component(
    'form-basic-display',
    require('./components/FormBasicDisplay.vue').default
);
Vue.component(
    'form-basic-edit',
    require('./components/FormBasicEdit.vue').default
);
Vue.component(
    'form-input',
    require('./components/FormInput.vue').default
);
Vue.component(
    'form-section',
    require('./components/FormSection.vue').default
);
Vue.component(
    'add-form-section',
    require('./components/AddSection.vue').default
);
Vue.component(
    'add-input',
    require('./components/AddInput.vue').default
);
Vue.component(
    'edit-mode',
    require('./components/EditMode.vue').default
);
Vue.component(
    'fe-form',
    require('./components/Form.vue').default
);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
});

