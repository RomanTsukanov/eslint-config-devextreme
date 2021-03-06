module.exports = {
    extends: [
        'devextreme/typescript'
    ],
    rules: {
        // Declarations used for generate target components in the development mode
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        // Declaration should contain two classes - component class and props class
        'max-classes-per-file': ['error', 2],

        // Declaration is not a real React component and doesn't need it
        'react/react-in-jsx-scope': ['off']
    }
};
