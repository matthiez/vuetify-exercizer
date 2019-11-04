import DeleteIcon from "vue-material-design-icons/Delete.vue"
import CloseCircleIcon from "vue-material-design-icons/CloseCircle.vue"
import {Icons} from "vuetify/types/services/icons";
import 'vue-material-design-icons/styles.css'

const Util = require('@/Util.js');

const options: Partial<Icons> = {};

if (Util.isLocal) {
    options.values = {
        clear: {
            component: DeleteIcon
        },
        delete: {
            component: CloseCircleIcon
        }
    };
}

export const VuetifyIcons: Partial<Icons> = options;