import Vue from 'vue'
import Vuetify from 'vuetify/lib';
import {VuetifyPreset} from "vuetify/types/presets";
import {VuetifyIcons as icons} from "@/plugins/vuetify/icons";
import * as components from "@/plugins/vuetify/components";

const Util = require('@/Util.js');

Vue.use(Vuetify, {components});

const opts: Partial<VuetifyPreset> = Util.isLocal ? {icons} : {};

export default new Vuetify(opts);
