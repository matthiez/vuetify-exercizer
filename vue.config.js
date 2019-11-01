const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    chainWebpack: config => {
        if ('production' === process.env.NODE_ENV) {
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

        config.plugins.push(new CopyPlugin([{
            from: "src/types/index.d.ts",
            to: "index.d.ts",
        }]));

        if (process.env.NODE_ENV === 'production') {
            config.module.rules.filter(r => r.use).forEach(rule => {
                const idx = rule.use.findIndex(w => w.loader === 'thread-loader');

                if (idx !== -1) {
                    rule.use.splice(idx, 1)
                }
            })
        }
    },

    transpileDependencies: ['vuetify'],
};