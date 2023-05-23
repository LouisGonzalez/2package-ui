import React from 'react'
import { Appbar } from './components/ui-components/app-bar/app-bar';
import { CreateRoute } from './components/routes/create-route/create-route';
import { PackageButton } from './components/ui-components/button/button';
import { useState } from 'react';
import { NewPayment } from './components/payment/new-payment';
import { CustomContainer } from './components/ui-components/container/container';
import { ConstantsTypography, Text } from './components/ui-components/text/text';
import { Item } from './components/ui-components/item/item';
import { UsersList } from './components/users/users-list';
import { RoutesList } from './components/routes/routes-list/routes-list';

export const Home = () => {

  const [openDialog, setOpenDialog] = useState(false);

  const titleTest = <Text style={ConstantsTypography.Title}>Routes list</Text>
  const options = (
    <>
      <PackageButton>New element</PackageButton>
    </>
  );

  return (
    <>
      <Appbar />
      {/* <PackageButton onClick={() => setOpenDialog(true)}>
        Create route
      </PackageButton>
      <CreateRoute
        openDialog={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
      /> */}
      {/* <NewPayment
        openDialog={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
      /> */}
      <Item>
        <CustomContainer titleComponent={titleTest} optionsHeader={options}>
          <RoutesList/>
        </CustomContainer>
      </Item>
    </>
  );
}
