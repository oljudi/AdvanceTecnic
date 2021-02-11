import axios from 'axios';

const baseURL = 'https://app.fakejson.com';

const MY_SERVICE = axios.create({
    baseURL
});

const PRODUCTS_SERVICE = {
    getProducts: async () => {
        return await MY_SERVICE.get('/q/bseM14b5?token=Eu8Xnub7bN54f4in0QMWIA')
    }
}

export default PRODUCTS_SERVICE;