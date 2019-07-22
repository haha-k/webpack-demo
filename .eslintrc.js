module.exports = {
    root: true,
    "parserOptions": {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: [
        'standard'
    ],
    globals: {
        NODE_ENV:false
    },
    rules: {
        'generator-star-spacing' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        semi: ['error','always',],
        'space-before-function-paren' : ['error','never'],
        'no-unexpected-multiline':'off',
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ]


    }
}