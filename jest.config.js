module.exports = {
    reporters: ['default'],

    collectCoverage: false,
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],

    projects: [
        /*{
            displayName: 'unit',
            testEnvironment: 'node',
            roots: ['test/unit'],
            setupFilesAfterEnv: ['./test/jest-suite/setupJestDom.ts'],
            moduleNameMapper: {
                '\\.css$': 'identity-obj-proxy',
            }
        },*/
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
    ],
};
