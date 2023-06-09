import axios from "axios";

axios.defaults.baseURL = "https://8000-hollyt85-api-s17ga60qnwc.ws-eu99.gitpod.io/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();