import axios from "axios";

const axiosInstance =axios.create(
    {
        baseURL: import.meta.env.VITE_API,
        headers:{
            Authorization:localStorage.getItem('token')?localStorage.getItem('token').replaceAll('"',""):""

        },
        params:{

        }
    }
)
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
export default axiosInstance