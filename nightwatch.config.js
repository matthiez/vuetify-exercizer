'use strict';
// http://nightwatchjs.org/gettingstarted#settings-file

const os = require('os');
const fs = require('fs');
const path = require('path');

process.env.EXERCIZER_DL_PATH = fs.mkdtempSync(path.join(os.tmpdir(), 'exercizer-'));

module.exports = {
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['auto-open-devtools-for-tabs'],
            prefs: {
                download: {
                    'default_directory': process.env.EXERCIZER_DL_PATH
                }
            }
        }
    },
};
