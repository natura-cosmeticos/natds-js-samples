module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    coverageDirectory: "./coverage/",
    coveragePathIgnorePatterns: [
        "/build/",
        "/coverage/",
        "/node_modules/",
        "babel.config.js",
        "jest.config.js"
    ],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    verbose: true
}
