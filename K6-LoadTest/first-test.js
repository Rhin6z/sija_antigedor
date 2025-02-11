import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    iterations: 100,
    target: 100,
    vus: 100,
};

export default function () {
    http.get('http://10.20.12.125');
    sleep(1);
}