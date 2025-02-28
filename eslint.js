module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": ["error", {endOfLine: "auto"}],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "no-console": "warn",
        "import/order": [
            "error",
            {
                "groups": ["builtin", "external", "internal"],
                "pathGroups": [
                    {
                        "pattern": "react",
                        "group": "external",
                        "position": "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["react"],
                "newlines-between": "always",
                "alphabetize": {"order": "asc", "caseInsensitive": true}
            }
        ]
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
