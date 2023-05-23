import { TablePaginationProps } from "@mui/material";
import { useState, MouseEvent, ChangeEvent } from "react";

export type UseTablePaginationOptions = Pick<
    TablePaginationProps,
    'page' | 'rowsPerPage'
>;

export function useTablePaginationHandlers(
    options?: UseTablePaginationOptions
) {
    const [ page, setPage ] = useState<number>(options?.page || 0);
    const [ rowsPerPage, setRowsPerPage ] = useState<number>(
        options?.rowsPerPage || 5
    );

    const handlePageChange = (
        _event: MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
        const {
            target: { value }
        } = event;

        const newPageSizeValue = Number(value);

        if(!Number.isNaN(newPageSizeValue)) setRowsPerPage(newPageSizeValue);
    };
    
    return {
        page,
        rowsPerPage,
        handlePageChange,
        handleRowsPerPageChange
    };


}