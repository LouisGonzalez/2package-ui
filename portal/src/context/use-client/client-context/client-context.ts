import { AxiosInstance } from "axios";
import { createContext } from "react";

export interface AppClients {
    http: AxiosInstance;
}

export const ClientContext = createContext<AppClients | undefined>(undefined);