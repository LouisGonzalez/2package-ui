import axios, { AxiosInstance } from "axios";
import { ObjectBuilder } from "../utils/object-builder/object-builder";

const defaultConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Correlation-Id, T-Session-Token, Authorization",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": "true",
  },
  withCredentials: true,
  credentials: "include",
};

const AxiosConfig = new ObjectBuilder().add(defaultConfig).build();

export const http: AxiosInstance = axios.create(AxiosConfig);