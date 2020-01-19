import Vue from 'vue';
import App from './App';
import router from './router';
import i18n from './i18n';
import api from './api';
import VuejsDialog from 'vuejs-dialog';
import store from './store';
import 'babel-polyfill';
import '@/assets/css/index.css';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.config.productionTip = false;

Vue.use(VuejsDialog, {
	html: true,
	okText: 'OK',
	cancelText: 'Cancel'
});

Vue.prototype.$api = api;

let vue = new Vue({
	el: '#app',
	router,
	i18n,
	store,
	components: {
		App
	},
	template: '<App/>'
});

export default vue;
