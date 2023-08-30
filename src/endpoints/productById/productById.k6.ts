import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	vus: 3,
	duration: '5m', 
};

export default function() {
    // http.get('https://wa-danil.azurewebsites.net/api/productById/10');
	http.get('http://localhost:3000/api/productById/10');
	sleep(1); 
};
