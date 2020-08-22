import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridAwake from "./GridAwake"
import AsleepBtn from './AsleepBtn';
import { ThemeProvider } from "@material-ui/styles";

import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

function Awake() {
    
    return (
      <ThemeProvider theme={theme}>
        <Container>
            <AsleepBtn />
            <GridAwake />
          </Container>
      </ThemeProvider>
          )
}

export default Awake