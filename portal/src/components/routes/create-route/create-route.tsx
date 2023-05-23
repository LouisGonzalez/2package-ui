import React, { useState } from 'react'
import { PackageDialog } from '../../ui-components/dialog/dialog'
import { Grid, Box } from '@mui/material';
import { ConstantsTypography, Text } from '../../ui-components/text/text';
import { CustomTextField } from '../../ui-components/textfield/text-field';
import { PackageButton } from '../../ui-components/button/button';

export interface CreateRouteProps {
    openDialog: boolean;
    handleClose: () => void;
}

export const CreateRoute = ({ openDialog, handleClose }: CreateRouteProps) => {

  return (
    <PackageDialog title="Create Route" open={openDialog} onClose={handleClose}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12}>
          <Text style={ConstantsTypography.Subtitle}>Route name</Text>
          <CustomTextField />
        </Grid>
        <Grid item xs={12}>
          <Text style={ConstantsTypography.Subtitle}>Initial point</Text>
          <CustomTextField />
        </Grid>
        <Grid item xs={12}>
          <Text style={ConstantsTypography.Subtitle}>Final point</Text>
          <CustomTextField />
        </Grid>
        <Grid item xs={6}>
          <Text style={ConstantsTypography.Subtitle}>Price</Text>
          <CustomTextField />
        </Grid>
        <Grid item xs={6}>
          <Text style={ConstantsTypography.Subtitle}>Number of days</Text>
          <CustomTextField />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              marginTop: 3,
              position: "relative",
            }}
          >
            <PackageButton>Confirm</PackageButton>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ marginTop: 3 }}>
            <PackageButton>Cancel</PackageButton>
          </Box>
        </Grid>
      </Grid>
    </PackageDialog>
  );
}
