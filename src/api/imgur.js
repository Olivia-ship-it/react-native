import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.imgur.com/3/gallery/random/random',
    Headers: {
        Authorization: 'Bearer e27640b87216228612c65a7dce68574867f9c6bf'
    }
});



