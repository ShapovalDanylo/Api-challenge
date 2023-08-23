import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	vus: 3,
	duration: '30s', 
};

export default function() {
    http.get('https://wa-danil.azurewebsites.net/api/fibonacciSequence?n=11');
	sleep(1); 
};
