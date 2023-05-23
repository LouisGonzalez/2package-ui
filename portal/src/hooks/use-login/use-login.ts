import { QueryObserverBaseResult, useMutation, useQueryClient } from "react-query";
import { environment } from "../../environment";
import { UseGeneralQueryResult, useGeneralQuery } from "../common/general-query";
import { MouseEventHandler, useState } from 'react';
import { useClient } from "../../context/use-client/use-client";

export interface LoginMutationProps {
    token: any;
}

export interface LoginMutationStatus {
    isError: QueryObserverBaseResult['isError'];
    isLoading: QueryObserverBaseResult['isLoading'];
}

export interface LoginMutationHandlers {
    confirmClick: MouseEventHandler<HTMLButtonElement>;
    userChange: (user: string) => void;
    passwordChange: (password: string) => void;
}

export interface LoginResult {
    status: LoginMutationStatus;
    values: LoginMutationProps;
    handlers: LoginMutationHandlers;
}

export function useLogin(): LoginResult {
    const { http } = useClient();
    const queryClient = useQueryClient();
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleUser = (user: string) => {
        setUser(user);
    }

    const handlePassword = (password: string) => {
        setPassword(password);
    }

    const { data, isLoading, isError, mutate } = useMutation({
        mutationFn: async () => {
            const { data } = await http.post(`${environment.routes.backend}/auth/login`, {
                username: user,
                password: password
            })
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['login'] });
        }
    });

    const confirmClick: MouseEventHandler<HTMLButtonElement> = () => {
        mutate();
    }

    const values = {
        token: data
    }

    const handlers = {
        confirmClick,
        userChange: handleUser,
        passwordChange: handlePassword
    }

    const status = { isLoading, isError }

    return { status, values, handlers };

}