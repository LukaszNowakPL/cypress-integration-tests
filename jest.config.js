module.exports = {
    reporters: ['default'],

    collectCoverage: false,
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],

    projects: [
        {
            displayName: 'jest-suite',
            testEnvironment: 'jsdom',
            roots: ['test/jest-suite'],
            restoreMocks: true,
            clearMocks: true,
            setupFilesAfterEnv: ['./test/jest-suite/setupJestDom.ts'],
            moduleNameMapper: {
                '\\css$': 'identity-obj-proxy',
            },
        },
        {
            displayName: 'playwright-suite',
            roots: ['test/playwright-suite'],
            preset: 'jest-playwright-preset',
            setupFilesAfterEnv: ['./test/playwright-suite/setup.ts'],
            transform: {
                "^.+\\.(ts)$": "ts-jest",
            },
        },
    ],
};
