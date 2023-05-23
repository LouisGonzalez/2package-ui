import { AppBar, Box } from '@mui/material'
import React from 'react'
import { ConstantsDropdownButtons, DropdownButton } from '../../dropdown-button/dropdown-button'
import { useGeneralContext } from '../../../../context/general-context/use-general-context/use-general-context'


export const Topbar = () => {

  const generalData = useGeneralContext();

  const logOut = () => {
    generalData.data.set({
      ...generalData.data.get(),
      authToken: null
    })
  };

  const subOptions = [
    {
      title: "Log out",
      click: logOut,
    },
  ];

  const pages = [
    {
      buttonTitle: "username",
      options: subOptions,
    },
  ];


  const givenName: string = 'test';
  const lastName: string = 'user';

  return (
    <AppBar
      sx={{
        bgcolor: "#C70039",
        color: "#FFFFFF",
        height: "40px",
      }}
      position="fixed"
      elevation={0}
    >
      <Box
        sx={{
          marginTop: 0.4,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "flex",
            },
            justifyContent: "flex-end",
          }}
        >
          <DropdownButton
            buttonTitle={givenName + " " + lastName}
            options={pages[0].options}
            styles={ConstantsDropdownButtons.AlternativeButton}
          />
        </Box>
      </Box>
    </AppBar>
  );
}
