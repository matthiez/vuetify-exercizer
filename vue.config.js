const CopyPlugin = require("copy-webpack-plugin");
const Util = require("./src/Util");

module.exports = {
    chainWebpack: config => {
        if (Util.isProduction && !Util.isE2E) {
            if (config.module.has('ts')) {
                config.module
                    .rule('ts')
                    .use('ts-loader')
                    .loader('ts-loader')
                    .tap(opts => {
                        opts.transpileOnly = false;
                        opts.happyPackMode = false;
                        opts.onlyCompileBundledFiles = true;
                        return opts;
                    });
            }
        }
    },

    configureWebpack: config => {
        config.output.libraryExport = 'default';

        if (process.env.NODE_ENV === 'production') {
            config.module.rules.filter(r => r.use).forEach(rule => {
                const idx = rule.use.findIndex(w => w.loader === 'thread-loader');

                if (idx !== -1) {
                    rule.use.splice(idx, 1)
                }
            });

            config.plugins.push(new CopyPlugin([{
                from: "src/types/index.d.ts",
                to: "index.d.ts",
            }]));
        }

        if (Util.isE2E) {
            config.entry.app[0] = "./tests/e2e/app.js";
        }
    },

    transpileDependencies: ['vuetify'],
    runtimeCompiler: false === Util.isProduction || Util.isE2E
};