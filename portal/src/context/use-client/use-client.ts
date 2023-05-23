import { useContext } from "react";
import { ClientContext } from "./client-context/client-context";

export function useClient() {
    const clientContext = useContext(ClientContext);

    if(!clientContext){
        throw new Error('useClient must be used within an AppClientProvider');
    }
    return clientContext;
}