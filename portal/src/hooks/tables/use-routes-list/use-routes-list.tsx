import React from 'react'
import { UseGeneralQueryResult } from '../../common/general-query';
import { useGeneralQuery } from '../../common/general-query';
import { environment } from '../../../environment';

export interface UseRouseListDependencies {
    page: number;
    pageSize: number;
    enable: boolean;
}

export function useRoutesList<T>({
    page,
    pageSize,
    enable
}: UseRouseListDependencies): UseGeneralQueryResult<T> {
    const [data, handlers] = useGeneralQuery<T>({
      page: page,
      pageSize: pageSize,
      url: `${environment.routes.backend}/route/`,
      queryName: "routes-list-data",
      enable: enable
    });

    return [data, handlers];
}
