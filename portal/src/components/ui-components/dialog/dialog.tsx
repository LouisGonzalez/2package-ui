import { Box, Dialog, DialogTitle, DialogTitleProps, IconButton, DialogContent } from '@mui/material'
import React, { ReactNode } from 'react'
import { PackageButtonProps } from '../button/button'
import { ConstantsTypography, Text } from '../text/text';

const CloseButton = (
  props: Omit<PackageButtonProps, 'styles'> & DialogTitleProps,
) => {
  const { children, onClick, ...other } = props;
  return (
    <DialogTitle
      sx={{ m: 0, p: 2}}
      {...other}
    > 
      {children}
      {onClick ? (
        <IconButton
          aria-label='close'
          onClick={onClick}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseButton/>
        </IconButton>
      ): null}
    </DialogTitle>
  )
}

interface PackageDialogProps {
  title: string;
  open?: boolean;
  children?: ReactNode;
  onClose?: Function;
}

export const PackageDialog = (props: PackageDialogProps) => {
  return (
    <Dialog
      open={props.open || false}
      onClose={() => props.onClose && props.onClose()}
      aria-labelledby='dialog-title'
      aria-describedby='dialog-description'
      maxWidth='md'
      fullWidth
    >
      <CloseButton onClick={() => props.onClose && props.onClose()}/>
      <Box sx={{
        marginLeft: 3,
        marginRight: 6,
        marginBottom: 4
      }}>
        <DialogTitle>
          <Text style={ConstantsTypography.Title}>
            {props.title}
          </Text>
        </DialogTitle>
        <DialogContent>{props.children}</DialogContent>
      </Box>
    </Dialog>
  )
}
