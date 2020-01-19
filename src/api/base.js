const PROD_HOST = 'travelwithus.mastercard.com';
const PAYMENT_DEV = 'https://paymentdev.dragonpass.com.cn';
const PAYMENT_PROD = 'https://payment.dragonpass.com.cn';

const SERVICE_URL = {
	PAYMENT:
		process.env.NODE_ENV == 'development'
			? '/paymentApi'
			: window.location.host === PROD_HOST ? PAYMENT_PROD : PAYMENT_DEV,
	MC: process.env.NODE_ENV == 'development' ? '/mcApi' : '/api'
};

export default SERVICE_URL;
