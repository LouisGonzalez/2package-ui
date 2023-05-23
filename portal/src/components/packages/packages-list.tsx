import React, { useMemo } from 'react'
import { useTablePaginationHandlers } from '../../hooks/use-table-pagination/use-table-pagination';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import { ConstantsTypography, Text } from '../ui-components/text/text';
import { usePackagesList } from '../../hooks/tables/use-packages-list/use-packages-list';

export const PackagesList = () => {

  const tableColumns = useMemo(
    () => ["Id", "Route", "Status", "User"],
    []
  );

  const {
    rowsPerPage,
    page: currentPage,
    handlePageChange,
    handleRowsPerPageChange,
  } = useTablePaginationHandlers();
  
  const [data, handlers ] = usePackagesList<any>({
    page: currentPage,
    pageSize: rowsPerPage,
  }) as any;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns.map((column) => (
              <TableCell key={column}>
                <b>{column}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.isLoading ? (
            <TableRow>
              <TableCell width="100%" align="center" sx={{ height: "15rem" }}>
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : data.isError ? (
            <TableRow>
              <TableCell width="100%" align="center" sx={{ height: "15rem" }}>
                <Text style={ConstantsTypography.Subtitlev2}>
                  No Packages found
                </Text>
              </TableCell>
            </TableRow>
          ) : (
            data.response
              ?.slice(
                currentPage * rowsPerPage,
                currentPage * rowsPerPage + rowsPerPage
              )
              .map((node: any) => (
                <TableRow>
                  <TableCell>value 1</TableCell>
                  <TableCell>value 2</TableCell>
                  <TableCell>value 3</TableCell>
                  <TableCell>value 4</TableCell>
                </TableRow>
              ))
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={currentPage}
              page={currentPage}
              rowsPerPage={rowsPerPage}
              onPageChange={handlePageChange}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
