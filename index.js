module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:ava/recommended",
    "plugin:unicorn/recommended"
  ],
  "plugins": [
    "node",
    "promise",
    "ava",
    "no-loops",
    "unicorn",
    "lodash",
    "destructuring"
  ],
  "env": {
    "es6": true,
    "browser": false,
    "node": true,
    "mongo": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "arrowFunctions": true,
      "blockBindings": true,
      "classes": true,
      "defaultParameters": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "restParams": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodeCodePointEscapes": true
    }
  },
  "rules": {
    "no-loops/no-loops": 1,

    "node/exports-style": [2, "module.exports"],
    "node/no-unpublished-require": 0,
    "node/shebang": 0,

    "promise/always-return": 1,
    "promise/no-return-wrap": 2,
    "promise/param-names": 2,
    "promise/catch-or-return": 2,
    "promise/no-native": 0,
    "promise/no-nesting": 1,
    "promise/no-promise-in-callback": 0,
    "promise/no-callback-in-promise": 0,
    "promise/avoid-new": 0,
    "promise/no-return-in-finally": 2,
    "promise/prefer-await-to-then": 1,
    "promise/prefer-await-to-callbacks": 1,
    
    "lodash/prefer-lodash-method": 0,
    "lodash/matches-prop-shorthand": 0,
    "lodash/prefer-lodash-chain": 0,
    "lodash/collection-method-value": 1,
    "lodash/prop-shorthand": 1,
    "lodash/prefer-constant": 0,
    "lodash/prefer-noop": 0,
    "lodash/prefer-get": 1,
    "lodash/prefer-includes": 1,
    "lodash/prefer-is-nil": 1,
    "lodash/prefer-times": 1,
    "lodash/prefer-map": 1,
    "lodash/prefer-filter": 1,

    "unicorn/catch-error-name": [1, { "name": "err" }],
    "unicorn/explicit-length-check": 0,
    "unicorn/filename-case": [1, { "case": "kebabCase" }],
    "unicorn/no-abusive-eslint-disable": 2,
    "unicorn/throw-new-error": 2,
    "unicorn/number-literal-case": 2,
    "unicorn/escape-case": 2,
    "unicorn/no-array-instanceof": 2,
    "unicorn/no-new-buffer": 2,
    "unicorn/no-hex-escape": 2,
    "unicorn/custom-error-definition": 2,
    "unicorn/prefer-starts-ends-with": 1,
    "unicorn/prefer-type-error": 2,
    "unicorn/no-process-exit": 0,
    "unicorn/no-fn-reference-in-iterator": 0,
    "unicorn/import-index": 2,
    "unicorn/regex-shorthand": 1,

    "destructuring/in-params": [1, { "max-params" : 0 }],
    
    "arrow-spacing": [1, {"before": true, "after": true}],
    "block-spacing": [1, "always"],
    "comma-dangle": [2, "never"],
    "comma-spacing": [1, { "before": false, "after": true }],
    "computed-property-spacing": [1, "never"],
    "dot-notation": [1, { "allowPattern": "^[a-z]+(_[a-z]+)+$" }],
    "eol-last": [1, "never"],
    "eqeqeq": [1, "smart"],
    "func-names": [1, "as-needed"],
    "func-style": [1, "declaration", { "allowArrowFunctions": true }],
    "indent": [1, 2, { "SwitchCase": 1 }],
    "keyword-spacing": 1,
    "max-len": [1, { "code": 140, "ignoreComments": true, "ignoreUrls": true, "ignoreTemplateLiterals": true }],
    "no-array-constructor": 1,
    "no-bitwise": 1,
    "no-console": 0,
    "no-const-assign": 2,
    "no-continue": 0,
    "no-duplicate-imports": 2,
    "no-eval": 2,
    "no-extra-bind": 1,
    "no-irregular-whitespace": 1,
    "no-lonely-if": 1,
    "no-loop-func": 1,
    "no-mixed-requires": 1,
    "no-multiple-empty-lines": [1, { "max": 1 }],
    "no-new-require": 1,
    "no-param-reassign": 1,
    "no-process-exit": 0,
    "no-return-await": 1,
    "no-throw-literal": 1,
    "no-trailing-spaces": 1,
    "no-undef-init": 1,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 1,
    "no-use-before-define": [1, "nofunc"],
    "no-useless-concat": 1,
    "no-var": 2,
    "object-curly-spacing": [1, "always"],
    "object-shorthand": [1, "always"],
    "prefer-const": 1,
    "prefer-template": 1,
    "quotes": [1, "single", { "allowTemplateLiterals": true }],
    "require-await": 0,
    "semi": [2, "always"],
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, "never"],
    "space-infix-ops": 1
  }
};
