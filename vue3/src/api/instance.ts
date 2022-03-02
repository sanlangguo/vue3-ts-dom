import axios from "axios";
import { config } from "./config";

export const api = axios.create({
  baseURL: config.domain,
  timeout: 30 * 1000,
  headers: {},
});

const services = [api];

services.forEach((service) => {
  service.interceptors.request.use(
    (config: any) => {
      return config;
    },
    (error) => Promise.reject(error)
  );
  service.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => Promise.reject(error)
  );
});
