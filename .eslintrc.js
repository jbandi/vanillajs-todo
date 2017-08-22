module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery":true,
        "mocha": true,
        "jest": true,
        "jasmine": true,
        "protractor": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
