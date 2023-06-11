module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    parser: "vue-eslint-parser",
      //------------
    env: {
      browser: true,
      node: true,
      es6: true,
    },
     //------------
    // extends: ['plugin:vue/recommended', 'eslint:recommended'],
    //close eslint
    extends: ['plugin:vue/recommended'],

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
      // 'no-console': 'off'
    }
  }
