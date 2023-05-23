import React from 'react'
import { Button, ButtonProps } from "@mui/material";

export type PackageButtonProps = {

} & ButtonProps;

export const PackageButton = (props: PackageButtonProps) => {
  return (
    <Button variant='contained' {...props} disableRipple>
        {props.children}
    </Button>
  )
}
