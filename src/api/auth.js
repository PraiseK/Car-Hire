/**
 * Performs a login request to the API.
 *
 * @function ApiAuthLogin
 * @param {Object} data - The user credentials to be sent in the request.
 * @param {string} data.username - The username of the user.
 * @param {string} data.password - The password of the user.
 * @returns {Promise} - A Promise that resolves with the API response if the login is successful,
 *                      or rejects with an error if the login fails.
 */

import request from "../utils/request";

export function ApiAuthLogin(data) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}

export function ApiAuthRegister(data) {
  return request({
    url: "/user/register",
    method: "post",
    data,
  });
}

export function ApiAuthGetUser() {
  return request({
    url: "/user",
    method: "get",
  });
}
