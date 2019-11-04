import Vue from 'vue'
import VuetifyExercizer from "@/VuetifyExercizer.vue";
import Vuetify from "vuetify";
import i18n from "@/plugins/i18n";

describe("VuetifyExercizer.vue", () => {
    let vuetify: any;

    beforeEach(() => {
        vuetify = new Vuetify();
    });

    it("starts", () => {
        Vue.component("VuetifyExercizer", VuetifyExercizer);

        const vm = new Vue({
            render: h => h(VuetifyExercizer),
            vuetify,
            i18n,
        }).$mount() as VuetifyExercizer;

        expect(vm.$el.textContent).not.toHaveLength(0)
    });
});