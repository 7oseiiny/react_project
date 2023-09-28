import axios from "axios";

const axiosInstance =axios.create(
    {
        baseURL: import.meta.env.VITE_API,
        headers:{

        },
        params:{

        }
    }
)

export default axiosInstance