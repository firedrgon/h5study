// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './base.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App }, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})
