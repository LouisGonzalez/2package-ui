import { UseGeneralQueryResult } from "../../common/general-query";
import { useGeneralQuery } from "../../common/general-query";

export interface UseCheckpointListDependencies {
  page: number;
  pageSize: number;
}

export function useCheckpointList<T>({
  page,
  pageSize,
}: UseCheckpointListDependencies): UseGeneralQueryResult<T> {
  const [data, handlers] = useGeneralQuery<T>({
    page: page,
    pageSize: pageSize,
    url: `todefine`,
    queryName: "checkpoints-list-data",
  });

  return [data, handlers];
}
