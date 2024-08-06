import request from "../utils/request";

export function ApiAuthLogin(data) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}
