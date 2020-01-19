import SERVICE_URL from './base';
import axios from '@/utils/request';
import qs from 'qs';

const common = {
	// 刷新Token的过期时间
	keepAlive(params) {
		return axios.post(`${SERVICE_URL.MC}/keepalive`, params);
	},

	// 刷新注册 有效期
	keepAliveReg(params) {
		return axios.post(`${SERVICE_URL.MC}/public/reg/keepalive`, params);
	},

	// 刷新bookLimo 有效期
	keepAliveLimo(params) {
		return axios.post(`${SERVICE_URL.MC}/limo/session-continue`, qs.stringify(params), {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	},

	//地区列表
	getAreaList(params) {
		return axios.get(`${SERVICE_URL.MC}/public/area`, params);
	},

	// 获取stripe 支付公钥
	stripekey(params) {
		return axios.get(`${SERVICE_URL.MC}/card/p-key`, params);
	}
};

export default common;
