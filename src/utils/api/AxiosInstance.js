import axios from "axios";

const config = {};
config.baseURL = process.env.REACT_APP_BACKEND_URI;
const axiosInstance = new axios.create(config);

axiosInstance.interceptors.request.use(
  function (request) {
    request.headers = {
      Authorization: `Bearer ${localStorage.getItem("MtInventory")}`,
    };

    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
