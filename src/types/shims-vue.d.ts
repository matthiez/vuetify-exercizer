declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module "*.json" {
    const value: any;
    export default value;
}

declare module '@/Util' {
    export default class Util {
        static get isE2E(): boolean

        static get isProduction(): boolean
    }
}
