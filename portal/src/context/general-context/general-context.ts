import { Dispatch, SetStateAction, createContext } from 'react';

export type GeneralData = Record<string, any>;

export type GeneralContextType = {
    data: {
        get: () => GeneralData | undefined;
        set: Dispatch<SetStateAction<GeneralData>>;
    }
}

export const GeneralContext = createContext<GeneralContextType | undefined>(
    undefined
);