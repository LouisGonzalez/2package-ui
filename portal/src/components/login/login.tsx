import { Box, CardContent, CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material'
import { PackageCard } from '../ui-components/card/card'
import { CustomTextField } from '../ui-components/textfield/text-field'
import { ConstantsTypography, Text } from '../ui-components/text/text'
import { PackageButton } from '../ui-components/button/button'
import { useLogin } from '../../hooks/use-login/use-login'
import { useEffect } from 'react'
import { useGeneralContext } from '../../context/general-context/use-general-context/use-general-context'

export const DarkTheme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
    },
  },
});

export const Login = () => {

  //TODO Connect this hook with login endpoint in backend
  const { status, values, handlers } = useLogin();
  const generalData = useGeneralContext();

  useEffect(() => {
    if(values.token !== undefined){
      generalData.data.set({
        ...generalData.data.get(),
        authToken: values.token
      })

    } 
  }, [values.token])
  


  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Box
        sx={{ marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5 }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            minHeight: "100hv",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PackageCard>
            <Grid container>
              <Text style={ConstantsTypography.NormalText}>Username</Text>
              <CustomTextField
                onChange={(e) => handlers.userChange(e.target.value)}
              />
              <Text style={ConstantsTypography.NormalText}>Password</Text>
              <CustomTextField
                onChange={(e) => handlers.passwordChange(e.target.value)}
              />
            </Grid>
            <Grid container>
              <PackageButton onClick={handlers.confirmClick}>
                This is a test
              </PackageButton>
            </Grid>
          </PackageCard>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
