import { useContext } from "react";
import { GeneralContext } from "../general-context";

export function useGeneralContext () {
    const context = useContext(GeneralContext);

    if(!context) throw new Error('component should use a ContainerProvider');
    return context;
}