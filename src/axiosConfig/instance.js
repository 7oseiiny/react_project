import axios from "axios";

const axiosInstance =axios.create(
    {
        baseURL: import.meta.env.VITE_API,
        headers:{
            Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGYzOWQ4OTMzZjk0OTAwZjVlNzVlNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk1OTQzMjU0fQ.2DsZXG0pgVoDfdyImSABfQYJ2hSxyuOI-6eCBkwYAzE"
        },
        params:{

        }
    }
)

export default axiosInstance