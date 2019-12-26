import axios from 'axios';

const axiosApi = axios.create({
	baseURL: 'https://my-react-apps-6805c.firebaseio.com/'
});

export default axiosApi;