import { Paper, styled } from '@mui/material'
import React from 'react'

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    border: '1px solid #E0E0E1',
    boxSizing: 'border-box'
}));
