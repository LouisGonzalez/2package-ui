import { UseGeneralQueryResult } from "../../common/general-query";
import { useGeneralQuery } from "../../common/general-query";

export interface UsePackagesListDependencies {
  page: number;
  pageSize: number;
}

export function usePackagesList<T>({
  page,
  pageSize,
}: UsePackagesListDependencies): UseGeneralQueryResult<T> {
  const [data, handlers] = useGeneralQuery<T>({
    page: page,
    pageSize: pageSize,
    url: `todefine`,
    queryName: "packages-list-data",
  });

  return [data, handlers];
}
