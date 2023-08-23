import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	vus: 3,
	duration: '30s', 
};

export default function() {
    http.get('https://wa-danil.azurewebsites.net/api/productsInRange?rangeStart=10&rangeEnd=100');
	sleep(1); 
};
