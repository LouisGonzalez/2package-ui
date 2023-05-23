import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, createTheme } from "@mui/material";
import { Login } from "./components/login/login";
import { CustomTextField } from "./components/ui-components/textfield/text-field";
import { Appbar } from "./components/ui-components/app-bar/app-bar";
import { useState, useEffect } from "react";
import { GeneralContext, GeneralData } from "./context/general-context/general-context";
import { useGeneralContext } from "./context/general-context/use-general-context/use-general-context";
import { Home } from "./Home";

export const DarkTheme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
    },
  },
});

export const App = () => {
  const [authToken, setAuthToken] = useState(false);
  const [data, setData] = useState<GeneralData>();

  useEffect(() => {
    if(data !== undefined){
      if (data.authToken !== null) {
        setAuthToken(true);
      } else {
        setAuthToken(false);
      } 

    }
  }, [data]);

  
  return (
    <GeneralContext.Provider
      value={{
        data: {
          set: setData,
          get: () => data,
        },
      }}
    >
      <ThemeProvider theme={DarkTheme}>
        <CssBaseline />
        <Box
          sx={{ marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5 }}
        >
          {/* {authToken !== false ? <Home/> : <Login />} */}
          <Home/>
        </Box>
      </ThemeProvider>
    </GeneralContext.Provider>
  );
};
