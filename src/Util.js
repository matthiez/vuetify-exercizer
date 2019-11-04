class Util {
    static get isE2E() {
        return 'true' === process.env.E2E_TEST
    }

    static get isProduction() {
        return 'production' === process.env.NODE_ENV
    }

    static get isLocal() {
        return Util.isE2E || !Util.isProduction
    }
}

module.exports = Util;