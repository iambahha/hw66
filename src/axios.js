import axios from 'axios';

const axiosApi = axios.create({
	baseURL: 'https://my-react-apps-6805c.firebaseio.com/'
});

axiosApi.interceptors.request.use(req => {
	console.log('[In request interceptor]', req);
	return req;
});

axiosApi.interceptors.request.use(res => {
	console.log('[In response interceptor]', res);
	return res;
},  err => {
	console.log('[In response interceptor]', err['response']);
	throw err;
});

export default axiosApi;
