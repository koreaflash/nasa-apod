import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=M6PYyelsVTxVXlMFZ1v7z4BTGJxGwP4dxTLUhgmy&date=${date}`);
}