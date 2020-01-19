import VueI18n from 'vue-i18n';
import Vue from 'vue';
import enUS from './lang/en';
import zhCN from './lang/zh_cn';
import zhHK from './lang/zh_hk';

Vue.use(VueI18n);

var messages = {
	'en-US': enUS,
	'zh-CN': zhCN,
	'zh-HK': zhHK
};

var i18n = new VueI18n({
	locale: localStorage.getItem('lang') || 'en-US',
	messages
});

export default i18n;
