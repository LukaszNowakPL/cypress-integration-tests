// https://github.com/playwright-community/jest-playwright/#configuration

module.exports = {
    browsers: ['chromium'],
    serverOptions: {
        command: `npm start`,
        port: 3000,
        launchTimeout: 10000,
        debug: false,
        options: {
            env: {
                "REACT_APP_BLOCK_MIRAGEJS": true
            }
        }
    },
    launchOptions: {
        headless: true,
        // slowMo: 100,
        // devtools: true,
    },
    testEnvironmentOptions: {
        "jest-playwright": {
            browsers: ["chromium"],
        }
    }
};
