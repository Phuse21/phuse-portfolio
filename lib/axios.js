import Axios from "axios";

const axios = Axios.create({
  baseURL: "/", // The base URL is set to your app's root
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default axios;
