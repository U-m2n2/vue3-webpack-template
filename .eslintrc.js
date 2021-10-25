module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
          }],
          "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }]
    }
};
