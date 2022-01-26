module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
    "simple-import-sort",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      "./tsconfig.json",
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    // eslint rules
    "max-len": ["error", 240],
    "quotes": ["error", "double"],
    "indent": [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "new-cap": ["error", {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    }],
    "semi": "off",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "comma-dangle": ["error", "always-multiline"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "array-callback-return": ["error"],
    "prefer-destructuring": ["error", {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" }}],
    "prefer-const": "error",
    "prefer-template": "error",
    "template-curly-spacing": ["error", "never"],
    "no-useless-escape": "error",
    "no-loop-func": "error",
    "prefer-rest-params": "error",
    "default-param-last": "error",
    "no-new-func": "error",
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    }],
    "no-param-reassign": "error",
    "function-paren-newline": ["error", "consistent"],
    "space-in-parens": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "prefer-arrow-callback": ["error", {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    "object-curly-spacing": [
      "error",
      "always",
      {
        objectsInObjects: false,
        arraysInObjects: false,
      },
    ],
    "object-curly-newline": ["error",
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      },
    ],
    "block-spacing": ["error", "always"],
    "comma-spacing": ["error", { before: false, after: true }],
    "computed-property-spacing": ["error", "never"],
    "comma-style": ["error", "last", {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],
    "key-spacing": "error",
    "func-call-spacing": ["error", "never"],
    "spaced-comment": ["error", "always", {
      line: {
        exceptions: ["-", "+"],
        markers: ["=", "!", "/"],
      },
      block: {
        exceptions: ["-", "+"],
        markers: ["=", "!", ":", "::"],
        balanced: true,
      },
    }],
    "padded-blocks": ["error", {
      blocks: "never",
      classes: "never",
      switches: "never",
    }, {
      allowSingleLineBlocks: true,
    }],
    "nonblock-statement-body-position": ["error", "beside", { overrides: {}}],
    "arrow-parens": [
      "error",
      "as-needed",
      {
        requireForBlockBody: true,
      },
    ],
    "arrow-spacing": ["error", { before: true, after: true }],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "eol-last": ["error", "always"],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "space-infix-ops": [
      "error",
      {
        int32Hint: false,
      },
    ],
    "switch-colon-spacing": ["error", { "after": true, "before": false }],
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "no-var": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-empty": "warn",
    "no-console": "warn",
    "no-empty-pattern": "warn",
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "no-unused-vars": "off",
    "no-const-assign": "error",
    "no-new-object": "error",
    "no-array-constructor": "error",
    "no-whitespace-before-property": "error",
    // jsx rules
    "jsx-quotes": ["error", "prefer-double"],
    // react rules
    "react/display-name": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-sort-props": "off",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/no-did-mount-set-state": "warn",
    "react/no-did-update-set-state": "warn",
    "react/no-multi-comp": "off",
    "react/no-string-refs": "warn",
    "react/no-unknown-property": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "warn",
    "react/self-closing-comp": "warn",
    "react/wrap-multilines": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        when: "never",
        spacing: {
          objectLiterals: "never",
        },
      },
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "never",
        "afterOpening": "never",
        "beforeClosing": "never",
      },
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "always",
        "children": "always",
      },
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "nonEmpty": "after-props",
        "selfClosing": "tag-aligned",
      },
    ],
    "react/jsx-equals-spacing": ["error", "never"],
    // react-hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    // import sorting rules (cf: https://github.com/lydell/eslint-plugin-simple-import-sort)
    "sort-imports": "off",
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "simple-import-sort/imports": [
      "error",
      {
        // grouped by groups
        // sorted by index inside group
        groups: [
          // React packages
          ["^react", "^react-native", "^@react", "^@react-native"],
          // Anything not matched in another group
          ["^"],
          // Internal packages
          ["^(@components|@hooks|@pages|@providers|@services|@styles|@themes)"],
          // Relative imports
          ["^\\.\\.", "^\\."],
          // Side effect imports
          ["^\\u0000"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    // tslint rules
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-over-type-literal": "off",
    "@typescript-eslint/object-literal-sort-keys": "off",
    "@typescript-eslint/ordered-imports": "off",
    "@typescript-eslint/typedef-whitespace": "off",
    "@typescript-eslint/interface-name": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/type-annotation-spacing": [
      "error",
      {
        "before": false,
        "after": true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
          colon: {
            before: false,
            after: true,
          },
        },
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
  },
};
