import axios from 'axios';

const instance = axios.create({
    baseURL:'https://grosaera-b4258-default-rtdb.firebaseio.com/'
});

export default instance;
