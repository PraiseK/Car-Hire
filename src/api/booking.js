import request from "../utils/request";

export function ApiCreateBooking(data) {
  return request({
    url: "/booking",
    method: "post",
    data,
  });
}

export function ApiGetAllBooking() {
  return request({
    url: "/booking",
    method: "get",
  });
}

export function ApiGetBookingDetail(id) {
  return request({
    url: "/booking/details/" + id,
    method: "get",
  });
}

export function ApiUpdateBooking(id, data) {
  return request({
    url: "/booking/update/" + id,
    method: "put",
    data,
  });
}

export function ApiGetBookingClient(data) {
  return request({
    url: "/booking/booking-client",
    method: "post",
    data,
  });
}
