import Vue from 'vue'
import App from './App.vue'

//icon-font
import SvgIcon from './components/svg-icon.vue';
import FontIcon from './components/font-icon.vue';
import './css/icon.css';
import './css/icon-font/iconfont.css';
import './css/icon-font/iconfont.js';

Vue.component('SvgIcon', SvgIcon);
Vue.component('FontIcon', FontIcon);

new Vue({
  el: '#app',
  render: h => h(App)
})
