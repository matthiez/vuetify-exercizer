'use strict';

const fs = require('fs');

const downloadPath = process.env.EXERCIZER_DL_PATH;
const wrapper = '#vuetify_exercizer';

let _wrapper, _stepIndex = 0, _content, _browser;

module.exports = {
    async before(browser) {
        _browser = browser;

        await browser.init();

        _wrapper = (await $$(wrapper, false)).ELEMENT;
    },
    async beforeEach(browser) {
        _stepIndex++;

        await browser.pause(199);

        browser.assert.cssClassPresent(
            `${wrapper} .v-stepper__header .v-stepper__step.v-stepper__step--editable:nth-of-type(${_stepIndex})`,
            'v-stepper__step--active');

        _content = `${wrapper} .v-stepper__content:nth-of-type(${_stepIndex})`;
    },
    setSplit,
    setDays,
    setCombo,
    setExercises,
    async after(browser) {
        fs.rmdirSync(downloadPath, {recursive: true});
        console.assert(false === fs.existsSync(downloadPath));
        await browser.end()
    }
};

async function setSplit(browser) {
    const splits = await $$('div.flex.text-xs-center.elevation-2 > button', true, true);
    browser.assert.strictEqual(splits.length, 5);

    const $split = splits[Math.floor((Math.random() * splits.length))];

    browser.assert.strictEqual(
        isNaN(Number.parseInt((await browser.elementIdText($split)).value)),
        false);

    await browser.elementIdClick($split);
}

async function setDays(browser) {
    let max = await $$(`${_content} div.v-counter.theme--dark`);
    max = (await browser.elementIdText(max)).value;
    max = Number.parseInt(max.slice(-1));
    browser.assert.strictEqual(isNaN(max), false);

    const weekday = '.exercizer-weekdays .v-list-item';

    await browser.click(`${_content} div.v-input__slot`);

    browser.assert.strictEqual((await $$(weekday, false, true)).length, 7);

    for (let n of [...Array(max).keys()].map(n => ++n)) {
        const {ELEMENT: day} = await $$(`${weekday}:nth-of-type(${n})`, false);
        await browser.elementIdClick(day);

        if (max === n) {
            await browser.elementIdValue(day, browser.Keys.ESCAPE);
            await browser.click(`${_content} button:enabled`);
        }
    }
}

async function setCombo(browser) {
    browser.assert.notStrictEqual((await $$('div.flex.fill-height.d-flex.xs12', true, true)).length, 0);

    await browser.click(`${_content} div.flex.fill-height.d-flex.xs12`);
}

async function setExercises(browser) {
    const fileName = 'vuetify_exercizer_e2e_test';
    const xlsx = `${fileName}.xlsx`;

    const $fileNameInput = await $$(`${_content} .flex.xs12.md6:last-of-type input`);
    const keystrokes = Array((await browser.elementIdValue($fileNameInput)).value.length)
        .fill(browser.Keys.BACK_SPACE).concat(fileName);
    await browser.elementIdValue($fileNameInput, keystrokes);

    const {value: download} = await browser.executeAsync(function (fileName, button, doneFn) {
            const observer = new MutationObserver(function (mutations) {
                for (const {removedNodes} of mutations.filter(m => m.removedNodes.length)) {
                    const {download} = removedNodes[0];

                    if (fileName === download) {
                        observer.disconnect();

                        doneFn(download);

                        break;
                    }
                }
            });
            observer.observe(document.body, {childList: true});

            document.querySelector(button).click();
        },
        [xlsx, `${_content} div.flex.xs12.md6.text-xs-center > button`]
    );

    browser.assert.strictEqual(download, xlsx);

    const waitWrite = () => new Promise(async resolve => {
        const watcher = fs.watch(downloadPath, onChangeDownloadPath);

        async function onChangeDownloadPath(eventType, filename) {
            if (xlsx === filename) {
                watcher.close();

                resolve(filename);
            }
        }
    });

    browser.assert.strictEqual(await waitWrite(), xlsx);
}

async function $$(selector, wrap = true, multiple = false) {
    const func = wrap
        ? multiple
            ? 'elementIdElements' : 'elementIdElement'
        : multiple
            ? 'elements' : 'element';

    const args = ['css selector', selector];
    if (wrap) {
        args.splice(0, 0, _wrapper);
    }

    const {value} = await _browser[func](...args);
    return wrap ? multiple ? value.map(v => v.ELEMENT) : value.ELEMENT : value;
}