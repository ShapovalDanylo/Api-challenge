import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	vus: 3,
	duration: '5m', 
};

export default function() {
    // http.get('https://wa-danil.azurewebsites.net/api/fibonacciSequence?n=11');
	http.get('http://localhost:3000/api/fibonacciSequence?n=11');
	sleep(1); 
};