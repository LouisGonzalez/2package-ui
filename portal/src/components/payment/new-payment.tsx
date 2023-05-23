import React from 'react'
import { PackageDialog } from '../ui-components/dialog/dialog'
import { Grid } from '@mui/material';
import { ConstantsTypography, Text } from '../ui-components/text/text';
import { CustomTextField } from '../ui-components/textfield/text-field';

export interface NewPaymentProps {
    openDialog: boolean;
    handleClose: () => void;
}

export const NewPayment = ({
    openDialog,
    handleClose
}: NewPaymentProps) => {
  return (
    <PackageDialog title="New payment" open={openDialog}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={6}>
          <Text style={ConstantsTypography.Subtitle}>Name</Text>
          <CustomTextField />
        </Grid>
        <Grid item xs={6}>
          <Text style={ConstantsTypography.Subtitle}>LastName</Text>
          <CustomTextField />
        </Grid>
        <Grid item xs={6}>
          <Text style={ConstantsTypography.Subtitle}>Date</Text>
          <CustomTextField type="date" />
        </Grid>
        <Grid item xs={6}>
          <Text style={ConstantsTypography.Subtitle}>Amount</Text>
          <CustomTextField type="number" />
        </Grid>
        <Grid item xs={12}>
          <Text style={ConstantsTypography.Subtitle}>Card number</Text>
          <CustomTextField type="number" />
        </Grid>
        <Grid item xs={6}>
          <Text style={ConstantsTypography.Subtitle}>CVV</Text>
          <CustomTextField type="password" />
        </Grid>
        <Grid item xs={6}>
          <Text style={ConstantsTypography.Subtitle}>Exp. date</Text>
          <CustomTextField type="date" />
        </Grid>
      </Grid>
    </PackageDialog>
  );
}
