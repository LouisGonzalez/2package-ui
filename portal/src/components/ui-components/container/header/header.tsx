import { Box, Grid } from "@mui/material";
import React, { Children, ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode;
}

export const Header = (props: HeaderProps) => {
  return (
    <Grid container>
      {Children.map(props.children, (child, index) => {
        if (index === 0) {
            return (
              <Grid item sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ marginTop: 2, marginBottom: 1 }}>{child}</Box>
              </Grid>
            );
        }
        return (
            <Grid
                item
                sx={{
                    flexGrow: 1,
                    display: { xs: 'flex'},
                    justifyContent: 'flex-end'
                }}
            >
                <Box sx={{ marginTop: 1, marginBottom: 3 }}>{child}</Box>
            </Grid>
        )
      })}
    </Grid>
  );
};
