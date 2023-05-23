import { Box, Grid, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import { Header } from './header/header';

export const DarkTheme = createTheme({
    palette: {
        background: {
            default: '#F5F5F5'
        }
    }
})

export interface ContainerProps {
    titleComponent: JSX.Element;
    optionsHeader: JSX.Element;
    children: JSX.Element[] | JSX.Element;
}

export const CustomContainer = ({
    titleComponent,
    optionsHeader,
    children
}: ContainerProps) => {


  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        sx={{
          marginTop: 4,
          marginLeft: 2,
          marginBottom: 4,
          marginRight: 2,
        }}
      >
        <Grid container rowSpacing={4}>
          <Grid item xs={12}>
            <Header>
              {titleComponent}
              {optionsHeader}
            </Header>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
