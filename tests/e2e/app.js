'use strict';
import Vue from 'vue'
import VuetifyExercizer from '../../src/VuetifyExercizer';
import i18n from '../../src/plugins/i18n';
import vuetify from '../../src/plugins/vuetify';

const tpl = '<div id="app"><v-app><vuetify-exercizer id="vuetify_exercizer"></vuetify-exercizer></v-app></div>';

new Vue({
    components: {VuetifyExercizer},
    i18n,
    vuetify,
    render(createElement) {
        return Vue.compile(tpl).render.call(this, createElement)
    }
}).$mount('#app');