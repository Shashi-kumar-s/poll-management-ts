import axios from "axios";

export const APIEnpoint = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});
