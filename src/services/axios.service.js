import baseURL, {apiKey, url} from '../configs/url';

const axios = require("axios").default;

const axiosService = axios.create({baseURL})

 export const movies = {
     getAll: axiosService.get(`${url.movies}?api_key=${apiKey}`).then((response) => {response.data})
 }

//
// export default axiosService;

