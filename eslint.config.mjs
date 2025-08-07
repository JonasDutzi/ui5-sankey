import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				sap: "readonly",
				node: true,
			},
			ecmaVersion: 2023,
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		ignores: ["eslint.config.mjs"],
		rules: {},
		overrides: [
			{
				files: ["test/**/*.{ts,js}", "test/**"],
				rules: {
					"@typescript-eslint/no-unsafe-call": "off",
					"@typescript-eslint/no-unsafe-member-access": "off",
					"@typescript-eslint/no-unsafe-return": "off",
					"@typescript-eslint/no-explicit-any": "off",
				},
			},
		],
	},
);
