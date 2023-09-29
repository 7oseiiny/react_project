import axiosInstance from "../axiosConfig/instance";

export const login = (data) => {
    return axiosInstance.post("/user/login", data);
};

export const register = (data) => {
    return axiosInstance.post("/signup", data);
};

export const updateUser = (userid , data) => {
    return axiosInstance.patch(`/user/${userid}`, data);
};
