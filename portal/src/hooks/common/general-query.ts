import { QueryObserverBaseResult, useQuery } from "react-query"
import { useClient } from "../../context/use-client/use-client";

export type UseGeneralQueryResult<K> = [
    queryData: {
        error: QueryObserverBaseResult['error'];
        response: QueryObserverBaseResult['data'];
        isError: QueryObserverBaseResult['isError'];
        isSuccess: QueryObserverBaseResult['isSuccess'];
        isLoading: QueryObserverBaseResult['isLoading'];
        isRefetching: QueryObserverBaseResult['isRefetching'];
    },
    handlers: { refetch: QueryObserverBaseResult['refetch'] }
];

export interface UseGeneralQueryProps {
    queryName?: string;
    url: string;
    queryParams?: any;
    page?: number;
    pageSize?: number;
    enable?: boolean;
}

export function useGeneralQuery<T>(props: UseGeneralQueryProps): UseGeneralQueryResult<T> {
    const { http } = useClient();
    const {
        data: response,
        isLoading,
        isError,
        isRefetching,
        isSuccess,
        refetch,
        error
    } = useQuery<T>({
        queryKey: [props.queryName, props.page, props.pageSize],
        queryFn: async() => {
            const { data } = await http.get(props.url, { params: props.queryParams });
            return data;
        },
        keepPreviousData: true,
        retry: false,
        refetchOnWindowFocus: false,
        enabled: props.enable
    })
    const data = { response, isLoading, isError, error, isSuccess, isRefetching };
    const handlers = { refetch };
    return [ data, handlers ];
}