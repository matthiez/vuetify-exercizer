import Exercizer from './components/Exercizer';
import * as EXERCIZER from './exercizer';

export default function install(Vue) {
    Vue.prototype.$exercizer = EXERCIZER;

    Vue.component('exercizer', Exercizer);
};