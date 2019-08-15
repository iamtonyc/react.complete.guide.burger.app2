import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tony-my-burger.firebaseio.com/'
});

export default instance;