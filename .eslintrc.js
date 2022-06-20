module.exports = {
	root: true,
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		'plugin:react/recommended',
    	'standard',
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "13",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		'@typescript-eslint/no-use-before-define': 'off',
		'constructor-super': "error",
		'no-use-before-define': 'off',
		"no-unused-vars": 'off',
		'no-useless-constructor': 'off',
		'no-useless-return': 'off',
		'no-mixed-spaces-and-tabs': ["error", "smart-tabs"],
		'dot-notation': 'off',
		'comma-dangle': [ 'error', 'always-multiline' ],
		semi: [ 'error', 'always' ],
		'padded-blocks': 'off',
		'space-before-function-paren': 'off',
		'lines-between-class-members': 'off',
	},
	globals: {
		React: true,
		JSX: true,
	}
};
