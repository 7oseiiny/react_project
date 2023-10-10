import axios from "axios";
// import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,

});

export default axiosInstance;

// axiosInstance.interceptors.response.use(
//   (response) => {
//      accessToken = response.data.accessToken;

//     if (accessToken) {
//       axiosInstance.defaults.headers['Authorization'] = accessToken ;
//     }

//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
