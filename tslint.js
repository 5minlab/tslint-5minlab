module.exports = {
	'extends': [
		'tslint:recommended'
	],
	'rules': {
		'indent': [
			true,
			'tabs'
		],
		'whitespace': [
			true,
			'check-branch',
			'check-decl',
			'check-operator',
			'check-module',
			'check-separator',
			'check-rest-spread',
			'check-type',
			'check-typecast',
			'check-type-operator',
		],
		'quotemark': [
			true,
			'single',
			'jsx-double'
		],
		'member-ordering': false,
		'object-literal-sort-keys': false,
		'ordered-imports': false,
		'interface-name': [
			true,
			'never-prefix'
		],
		'one-line': [
			true,
			'check-open-brace'
		],
		'class-name': false,
		'variable-name': [
			true,
			'ban-keywords',
			'check-format',
			'allow-pascal-case',
			'allow-snake-case'
		],
		'no-namespace': false,
		'max-line-length': [
			true,
			180
		],
		'no-console': false,
		'jsx-alignment': false,
		'jsx-no-multiline-js': false,
		'max-classes-per-file': false,
		'no-consecutive-blank-lines': false,
		'no-empty-interface': false,
		'no-shadowed-variable': false,
		'unified-signatures': false,
		'no-bitwise': false,
		'arrow-parens': false,
		'no-floating-promises': true,
		'object-literal-shorthand': [
			false,
			'never'
		],
		'no-restricted-globals': true,
		'no-consecutive-blank-lines': true,
		'curly': true,
	},
};
