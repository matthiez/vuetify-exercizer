import Vue from "vue"
import VuetifyExercizer from "@/VuetifyExercizer.vue";
import i18n from "@/plugins/i18n";
import vuetify from "@/plugins/vuetify";
import {ComponentOptions} from "vue/types/options";

const vm = new Vue(<ComponentOptions<Vue>>{
    components: {VuetifyExercizer},
    i18n,
    el: "#app",
    vuetify,
    template: `
        <v-app>
            <vuetify-exercizer id="vuetify_exercizer"></vuetify-exercizer>
        </v-app>`,
});
