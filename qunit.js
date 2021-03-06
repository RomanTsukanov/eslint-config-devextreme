module.exports = {
    env: {
        qunit: true,
        browser: true
    },
    plugins: [
        'qunit'
    ],
    globals: {
        define: true,
        Promise: true,
        SystemJS: true,
        DevExpress: true,
        sinon: true
    },
    rules: {
        'qunit/assert-args': 'error',
        'qunit/literal-compare-order': 'error',
        'qunit/no-arrow-tests': 'error',
        'qunit/no-async-in-loops': 'error',
        'qunit/no-commented-tests': 'warn',
        'qunit/no-identical-names': 'warn',
        'qunit/no-ok-equality': 'error',
        'qunit/no-only': 'error',
        'qunit/no-setup-teardown': 'error'
    }
};
