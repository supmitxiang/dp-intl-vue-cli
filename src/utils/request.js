import axios from 'axios';
import context from '../main.js';
import i18n from '../i18n';

const locale = i18n.locale;
const { errorMsg } = i18n.messages[locale];

const errorHandler = (errText, status) => {
	const error = new Error(errorMsg.serviceErr);
	error.name = status;
	throw error;
};

// 创建axios实例
let instance = axios.create();

instance.defaults.baseURL = '';

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(
	(config) => {
		const token = sessionStorage.getItem('token');
		token && (config.headers.Authorization = `Bearer ${token}`);
		config.headers['Accept-language'] = localStorage.getItem('lang') || 'en-US';
		return config;
	},
	(error) => Promise.error(error)
);

instance.interceptors.response.use(
	(response) => (response.status === 200 ? Promise.resolve(response.data) : Promise.reject(response)),
	(error) => {
		const { response } = error;
		if (response) {
			const { status, data } = response;

			if (status === 400) {
				return Promise.reject(data);
			} else if (status === 401) {
			} else if (status >= 500) {
			} else {
				return Promise.reject(response);
			}
		} else {
			context.$dialog.alert(errorMsg.serviceErr);
			throw error;
		}
	}
);

export default instance;
