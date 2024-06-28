/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {//添加忽略信息
    'vue/multi-word-component-names': 'off',// 允许 'index' 作为文件名；屏蔽需多个单词文件名提示
    // 'vue/multi-word-component-names': ['error', {
    //   ignores: ['index'] // 允许 'index' 作为文件名
    // }]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
