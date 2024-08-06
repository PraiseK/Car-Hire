import axios from "axios";
import { KEY, getCookie, removeCookie } from "./cookie";
// import path from "../routes/path";

const service = axios.create({
  baseURL: "http://localhost:9000",
});

service.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json",
      Authorization: getCookie(KEY.TOKEN)
        ? `Bearer ${getCookie(KEY.TOKEN)}`
        : undefined,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        removeCookie(KEY.TOKEN);
        removeCookie(KEY.USERNAME);
        // window.location.href = path.LOGIN;
        window.location.href = "/admin";
      } else {
        return Promise.reject(error);
      }
    }
  }
);

export default service;
