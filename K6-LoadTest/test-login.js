import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    iterations: 50000,
    vus: 50000,
    target: 50000,
    duration: '60s',
};
export default function () {
    let res = http.get('http://10.201.1.138:800/eazyn/login.php');

    res = res.submitForm({
        formSelector: 'form',
        fields: {
            username: 'mutiara',
            password: '123456'
        }
    });
    sleep(3);
}
