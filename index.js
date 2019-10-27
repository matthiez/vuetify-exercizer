import Exercizer from './components/Exercizer';
import * as EXERCIZER from './exercizer';
import Vuetify, {
    VApp,
    VAutocomplete,
    VBtn,
    VCard,
    VContainer,
    VFadeTransition,
    VFlex,
    VFooter,
    VHover,
    VLayout,
    VList,
    VListItem,
    VListItemTitle,
    VNavigationDrawer,
    VSelect,
    VStepper,
    VStepperItems,
    VStepperStep,
    VSubheader,
    VToolbar,
} from 'vuetify/lib';

export default function install(Vue) {
    Vue.use(Vuetify, {
        components: {
            VApp,
            VAutocomplete,
            VBtn,
            VCard,
            VContainer,
            VFadeTransition,
            VFlex,
            VFooter,
            VHover,
            VLayout,
            VList,
            VListItem,
            VListItemTitle,
            VNavigationDrawer,
            VSelect,
            VStepper,
            VStepperItems,
            VStepperStep,
            VSubheader,
            VToolbar,
        }
    });

    Vue.prototype.$exercizer = EXERCIZER;

    Vue.component('exercizer', Exercizer);
};