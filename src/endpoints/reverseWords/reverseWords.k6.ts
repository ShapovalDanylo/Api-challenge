import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
	vus: 3,
	duration: '5m', 
};

export default function() {
    
    // const reverseWordsTestUrl = 'https://wa-danil.azurewebsites.net/api/reverseWords';
    const reverseWordsTestUrl = 'http://localhost:3000/api/reverseWords';

    const payload = {
        sentence: "Nest is database agnostic, allowing you to easily integrate with any SQL or NoSQL database"
    }

    const headers = { 'Content-Type': 'application/json' };

    http.post(reverseWordsTestUrl, JSON.stringify(payload), { headers });
	sleep(1); 
};
