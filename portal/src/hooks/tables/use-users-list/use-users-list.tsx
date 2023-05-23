import { UseGeneralQueryResult } from "../../common/general-query";
import { useGeneralQuery } from "../../common/general-query";

export interface UseUsersListDependencies {
  page: number;
  pageSize: number;
}

export function useUserstList<T>({
  page,
  pageSize,
}: UseUsersListDependencies): UseGeneralQueryResult<T> {
  const [data, handlers] = useGeneralQuery<T>({
    page: page,
    pageSize: pageSize,
    url: `todefine`,
    queryName: "users-list-data",
  });

  return [data, handlers];
}
