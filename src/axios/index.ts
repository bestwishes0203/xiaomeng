import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:9090",
    timeout: 2000,
});

// 拦截器的添加
request.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// 响应拦截器
request.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default request;
