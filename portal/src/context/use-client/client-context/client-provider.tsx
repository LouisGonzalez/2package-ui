import { ReactNode } from "react";
import { AppClients, ClientContext } from "./client-context";

export interface AppClientProviderProps {
    children: ReactNode;
    clients: AppClients;
}

export function AppClientProvider({
    children,
    clients
} : AppClientProviderProps) {
    return (
        <ClientContext.Provider value={clients}>{children}</ClientContext.Provider>
    )
}