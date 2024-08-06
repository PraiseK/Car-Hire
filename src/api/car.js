import request from "../utils/request";

export function ApiGetCarAvailabel(location) {
  return request({
    url: "/car/search/" + location,
    method: "get",
  });
}

export function ApiGetAllCar() {
  return request({
    url: "/car",
    method: "get",
  });
}

export function ApiCreateCar(data) {
  return request({
    url: "/car",
    method: "post",
    data,
  });
}
export function ApiDeleteCar(id) {
  return request({
    url: "/car/" + id,
    method: "delete",
  });
}

export function ApiUpdateCar(id, data) {
  return request({
    url: "/car/update/" + id,
    method: "put",
    data,
  });
}
