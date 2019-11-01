import Vue from 'vue';
import VueI18n from 'vue-i18n';
import de from "@/locales/de.json";

Vue.use(VueI18n);

export type Messages = { de?: any }

const messages: Messages = {
    de: {
        exercizer: de
    }
};

export default new VueI18n({
    locale: 'de',
    messages,
});