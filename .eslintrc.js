module.exports = {
    root: true,
    extends: ["@react-native-community", "prettier"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/no-shadow": ["error"],
                "no-shadow": "off",
                "no-undef": "off",
                "prettier/prettier": [
                    "error",
                    {
                        endOfLine: "auto",
                    },
                ],
                "no-unused-vars": [
                    "off",
                    {
                        vars: "all",
                        args: "after-used",
                        ignoreRestSiblings: false,
                    },
                ],
                "@typescript-eslint/no-unused-vars": "warn",
            },
        },
    ],
};
