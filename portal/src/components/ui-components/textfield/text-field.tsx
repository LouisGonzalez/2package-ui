import { TextField, TextFieldProps as MUITextFieldProps } from '@mui/material'
import React from 'react'

export type TextFieldProps = {
} & MUITextFieldProps;

const stylesStatic = {
    background: '#FFFFFF',
    width: 1
}

export const CustomTextField = (props: TextFieldProps) => {
  return (
    <TextField sx={stylesStatic} {...props}/>
  )
}
