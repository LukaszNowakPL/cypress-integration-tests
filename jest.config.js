module.exports = {
    reporters: [
        'default',
    ],

    collectCoverage: false,
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],

    projects: [
        {
            displayName: 'unit',
            testEnvironment: 'node',
            roots: ['test/unit'],
            setupFilesAfterEnv: ['./test/setupJestDom.ts'],
            moduleNameMapper: {
                '\\.css$': 'identity-obj-proxy',
            }
        },
        {
            displayName: 'integration',
            testEnvironment: 'jsdom',
            roots: ['test/integration'],
            restoreMocks: true,
            clearMocks: true,
            setupFilesAfterEnv: ['./test/setupJestDom.ts'],
            moduleNameMapper: {
                '\\css$': 'identity-obj-proxy',
            },
        },
    ],
};