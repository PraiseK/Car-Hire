import request from "../utils/request.js";

export function ApiGetBookingOverView() {
    return request({
        url: "/booking/overview",
        method: "get",
    });
}

export function ApiGetCarOverView() {
    return request({
        url: "/car/overview",
        method: "get",
    });
}
