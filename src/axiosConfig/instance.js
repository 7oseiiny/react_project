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

export default axiosInstance